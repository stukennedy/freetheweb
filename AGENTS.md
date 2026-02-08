# Free The Web — AGENTS.md

## Project Overview
A campaign/manifesto website to free the web from SPA shackles and return to hypermedia.
This is a MOVEMENT site — think protest poster meets developer documentation.

## Tech Stack
- **Cloudflare Workers** — edge-deployed
- **Hono** — lightweight JSX server rendering (NO client React)
- **HTMX** — interactivity without a framework (the site practices what it preaches)
- **Tailwind CSS** — via CDN or Play CDN
- **TypeScript**
- **Bun** for package management (NOT npm)

## Design Direction
Follow the frontend-design skill at `.claude/skills/frontend-design.md` for design quality.

**Visual style: "Kyotee meets protest movement"**
- Dark background (#0a0a0f deep black)
- Terminal/hacker aesthetic with ASCII art
- Monospace font for headers (JetBrains Mono from Google Fonts)
- Clean body font (Manrope or similar)
- Accent color: electric terminal green (#00ff41) or hot orange — something that screams "movement"
- Generous whitespace, each section feels like a statement/slide
- Subtle terminal elements (blinking cursor, $ prompts)
- Mobile-first, responsive

**CRITICAL: This must NOT look like generic AI output.** Bold, opinionated, distinctive. The design should feel handcrafted and intentional. Reference the frontend-design skill for guidance.

## Site Structure

### 1. Hero Section
Big stylized "FREE THE WEB" header (ASCII art or CSS-styled)
Subtitle: "The web was built on hypermedia. We broke it with SPAs. It's time to fix it."

### 2. The Problem
What SPAs broke — keep it punchy, not academic:
- **Broken URLs** — Routes that don't work without JS
- **Bloated bundles** — 2MB of JavaScript for a list
- **Fragile state** — Client-side state management is an entire career
- **Inaccessible** — Screen readers choke on virtual DOMs
- **AI-hostile** — LLMs can't interact with client-rendered apps
- **Developer suffering** — Build tools, bundlers, hydration, RSC, islands...

### 3. The Manifesto — 5 Principles
Format: "We value X over Y" (like Agile Manifesto)

1. **HTML over JSON** — Return documents, not data blobs
2. **Server authority over client state** — Stop duplicating state in Redux
3. **Progressive enhancement over JavaScript dependency** — The web works without JS
4. **Real URLs over client-side routes** — Every view should have a shareable URL
5. **The browser as hypermedia client over application runtime** — Let the browser do its job

### 4. The AI Angle
"AI agents can read HTML. They can follow links. They can submit forms. They cannot execute your React components."
- LLMs interact via HTTP + HTML — exactly what hypermedia is
- SPAs require JS runtime to render — LLMs don't have one
- Hypermedia is NATIVELY AI-compatible
- The more hypermedia, the more AI-accessible the web becomes

### 5. Sign the Manifesto
HTMX-powered form (hx-post, swap response):
- Name, Title/Role (optional)
- Checkbox: "I pledge to build my next project with hypermedia"
- On submit: show thank you + count
- Store in Cloudflare KV

### 6. The Proof / Footer
"This site: Hono + HTMX. Zero frameworks. Zero hydration. The HTML IS the application."
View Source link. Credits.

## HTMX Demonstrations
The site USES HTMX to make its own point:
- Signature form: hx-post with swap
- Live counter: hx-trigger="every 30s" for signature count
- hx-boost on navigation for instant transitions
- NO custom JavaScript for interactivity

## File Structure
```
freetheweb/
├── src/
│   ├── index.tsx          # Hono app with routes
│   └── components/        # JSX components (server-rendered)
│       ├── Layout.tsx      # HTML shell
│       ├── Hero.tsx
│       ├── Problem.tsx
│       ├── Manifesto.tsx
│       ├── AIAngle.tsx
│       ├── SignForm.tsx
│       └── Footer.tsx
├── public/                 # Static assets if needed
├── package.json
├── tsconfig.json
├── wrangler.toml
└── AGENTS.md
```

## Tone
Frustrated but hopeful. Technical but accessible. Passionate but not preachy.
This is written by someone who loves the web and is tired of watching it get buried under framework complexity.

## Author
Stu Kennedy — core HTMX contributor (built websocket support for v4), 25+ years building web systems.
