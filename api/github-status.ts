import type { VercelRequest, VercelResponse } from '@vercel/node';

interface RepoData {
  name: string;
  repo: string;
  lastCommit: string;
  commitCount: string;
  lastAuthor: string;
  error?: boolean;
}

interface GitHubCommit {
  commit: {
    author: {
      name: string;
      date: string;
    };
  };
}

interface GitHubContributor {
  contributions: number;
}

async function fetchRepoData(repo: string, token: string): Promise<Omit<RepoData, 'name'>> {
  try {
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `Bearer ${token}`,
    };

    // Fetch latest commit from main branch
    const commitsRes = await fetch(
      `https://api.github.com/repos/${repo}/commits?sha=main&per_page=1`,
      { headers }
    );

    if (!commitsRes.ok) {
      // Try master branch if main doesn't exist
      const masterRes = await fetch(
        `https://api.github.com/repos/${repo}/commits?sha=master&per_page=1`,
        { headers }
      );
      if (!masterRes.ok) {
        throw new Error(`GitHub API error: ${commitsRes.status}`);
      }
      const commits: GitHubCommit[] = await masterRes.json();
      return processCommits(commits, repo, headers);
    }

    const commits: GitHubCommit[] = await commitsRes.json();
    return processCommits(commits, repo, headers);
  } catch (error) {
    console.error(`Error fetching ${repo}:`, error);
    return {
      repo,
      lastCommit: '-',
      commitCount: '-',
      lastAuthor: '-',
      error: true,
    };
  }
}

async function processCommits(
  commits: GitHubCommit[],
  repo: string,
  headers: Record<string, string>
): Promise<Omit<RepoData, 'name'>> {
  const lastCommit = commits[0];

  // Get total commits via contributors endpoint
  let totalCommits = '?';
  try {
    const contributorsRes = await fetch(
      `https://api.github.com/repos/${repo}/contributors?per_page=100`,
      { headers }
    );
    if (contributorsRes.ok) {
      const contributors: GitHubContributor[] = await contributorsRes.json();
      if (Array.isArray(contributors)) {
        const sum = contributors.reduce((acc, c) => acc + c.contributions, 0);
        totalCommits = sum.toString();
      }
    }
  } catch {
    // Ignore contributor fetch errors
  }

  return {
    repo,
    lastCommit: lastCommit?.commit?.author?.date
      ? new Date(lastCommit.commit.author.date).toLocaleDateString('it-IT', {
          day: '2-digit',
          month: '2-digit',
        })
      : '-',
    commitCount: totalCommits,
    lastAuthor: lastCommit?.commit?.author?.name?.split(' ')[0] || '-',
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({ error: 'GITHUB_TOKEN not configured' });
  }

  // Get repos from query param (comma-separated)
  const reposParam = req.query.repos;
  if (!reposParam || typeof reposParam !== 'string') {
    return res.status(400).json({ error: 'Missing repos parameter' });
  }

  const repos = reposParam.split(',').filter(Boolean);

  if (repos.length === 0) {
    return res.status(400).json({ error: 'No repos provided' });
  }

  // Fetch all repos in parallel
  const results = await Promise.all(
    repos.map(async (repo) => {
      const data = await fetchRepoData(repo.trim(), token);
      return { name: repo.trim(), ...data };
    })
  );

  // Return as object keyed by repo name for easy lookup
  const resultMap: Record<string, Omit<RepoData, 'name'>> = {};
  results.forEach((r) => {
    resultMap[r.name] = {
      repo: r.repo,
      lastCommit: r.lastCommit,
      commitCount: r.commitCount,
      lastAuthor: r.lastAuthor,
      error: r.error,
    };
  });

  return res.status(200).json(resultMap);
}
