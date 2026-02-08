# Free The Web - Deployment Guide

## ✅ Project Complete

The "Free The Web" manifesto site is fully built and ready to deploy!

### What's Built

- ✅ Full Hono + HTMX application with TypeScript
- ✅ All components: Hero, Problem, Manifesto, AI Angle, Sign Form, Proof
- ✅ Server-side rendering (zero client-side JavaScript frameworks)
- ✅ HTMX-powered signature form with live counter
- ✅ Dark terminal aesthetic matching Kyotee.dev
- ✅ Responsive design with Tailwind CSS
- ✅ Type-checked and tested locally

### Project Structure

```
/home/stu/clawd/freetheweb/
├── src/
│   ├── index.tsx              # Main Hono app (routes + API)
│   └── components/
│       ├── Layout.tsx         # HTML shell with HTMX + Tailwind
│       ├── Hero.tsx           # ASCII art + tagline
│       ├── Problem.tsx        # What SPAs broke
│       ├── Manifesto.tsx      # The 5 principles
│       ├── AIAngle.tsx        # Why hypermedia is AI-native
│       ├── SignForm.tsx       # HTMX signature form
│       └── Proof.tsx          # Footer + proof section
├── package.json
├── tsconfig.json
├── wrangler.toml
├── README.md                  # Full documentation
└── DEPLOYMENT.md             # This file
```

## 🚀 Deployment Steps

### 1. Test Locally (Already Done!)

```bash
cd /home/stu/clawd/freetheweb
bun run dev
```

Visit: http://localhost:8787

### 2. Deploy to Cloudflare Workers

#### Option A: Quick Deploy (No Persistence)

```bash
bun run deploy
```

This deploys immediately but signatures won't persist (uses in-memory storage).

#### Option B: Full Deploy with KV (Recommended)

**Step 1: Authenticate Wrangler**
```bash
cd /home/stu/clawd/freetheweb
bunx wrangler login
```

**Step 2: Create KV Namespace**
```bash
bunx wrangler kv:namespace create "SIGNATURES"
```

Copy the namespace ID from the output.

**Step 3: Update wrangler.toml**
Uncomment and update the KV section:
```toml
[[kv_namespaces]]
binding = "SIGNATURES"
id = "paste-your-namespace-id-here"
```

**Step 4: Deploy**
```bash
bun run deploy
```

**Step 5: Add Custom Domain (Optional)**
1. Go to Cloudflare Dashboard
2. Navigate to your Worker
3. Click "Triggers" tab
4. Add custom domain (e.g., `freetheweb.dev`)

### 3. Post-Deployment

After deployment, Wrangler will output a URL like:
```
https://freetheweb.<your-subdomain>.workers.dev
```

Test the live site:
- ✅ Homepage loads
- ✅ Signature form works
- ✅ Counter updates live (if KV is configured)
- ✅ All sections scroll smoothly
- ✅ View Source works

## 🎨 Customization

### Change Colors

Edit `src/components/Layout.tsx`:
```typescript
colors: {
  terminal: '#00ff41',  // Change accent color
  dark: '#0a0a0f',      // Background
  'dark-lighter': '#1a1a24',
}
```

### Update Copy

Each section has its own component:
- **Hero tagline**: `src/components/Hero.tsx`
- **Problems list**: `src/components/Problem.tsx`
- **Manifesto principles**: `src/components/Manifesto.tsx`
- **AI pitch**: `src/components/AIAngle.tsx`
- **Footer links**: `src/components/Proof.tsx`

### Add Analytics

Add to `src/components/Layout.tsx` inside `<head>`:
```tsx
<script defer data-domain="freetheweb.dev" src="https://plausible.io/js/script.js"></script>
```

## 🔧 Development Commands

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Type checking
bun run typecheck

# Deploy to Cloudflare
bun run deploy
```

## 📝 Environment Notes

- **Runtime**: Cloudflare Workers (edge)
- **Framework**: Hono (web framework)
- **Rendering**: Server-side JSX (no hydration)
- **Interactivity**: HTMX (zero frameworks)
- **Styling**: Tailwind CSS via CDN
- **Storage**: Cloudflare KV (optional)

## 🌐 Going Live Checklist

- [ ] Deploy to Cloudflare Workers
- [ ] Configure KV namespace for signatures
- [ ] Add custom domain
- [ ] Test signature form
- [ ] Add analytics (optional)
- [ ] Update social meta tags with final URL
- [ ] Share on Twitter/LinkedIn/HN
- [ ] Add GitHub link if open-sourcing

## 💡 Next Steps

1. **Get a domain**: Register `freetheweb.dev` (or similar)
2. **Share it**: This is a MOVEMENT - spread the word
3. **Open source it**: Put it on GitHub as a template
4. **Write about it**: Blog post on why you built it
5. **Build with hypermedia**: Practice what you preach

## 📚 Resources

- [Hono Docs](https://hono.dev)
- [HTMX Docs](https://htmx.org)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Hypermedia Systems Book](https://hypermedia.systems)

---

**The HTML IS the application. Let's free the web.** 🌐
