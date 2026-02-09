import { Hono } from 'hono';
import { jsxRenderer } from 'hono/jsx-renderer';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Manifesto } from './components/Manifesto';
import { HowItWorks } from './components/HowItWorks';
import { AIAngle } from './components/AIAngle';
import { SignForm, SignFormSuccess } from './components/SignForm';
import { Proof } from './components/Proof';

type Bindings = {
  SIGNATURES?: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

// Layout renderer — automatically prepends <!DOCTYPE html>
app.use('*', jsxRenderer(({ children }) => <Layout>{children}</Layout>));

// In-memory store for development (replace with KV in production)
let signatureCount = 42; // Start with a seed number
const signatures: Array<{ name: string; title?: string; timestamp: number }> = [];

// Home page - the full manifesto
app.get('/', async (c) => {
  let count = signatureCount;
  if (c.env.SIGNATURES) {
    const stored = await c.env.SIGNATURES.get('count');
    count = stored ? parseInt(stored) : signatureCount;
  }

  return c.render(
    <>
      <Hero />
      <Problem />
      <Manifesto />
      <HowItWorks />
      <AIAngle />
      <SignForm count={count} />
      <Proof />
    </>
  );
});

// API: Get current signature count (for HTMX polling)
app.get('/api/count', async (c) => {
  let count = signatureCount;
  if (c.env.SIGNATURES) {
    const stored = await c.env.SIGNATURES.get('count');
    count = stored ? parseInt(stored) : signatureCount;
  }

  return c.html(
    <>
      <div class="font-mono text-accent text-6xl md:text-8xl font-bold glow">{count}</div>
      <div class="font-mono text-muted text-[10px] tracking-[0.25em] uppercase mt-4">developers have signed</div>
    </>
  );
});

// API: Sign the manifesto (HTMX POST target)
app.post('/api/sign', async (c) => {
  const formData = await c.req.parseBody();
  const name = formData.name as string;
  const title = (formData.title as string) || undefined;
  const pledge = formData.pledge as string;

  if (!name || !pledge) {
    return c.html(
      <div class="text-center py-8">
        <p class="text-danger text-lg mb-6">Please fill in all required fields.</p>
        <a
          href="/"
          class="inline-block font-mono text-accent text-sm tracking-wider uline hover:text-[#e8e6e3] transition-colors"
        >
          Try again
        </a>
      </div>
    );
  }

  const signature = { name, title, timestamp: Date.now() };
  signatures.push(signature);
  signatureCount++;

  if (c.env.SIGNATURES) {
    await c.env.SIGNATURES.put('count', signatureCount.toString());
    await c.env.SIGNATURES.put(`signature:${signatureCount}`, JSON.stringify(signature));
  }

  return c.html(<SignFormSuccess name={name} newCount={signatureCount} />);
});

// API: HTMX live demo endpoint
app.get('/api/demo', (c) => {
  const time = new Date().toLocaleTimeString('en-US', { hour12: false });
  return c.html(
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <span class="text-accent font-bold">&#10003;</span>
        <span class="text-[#e8e6e3] text-sm">Server responded with HTML</span>
      </div>
      <div class="text-muted text-[11px]">
        <span class="text-dim">Content-Type:</span> text/html &middot; <span class="text-dim">Time:</span> {time}
      </div>
      <p class="text-dim text-xs pt-1">
        This HTML fragment was rendered on the server and swapped into the DOM by HTMX.
        No JSON. No parsing. No framework. <span class="text-accent">You are looking at the response.</span>
      </p>
    </div>
  );
});

// View source — full page HTML in a new tab
app.get('/view-source', async (c) => {
  let count = signatureCount;
  if (c.env.SIGNATURES) {
    const stored = await c.env.SIGNATURES.get('count');
    count = stored ? parseInt(stored) : signatureCount;
  }

  // Render the actual page HTML
  const pageJsx = (
    <Layout>
      <Hero />
      <Problem />
      <Manifesto />
      <HowItWorks />
      <AIAngle />
      <SignForm count={count} />
      <Proof />
    </Layout>
  );

  // Convert JSX to string — Hono JSX toString() returns HTML
  const html = pageJsx.toString();

  // Return as a styled source view
  return c.html(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>View Source — Free The Web</title>
      <style>
        body { background: #08080c; color: #888898; font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.6; padding: 2rem; margin: 0; white-space: pre-wrap; word-wrap: break-word; }
        .tag { color: #e8e6e3; }
        .attr { color: #e0ff00; }
        .str { color: #888898; }
      </style>
    </head>
    <body>${html.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</body>
    </html>`
  );
});

// Health check
app.get('/health', (c) => {
  return c.json({ status: 'ok', signatures: signatureCount });
});

export default app;
