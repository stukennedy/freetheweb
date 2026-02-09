# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Free The Web" — a manifesto/campaign site advocating hypermedia-driven web development over SPAs. The site practices what it preaches: server-rendered HTML, HTMX for interactivity, zero client-side frameworks.

## Commands

```bash
bun install          # Install dependencies (use Bun, NOT npm)
bun run dev          # Start dev server at http://localhost:8787
bun run deploy       # Deploy to Cloudflare Workers
bun run typecheck    # TypeScript type checking (tsc --noEmit)
```

## Architecture

**Runtime**: Cloudflare Workers (edge). Entry point is `src/index.tsx`, which exports a Hono app.

**Rendering**: Hono JSX renders all HTML server-side. JSX uses `hono/jsx` (configured via `jsxImportSource` in tsconfig). There is NO client-side React, no hydration, no virtual DOM. Components are pure server-rendered functions.

**Interactivity**: HTMX handles all dynamic behavior (form submission via `hx-post`, live polling via `hx-trigger`, DOM swapping). No custom client JavaScript should be written.

**Styling**: Tailwind CSS via CDN (`cdn.tailwindcss.com`), configured inline in `Layout.tsx` with custom theme (colors: `terminal` #00ff41, `dark` #0a0a0f; fonts: JetBrains Mono + Manrope).

**Storage**: Cloudflare KV (optional, binding `SIGNATURES`). Falls back to in-memory storage in dev. KV namespace must be created and configured in `wrangler.toml` for production persistence.

**Routes** (all in `src/index.tsx`):
- `GET /` — Full page render
- `GET /api/count` — Returns HTML fragment for HTMX polling (signature count)
- `POST /api/sign` — Processes signature form, returns HTML fragment swap
- `GET /health` — JSON health check

## Key Conventions

- **Bun only** — never use npm/yarn
- **No client-side JS frameworks** — all interactivity through HTMX
- **HTML fragments for API responses** — HTMX endpoints return rendered JSX, not JSON
- **Hono `Bindings` type** defines the Worker environment (currently `SIGNATURES?: KVNamespace`)

## Design Direction

Dark terminal aesthetic ("protest poster meets developer documentation"). Follow `.claude/skills/frontend-design.md` for design quality guidelines. The design must feel bold, opinionated, and handcrafted — never generic AI output.
