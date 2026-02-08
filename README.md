# Free The Web 🌐

**A manifesto site to free the web from SPA shackles and return to hypermedia.**

The web was built on hypermedia. We broke it with SPAs. It's time to fix it.

## What is This?

This is a movement website that argues for returning to hypermedia-driven web development over the SPA-dominated landscape we live in today. It's built to **practice what it preaches**:

- ✅ Server-side rendering with Hono JSX
- ✅ HTMX for interactivity (zero JavaScript frameworks)
- ✅ Progressive enhancement
- ✅ Real URLs for every view
- ✅ HTML as the application state
- ✅ AI-accessible by default (LLMs can read and interact with it)

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
│   ├── index.tsx              # Main Hono app with routes
│   └── components/
│       ├── Layout.tsx         # HTML shell with Tailwind + HTMX
│       ├── Hero.tsx           # ASCII art header + tagline
│       ├── Problem.tsx        # What SPAs broke
│       ├── Manifesto.tsx      # The 5 principles
│       ├── AIAngle.tsx        # Why hypermedia is AI-native
│       ├── SignForm.tsx       # HTMX-powered signature form
│       └── Proof.tsx          # "This site has 0 JS frameworks"
├── package.json
├── tsconfig.json
├── wrangler.toml              # Cloudflare Workers config
└── README.md
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
```

Visit `http://localhost:8787` to see the site.

## Deployment

### Option 1: Deploy to Cloudflare Workers (Recommended)

1. **Create a Cloudflare account** at [cloudflare.com](https://cloudflare.com)

2. **Authenticate Wrangler:**
   ```bash
   bunx wrangler login
   ```

3. **Create a KV namespace for signatures:**
   ```bash
   bunx wrangler kv:namespace create "SIGNATURES"
   ```
   
   This will output a namespace ID. Update `wrangler.toml`:
   ```toml
   [[kv_namespaces]]
   binding = "SIGNATURES"
   id = "your-namespace-id-here"
   ```

4. **Deploy:**
   ```bash
   bun run deploy
   ```

5. **Set up a custom domain** (optional):
   - In the Cloudflare dashboard, go to your Worker
   - Add a custom domain (e.g., `freetheweb.dev`)

### Option 2: Self-Host

Since this is built on Web Standards (HTTP + HTML), you can run it anywhere that supports JavaScript:

- Node.js with an adapter
- Deno Deploy
- Bun with `Bun.serve()`
- Any edge runtime

## The Manifesto

### 5 Principles

1. **HTML over JSON** — The server should return documents, not data blobs
2. **Server authority over client state** — The server knows the state
3. **Progressive enhancement over JavaScript dependency** — The web works without JS
4. **Real URLs over client-side routes** — Every view should have a real URL
5. **Browser as hypermedia client over application runtime** — Let the browser do its job

### The AI Angle

AI agents can read HTML. They can follow links. They can submit forms.  
**They cannot execute your React components.**

Hypermedia is natively AI-compatible. SPAs are not.

## Design Aesthetic

- **Dark theme** with terminal/developer feel
- **JetBrains Mono** for monospace headers
- **Manrope** for body text
- **Terminal green** (`#00ff41`) accent color
- **Protest poster meets developer documentation** vibe
- Generous whitespace, bold statements, ASCII art

## HTMX Features Demonstrated

- Form submission with `hx-post` (signature form)
- Live polling with `hx-trigger="every 30s"` (signature counter)
- DOM swapping with `hx-target` and `hx-swap`
- Progressive enhancement (works without JS)

## Why This Matters

We've spent a decade building increasingly complex client-side applications, creating problems that didn't exist before:

- Broken URLs
- Bloated bundles
- Fragile state management
- Accessibility nightmares
- AI-hostile architectures
- Developer burnout

**Hypermedia is the answer.** It always was.

## Contributing

This is an open manifesto. If you have ideas, improvements, or want to sign it:

1. Fork the repo
2. Make your changes
3. Submit a PR

Or just [sign the manifesto](https://freetheweb.dev#sign) and spread the word.

## License

MIT - Do whatever you want with this. Copy it, fork it, use it as a template.

## Credits

Built by [Stu Kennedy](https://stukennedy.com) as a rallying cry for hypermedia-first development.

Inspired by:
- [HTMX](https://htmx.org) and the work of Carson Gross
- [Hypermedia Systems](https://hypermedia.systems) book
- Every developer who's fought with client-side state management and thought "there has to be a better way"

---

**The HTML IS the application.**  
Let's free the web. 🌐
