<div align="center">

# ◆ ▲ 3ASY

[![Live site](https://img.shields.io/badge/Live-www.3asy.it-28a745?style=for-the-badge)](https://www.3asy.it/)
[![3FE DEV](https://img.shields.io/badge/by-3FE_DEV-111510?style=for-the-badge)](https://www.3asy.it/)
[![3FESTO](https://img.shields.io/badge/a_3FESTO_team-009246?style=for-the-badge)](https://www.3festo.com/)

**Two software products and two public projects, built around real work.**

</div>

---

This repository contains the public landing page for [3ASY](https://www.3asy.it/), the software line by **3FE DEV**, the development team at **3FESTO SRL** in Bologna, Italy.

3ASY is intentionally compact. The current offer is not a four-product suite: **3HR** and **3BNB** are products; **3ASYRESEARCH** and **3ASYGIT** are smaller public projects.

## Products

| Product | Current scope | Maturity |
| --- | --- | --- |
| [3HR](https://www.3hr.it/) | Attendance, calendar-based timesheets, leave approvals, device inventory, cost and margin by resource | In operational use across 3 companies and 30+ people |
| [3BNB](https://bnb.3asy.app/) | Guided month-end reporting for short-term-rental property managers | Selected beta; public launch planned for January 1, 2027 |

## Public projects

| Project | What it explores | Maturity |
| --- | --- | --- |
| [3ASYRESEARCH](https://research.3asy.app/) | Research papers turned into accessible explanations and interactive tools | Early experiment with two live cases |
| [3ASYGIT](https://git.3asy.app/) | Public GitHub contribution data turned into 3D landscapes | Public experiment |

## Product principle

We start from a concrete workflow, ship the smallest useful version, and use AI only where it improves that workflow. Deterministic rules remain explicit where control and traceability matter.

Our industrial work lives in the sister line [ANY3DP](https://www.any3dp.com/).

## Technical approach

- React 19 and TypeScript
- Vite 7 and Tailwind CSS 4
- Three.js for the 3D language control
- Build-time prerender for complete static HTML
- Italian and English pages with localized metadata
- Canonical and reciprocal `hreflang` links
- Schema.org entity graph for 3FESTO, 3FE DEV, 3ASY, products and projects
- `robots.txt`, XML sitemap and `llms.txt`

The build generates two complete documents:

- Italian: `dist/index.html`
- English: `dist/en/index.html`

Both pages contain the full landing-page DOM before JavaScript runs. React hydrates the prerendered markup to enable the Three.js control and language navigation. The legacy `3asy.app` landing domains permanently redirect to the corresponding path on `www.3asy.it`.

## Public files

- [Production website](https://www.3asy.it/)
- [English website](https://www.3asy.it/en/)
- [Sitemap](https://www.3asy.it/sitemap.xml)
- [Machine-readable overview](https://www.3asy.it/llms.txt)
- [3FESTO](https://www.3festo.com/)
- [ANY3DP](https://www.any3dp.com/)

## License

Copyright © 2026 3FESTO SRL. All rights reserved. This is a source-available public repository, not an open-source license grant.
