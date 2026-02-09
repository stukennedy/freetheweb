# Free The Web

**A manifesto site to free the web from SPA shackles and return to hypermedia.**

The web was built on hypermedia. We broke it with SPAs. It's time to fix it.

## What is This?

This is a movement website that argues for returning to hypermedia-driven web development over the SPA-dominated landscape we live in today. It's built to **practice what it preaches**:

- Server-side rendering with Hono JSX
- HTMX for interactivity (zero JavaScript frameworks)
- Progressive enhancement
- Real URLs for every view
- HTML as the application state
- AI-accessible by default (LLMs can read and interact with it)

## Tech Stack

- **[Cloudflare Workers](https://workers.cloudflare.com/)** - Edge runtime
- **[Hono](https://hono.dev)** - Fast, lightweight web framework with JSX support
- **[HTMX](https://htmx.org)** - High power tools for HTML
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS (via CDN)
- **TypeScript** - Type safety

## Project Structure

```
freetheweb/
├── src/
│   ├── index.tsx              # Main Hono app with routes + API endpoints
│   └── components/
│       ├── Layout.tsx         # HTML shell, fonts, Tailwind config, animations, grain overlay
│       ├── Hero.tsx           # Massive Instrument Serif hero typography
│       ├── Problem.tsx        # What SPAs broke — numbered editorial list
│       ├── Manifesto.tsx      # The 5 principles with ghost numbers
│       ├── AIAngle.tsx        # Terminal window + why hypermedia is AI-native
│       ├── SignForm.tsx       # HTMX-powered signature form + success state
│       └── Proof.tsx          # Stats row, resources, footer
├── public/                    # Static assets (favicon)
├── package.json
├── tsconfig.json
├── wrangler.toml              # Cloudflare Workers config
└── CLAUDE.md
```

## Local Development

### Prerequisites

- [Bun](https://bun.sh) installed
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (comes with the project)

### Setup

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Type checking
bun run typecheck
```

Visit `http://localhost:8787` to see the site.

## Deployment

### Deploy to Cloudflare Workers

1. **Authenticate Wrangler:**
   ```bash
   bunx wrangler login
   ```

2. **Create a KV namespace for signatures:**
   ```bash
   bunx wrangler kv:namespace create "SIGNATURES"
   ```

   Update `wrangler.toml` with the namespace ID:
   ```toml
   [[kv_namespaces]]
   binding = "SIGNATURES"
   id = "your-namespace-id-here"
   ```

3. **Deploy:**
   ```bash
   bun run deploy
   ```

4. **Custom domain** (optional): In the Cloudflare dashboard, add a custom domain to your Worker (e.g., `freetheweb.dev`).

Without KV configured, signatures use in-memory storage (lost on redeploy).

## Design Aesthetic

**"Luxury editorial manifesto"** — Monocle magazine meets underground zine.

- **Instrument Serif** (italic) for display headings — editorial tension against monospace
- **Outfit** for body text — clean geometric sans
- **JetBrains Mono** for code, labels, and terminal elements
- **Acid chartreuse** (`#e0ff00`) accent on deep ink black (`#08080c`)
- **Red** (`#ff3333`) for danger moments (SPA criticism)
- Film grain overlay via SVG feTurbulence
- Scroll-triggered reveal animations (CSS + IntersectionObserver)
- Ghost numbers behind manifesto principles
- Terminal window component with title bar chrome
- Gradient accent separator lines between sections
- Custom scrollbar, selection highlight, animated link underlines

## The Manifesto

### 5 Principles

1. **HTML over JSON** — The server should return documents, not data blobs
2. **Server Authority over Client State** — The server knows the state
3. **Progressive Enhancement over JS Dependency** — The web works without JS
4. **Real URLs over Client Routes** — Every view should have a real URL
5. **Hypermedia Client over App Runtime** — Let the browser do its job

### The AI Angle

AI agents can read HTML. They can follow links. They can submit forms.
**They cannot execute your React components.**

Hypermedia is natively AI-compatible. SPAs are not.

## HTMX Features Demonstrated

- Form submission with `hx-post` (signature form)
- Live polling with `hx-trigger="every 30s"` (signature counter)
- DOM swapping with `hx-target` and `hx-swap`
- Progressive enhancement (works without JS)

## Contributing

This is an open manifesto. Fork it, improve it, submit a PR.

Or just [sign the manifesto](https://freetheweb.dev#sign) and spread the word.

## License

MIT

## Credits

Built by [Stu Kennedy](https://stukennedy.com) as a rallying cry for hypermedia-first development.

Inspired by:
- [HTMX](https://htmx.org) and the work of Carson Gross
- [Hypermedia Systems](https://hypermedia.systems) book
- Every developer who's fought with client-side state management and thought "there has to be a better way"

---

**The HTML IS the application.**
