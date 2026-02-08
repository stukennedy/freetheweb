import { Hono } from 'hono';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Manifesto } from './components/Manifesto';
import { AIAngle } from './components/AIAngle';
import { SignForm, SignFormSuccess } from './components/SignForm';
import { Proof } from './components/Proof';

type Bindings = {
  SIGNATURES?: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

// In-memory store for development (replace with KV in production)
let signatureCount = 42; // Start with a seed number
const signatures: Array<{ name: string; title?: string; timestamp: number }> = [];

// Home page - the full manifesto
app.get('/', async (c) => {
  // Get count from KV if available, otherwise use in-memory
  let count = signatureCount;
  if (c.env.SIGNATURES) {
    const stored = await c.env.SIGNATURES.get('count');
    count = stored ? parseInt(stored) : signatureCount;
  }
  
  return c.html(
    <Layout>
      <Hero />
      <Problem />
      <Manifesto />
      <AIAngle />
      <SignForm count={count} />
      <Proof />
    </Layout>
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
      <div class="text-5xl md:text-7xl font-bold text-terminal font-mono">
        {count}
      </div>
      <div class="text-xl text-gray-400 mt-2">
        developers have signed
      </div>
    </>
  );
});

// API: Sign the manifesto (HTMX POST target)
app.post('/api/sign', async (c) => {
  const formData = await c.req.parseBody();
  const name = formData.name as string;
  const title = (formData.title as string) || undefined;
  const pledge = formData.pledge as string;
  
  // Validation
  if (!name || !pledge) {
    return c.html(
      <div class="text-center py-12">
        <p class="text-red-500 text-xl mb-4">❌ Please fill in all required fields</p>
        <a
          href="/"
          class="inline-block px-6 py-3 bg-terminal text-dark font-mono rounded-lg hover:bg-white transition-colors"
        >
          ← Try again
        </a>
      </div>
    );
  }
  
  // Store signature
  const signature = {
    name,
    title,
    timestamp: Date.now(),
  };
  
  signatures.push(signature);
  signatureCount++;
  
  // Update KV if available
  if (c.env.SIGNATURES) {
    await c.env.SIGNATURES.put('count', signatureCount.toString());
    await c.env.SIGNATURES.put(
      `signature:${signatureCount}`,
      JSON.stringify(signature)
    );
  }
  
  // Return success message (replaces the form via HTMX)
  return c.html(<SignFormSuccess name={name} newCount={signatureCount} />);
});

// Health check
app.get('/health', (c) => {
  return c.json({ status: 'ok', signatures: signatureCount });
});

export default app;
