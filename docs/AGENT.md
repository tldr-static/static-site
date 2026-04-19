# Agent & contributor guide

Facts only—for Cursor and other coding agents. Product and API truth live in the sibling **reply-bridge** repository first.

## Related repositories

| Path | Role |
| --- | --- |
| `/Users/hojin/Work/tldr/reply-bridge` | ReplyBridge app, server, marketing source. Use `marketing/` and `docs/` for copy, features, and screenshots. |
| This repo (`static-site`) | **VitePress** public site (landing, blog, legal, per-app pages). |

If static-site and reply-bridge disagree, **reply-bridge is closer to product truth**—fix static-site.

## Stack & boundaries

- **Build:** [VitePress](https://vitepress.dev/) 1.x, **Vue 3** (theme/extensions).
- **Source:** `docs/` — Markdown pages; `docs/.vitepress/config.js` — site meta, nav, footer.
- **Static assets:** `docs/public/` (`ads.txt`, `app-ads.txt`, etc.).
- **Deploy:** `.github/workflows/main.yml`.

## Common commands

Run from the **repository root**:

| Goal | Command |
| --- | --- |
| Local preview | `npm run docs:dev` |
| Production build | `npm run docs:build` |
| Preview build output | `npm run docs:preview` |

## Directory map

| Path | Role |
| --- | --- |
| `docs/index.md`, etc. | Home, About, Services, legal hub |
| `docs/blog/` | Blog |
| `docs/replybridge/` | ReplyBridge — `getting-started` (IG / DM funnel), overview, connect, usage, `marketing/` |
| `docs/*/` (e.g. `clubhouse/`, `slotspace/`) | Per-app subsites |
| `docs/*-privacy-policy/`, `docs/*-term-conditions/` | Per-app legal |
| `docs/.vitepress/config.js` | `title`, `description`, `nav`, `footer`, `head`, `sidebar` (ReplyBridge) |

Add sidebar links under `themeConfig.sidebar['/replybridge/']` when you add many child pages.

When adding a new product section, follow existing app folder patterns and update `themeConfig.nav` if needed.

## Documents to read with reply-bridge

- `reply-bridge/marketing/` — series copy, structure (`CARD_NEWS_STRUCTURE.md`, etc.).
- `reply-bridge/docs/PRODUCT.md`, `STACK.md`, `ARCHITECTURE.md` — product and technical alignment.
- App Store / Meta wording: prefer matching MDs under `reply-bridge/docs/`.

## Style

- No drive-by refactors or unrelated files.
- Match existing Markdown tone, heading levels, and internal links.
- For legal/policy text, align with reply-bridge marketing/policy docs when possible.

## Cursor rules (outside VitePress `docs/`)

Repository root:

- `.cursor/rules/workflow.mdc` — commits, issues, reply-bridge alignment.
- `.cursor/rules/vitepress-docs.mdc` — rules when editing VitePress `docs/`.
