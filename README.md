<div align="center">

# ◆ △ ▣ 3ASY

[![Live Site](https://img.shields.io/badge/🌐_Live-www.3asy.it-28a745?style=for-the-badge)](https://www.3asy.it)
[![By 3FE](https://img.shields.io/badge/by-3FE_·_3Festo-009246?style=for-the-badge)](https://www.3festo.com)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](https://www.3festo.com)

**Serious, AI-powered software tools — from the makers of [ANY3DP](https://www.any3dp.com).**

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

---

> **About this repository** — Source code of the public **3ASY** landing page ([www.3asy.it](https://www.3asy.it)).
> Our top product for industry is **[ANY3DP](https://www.any3dp.com)** — industrial-grade additive manufacturing.
> **3ASY** is our second line: a small set of focused, AI-powered tools by **3FE — 3Festo S.r.l.** (Bologna, Italy).

---

## 🎯 The 3ASY line

Not a pile of demos. Five distinct products, each with its own color, purpose and horizon.

| Product | What it does | Stage |
|---------|--------------|-------|
| **[3ASYHR](https://hr.3asy.app)** | Attendance, calendar-based timesheets, leave approvals, device inventory and real margin by resource | 🔵 Industrially tested for one year with JUNO.AM |
| **[3ASYBNB](https://bnb.3asy.app)** | Monthly owner reports for short-term rental property managers, from source documents to ready-to-send PDFs | 🟡 Selected beta · public launch January 1, 2027 |
| **[3ASYCAD](https://www.3asycad.com)** | Browser-based 3D printability framework: inspect, repair, lattice (TPMS), nesting | 🟣 Long-term, high-difficulty project; parts already used by JUNO.AM |
| **[3ASYRESEARCH](https://research.3asy.app)** | Complex research papers → interactive experiences and usable tools | 🟢 Small research experiment |
| **[3ASYGIT](https://git.3asy.app)** | Turns your GitHub contributions into 3D art and audio | 🟢 Small public experiment |

### Why BNB?

Most 3ASY products grow from our work in industry and 3D. **3ASYBNB** came from a different direction: property managers needed a reliable way to turn monthly statements, payouts and cleaning invoices into clear owner reports. It was a real request, so we built the utility.

3ASY Ai reads and normalizes the inputs; deterministic rules handle commissions, taxes and allocations; the final PDFs remain traceable and repeatable. The product is currently in beta with a small group of selected users, ahead of the public launch on **January 1, 2027**.

### 🧪 In the lab

Other prototypes we have built, not public yet: **3ASYBUILDER**, **3ASYMODELING**, **3ASYTRADING**, **3ASYWHISTLE**.

## 💡 How we work

```
⚡ Ship Fast → 🎯 Solve Real → 🤖 AI-First
```

Every 3ASY product was born from a real need of ours — starting with HR, because we had timesheets to run.
We are bootstrapped and profitable on our core business (3D), and we build these tools because we use them.

## 🏗️ Tech stack

- **⚛️ React 19 + TypeScript** — type-safe and fast
- **⚡ Vite 7** — instant builds
- **🎨 Tailwind CSS 4** — utility-first styling
- **↗ Lucide** — consistent interface icons
- **🔎 Build-time prerender** — static landing content for crawlers, then React hydration
- **📱 Mobile-first** — responsive everywhere

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # production build
```

The production build renders both localized pages before deployment: Italian at `https://www.3asy.it/` (`dist/index.html`) and English at `https://www.3asy.it/en/` (`dist/en/index.html`). Each page has its own language, canonical URL, localized metadata and structured data, with reciprocal `hreflang` links. Search engines, link unfurlers and clients without JavaScript receive the complete product content immediately; React hydrates the same markup to enable interactions and language navigation. The former `3asy.app` landing domains permanently redirect to the matching path on `3asy.it`.

## 🇮🇹 Made in Italy

**3Festo S.r.l.** — Bologna, Italy. Small team, focused output.

## 🔗 Connect

- **🌐 Landing**: [3asy.it](https://www.3asy.it)
- **💻 Public source**: [github.com/3FESTO/3ASY-LANDING](https://github.com/3FESTO/3ASY-LANDING)
- **🏢 Company**: [3festo.com](https://www.3festo.com)
- **🎯 Industrial 3D**: [any3dp.com](https://www.any3dp.com)
- **📧 Contact**: [info@3festo.com](mailto:info@3festo.com)

## 📄 License

**© 2026 3Festo S.r.l.** — Proprietary. Proudly Made in Italy 🇮🇹