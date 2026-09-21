# TLDR static site

The public TLDR website, built with [VitePress](https://vitepress.dev/).

Live site: [tldrspace.com](https://tldrspace.com)

## Getting started

Install dependencies from the repository root:

```bash
npm install
```

Start the local development server:

```bash
npm run docs:dev
```

The site is served locally with VitePress and reloads as Markdown or configuration files change.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run docs:dev` | Start the local development server |
| `npm run docs:build` | Build the production site |
| `npm run docs:preview` | Preview the production build |

## Project structure

- `docs/` — Markdown content and public static assets.
- `docs/.vitepress/config.js` — Site metadata, navigation, footer, and sidebars.
- `docs/replybridge/` — ReplyBridge guides, series, and marketing content.
- `docs/public/` — Static files such as `ads.txt` and `app-ads.txt`.
- `.github/workflows/main.yml` — GitHub Pages deployment workflow.

The production output is generated in `docs/.vitepress/dist/`. Do not edit that directory directly.

## Content guidelines

Use lowercase kebab-case for new page paths and clean VitePress links without `.html`. Update navigation or the relevant sidebar in `docs/.vitepress/config.js` when adding important pages.

For ReplyBridge marketing, policy, FAQ, or advertising copy, verify product details against the sibling `/Users/hojin/Work/tldr/reply-bridge` repository before publishing.

## Contact

For support, general questions, or partnerships, email [main@tldrspace.com](mailto:main@tldrspace.com).
