// Status page - /status
// Reads from apps-status.yaml + Vercel API for GitHub data (private repos)

import { useEffect, useState } from 'react';
import yaml from 'js-yaml';
import statusYaml from '../config/apps-status.yaml?raw';

interface AppConfig {
  name: string;
  status: 'live' | 'beta' | 'dev' | 'planned' | 'paused';
  mvp: number;
  industrialization: number;
  repo: string | null;
  notes: string;
}

interface GitHubData {
  lastCommit: string;
  commitCount: string;
  lastAuthor: string;
  loading: boolean;
  error?: boolean;
}

interface StatusConfig {
  apps: AppConfig[];
}

const statusColors: Record<AppConfig['status'], string> = {
  live: 'bg-green-500',
  beta: 'bg-blue-500',
  dev: 'bg-yellow-500',
  planned: 'bg-gray-400',
  paused: 'bg-red-400',
};

const statusLabels: Record<AppConfig['status'], string> = {
  live: '🟢 LIVE',
  beta: '🔵 BETA',
  dev: '🟡 DEV',
  planned: '⚪ PLAN',
  paused: '🔴 PAUSE',
};

// Fetch GitHub data via Vercel serverless function (supports private repos)
async function fetchAllGitHubData(repos: string[]): Promise<Record<string, GitHubData>> {
  try {
    const reposParam = repos.join(',');
    const res = await fetch(`/api/github-status?repos=${encodeURIComponent(reposParam)}`);
    
    if (!res.ok) {
      throw new Error('API error');
    }
    
    const data = await res.json();
    
    // Transform to our format
    const result: Record<string, GitHubData> = {};
    for (const repo of repos) {
      const repoData = data[repo];
      if (repoData) {
        result[repo] = {
          lastCommit: repoData.lastCommit || '-',
          commitCount: repoData.commitCount || '-',
          lastAuthor: repoData.lastAuthor || '-',
          loading: false,
          error: repoData.error,
        };
      } else {
        result[repo] = {
          lastCommit: '-',
          commitCount: '-',
          lastAuthor: '-',
          loading: false,
          error: true,
        };
      }
    }
    
    return result;
  } catch {
    // Return error state for all repos
    const result: Record<string, GitHubData> = {};
    for (const repo of repos) {
      result[repo] = {
        lastCommit: '-',
        commitCount: '-',
        lastAuthor: '-',
        loading: false,
        error: true,
      };
    }
    return result;
  }
}

export function StatusPage() {
  const [config, setConfig] = useState<StatusConfig | null>(null);
  const [githubData, setGithubData] = useState<Record<string, GitHubData>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Parse YAML config
    try {
      const parsed = yaml.load(statusYaml) as StatusConfig;
      setConfig(parsed);
      
      // Get all repos that need GitHub data
      const repos = parsed.apps
        .filter(app => app.repo)
        .map(app => app.repo as string);
      
      // Initialize GitHub data state with loading
      const initialGithub: Record<string, GitHubData> = {};
      repos.forEach(repo => {
        initialGithub[repo] = { lastCommit: '...', commitCount: '...', lastAuthor: '...', loading: true };
      });
      setGithubData(initialGithub);
      setLoading(false);
      
      // Fetch all GitHub data in one API call
      if (repos.length > 0) {
        fetchAllGitHubData(repos).then(data => {
          setGithubData(data);
        });
      }
    } catch (e) {
      console.error('Failed to parse YAML:', e);
      setLoading(false);
    }
  }, []);

  if (loading || !config) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <span className="animate-pulse">Loading...</span>
      </div>
    );
  }

  const totalApps = config.apps.length;
  const liveApps = config.apps.filter(a => a.status === 'live').length;
  const avgMvp = Math.round(config.apps.reduce((sum, a) => sum + a.mvp, 0) / totalApps);
  const avgInd = Math.round(config.apps.reduce((sum, a) => sum + a.industrialization, 0) / totalApps);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-3">
      <div className="max-w-7xl mx-auto">
        {/* Header compatto */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">◆</span>
            <h1 className="text-lg font-bold">3ASYAPPS Status</h1>
          </div>
          <div className="flex gap-3 text-[10px]">
            <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded">{liveApps}/{totalApps} Live</span>
            <span className="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded">MVP: {avgMvp}%</span>
            <span className="bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded">IND: {avgInd}%</span>
          </div>
        </div>

        {/* Tabella compatta */}
        <table className="w-full text-[11px]">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-700">
              <th className="py-1.5 w-28">App</th>
              <th className="py-1.5 w-16">Status</th>
              <th className="py-1.5 w-32">MVP</th>
              <th className="py-1.5 w-32">Industrialization</th>
              <th className="py-1.5 w-16 text-center">📅</th>
              <th className="py-1.5 w-12 text-center">📝</th>
              <th className="py-1.5 w-16">👤</th>
              <th className="py-1.5">Notes</th>
            </tr>
          </thead>
          <tbody>
            {config.apps.map((app) => {
              const gh = app.repo ? githubData[app.repo] : undefined;
              return (
                <tr key={app.name} className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="py-1.5 font-mono font-bold text-white text-[10px]">{app.name}</td>
                  <td className="py-1.5">
                    <span className={`text-[9px] px-1 py-0.5 rounded ${statusColors[app.status]} text-white font-bold`}>
                      {statusLabels[app.status]}
                    </span>
                  </td>
                  <td className="py-1.5">
                    <div className="flex items-center gap-1">
                      <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500" style={{ width: `${app.mvp}%` }} />
                      </div>
                      <span className="text-gray-400 w-6 text-right text-[10px]">{app.mvp}%</span>
                    </div>
                  </td>
                  <td className="py-1.5">
                    <div className="flex items-center gap-1">
                      <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500" style={{ width: `${app.industrialization}%` }} />
                      </div>
                      <span className="text-gray-400 w-6 text-right text-[10px]">{app.industrialization}%</span>
                    </div>
                  </td>
                  <td className="py-1.5 text-center text-gray-400 font-mono text-[10px]">
                    {gh?.loading ? <span className="animate-pulse">...</span> : (gh?.lastCommit || '-')}
                  </td>
                  <td className="py-1.5 text-center text-gray-400 font-mono text-[10px]">
                    {gh?.loading ? <span className="animate-pulse">...</span> : (gh?.commitCount || '-')}
                  </td>
                  <td className="py-1.5 text-gray-400 font-mono text-[10px] truncate max-w-16">
                    {gh?.loading ? <span className="animate-pulse">...</span> : (gh?.lastAuthor || '-')}
                  </td>
                  <td className="py-1.5 text-gray-500 truncate max-w-xs text-[10px]">{app.notes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Legend */}
        <div className="mt-3 flex items-center justify-between text-[9px] text-gray-600">
          <div className="flex gap-4">
            <span><span className="text-purple-400">■</span> MVP = Minimum Viable Product</span>
            <span><span className="text-cyan-400">■</span> IND = Industrialization (scale, tests, docs)</span>
          </div>
          <div className="flex gap-2">
            <span>📅 Last commit</span>
            <span>📝 Total commits</span>
            <span>👤 Last author</span>
          </div>
        </div>

        {/* GitHub Notice */}
        <div className="mt-3 p-2 bg-yellow-900/20 border border-yellow-700/30 rounded text-[10px] text-yellow-500">
          ⚠️ <strong>GitHub integration pending</strong> — Private repos require token configuration.
          <a 
            href="https://github.com/3FESTO/3ASY-LANDING/issues/1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-1 text-yellow-400 hover:text-yellow-300 underline"
          >
            Track progress → Issue #1
          </a>
        </div>

        {/* Footer */}
        <div className="mt-2 text-center text-[9px] text-gray-600">
          Config: src/config/apps-status.yaml
        </div>
      </div>
    </div>
  );
}
