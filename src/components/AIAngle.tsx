export const AIAngle = () => {
  return (
    <section id="ai" class="px-6 py-24 md:py-32">
      <div class="sep mb-24 md:mb-32" />
      <div class="max-w-3xl mx-auto">
        <div class="sr">
          <span class="font-mono text-accent text-xs tracking-wider">$ ./the-secret-weapon.sh</span>
          <h2 class="font-serif italic text-4xl md:text-6xl mt-4 mb-3">The AI Angle</h2>
          <p class="text-accent text-xl md:text-2xl font-medium mb-16 md:mb-20">
            This is the future, and SPAs are obsolete.
          </p>
        </div>

        {/* Terminal window */}
        <div class="sr bg-surface rounded-lg border border-rule overflow-hidden mb-16">
          <div class="flex items-center gap-2 px-4 py-3 border-b border-rule bg-elevated/40">
            <span class="w-2.5 h-2.5 rounded-full bg-danger/40" />
            <span class="w-2.5 h-2.5 rounded-full bg-accent/20" />
            <span class="w-2.5 h-2.5 rounded-full bg-accent/40" />
            <span class="ml-3 font-mono text-[11px] text-muted">the-truth.sh</span>
          </div>
          <div class="p-6 md:p-8 font-mono text-sm md:text-base leading-loose">
            <p class="text-muted">$ curl https://your-spa.com</p>
            <div class="mt-4 space-y-1">
              <p>{'>'} AI agents can read HTML.</p>
              <p>{'>'} They can follow links.</p>
              <p>{'>'} They can submit forms.</p>
              <p class="text-danger font-bold mt-3">{'>'} They cannot execute your React components.</p>
            </div>
          </div>
        </div>

        <div class="sr space-y-6 text-dim text-lg leading-relaxed mb-12">
          <p>
            LLMs interact with the web through{' '}
            <strong class="text-accent font-semibold">HTTP + HTML</strong>{' '}
            — exactly what hypermedia is. They make GET requests, parse HTML, follow links, and submit forms.
          </p>
          <p>
            SPAs require a{' '}
            <strong class="text-danger font-semibold">JavaScript runtime</strong>{' '}
            to render content. LLMs don't have one. They can't execute your React components. Your SPA might as well not exist to them.
          </p>
        </div>

        <div class="sr bg-surface border border-rule rounded-lg p-6 md:p-8 mb-12">
          <h3 class="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-6">Why This Matters</h3>
          <div class="space-y-4">
            <div class="flex gap-3 items-start">
              <span class="text-accent text-sm font-mono mt-0.5 shrink-0">+</span>
              <p class="text-dim">Hypermedia is <strong class="text-[#e8e6e3]">natively AI-compatible</strong> — content and controls are in the markup</p>
            </div>
            <div class="flex gap-3 items-start">
              <span class="text-accent text-sm font-mono mt-0.5 shrink-0">+</span>
              <p class="text-dim">The more we build with hypermedia, the more the web becomes an <strong class="text-[#e8e6e3]">AI-accessible platform</strong></p>
            </div>
            <div class="flex gap-3 items-start">
              <span class="text-accent text-sm font-mono mt-0.5 shrink-0">+</span>
              <p class="text-dim">AI agents can <strong class="text-[#e8e6e3]">use your app</strong> — book, fill, retrieve — without custom APIs</p>
            </div>
            <div class="flex gap-3 items-start">
              <span class="text-accent text-sm font-mono mt-0.5 shrink-0">+</span>
              <p class="text-dim">This isn't theoretical — it's happening <strong class="text-[#e8e6e3]">right now</strong></p>
            </div>
          </div>
        </div>

        <div class="sr">
          <p class="text-dim text-lg leading-relaxed mb-10">
            Every SPA you build is a wall between your users and the AI tools they rely on. Every hypermedia app you build is a bridge.
          </p>

          <div class="pl-6 border-l border-accent/30">
            <p class="font-serif italic text-2xl md:text-3xl leading-snug">
              The future of the web is agentic.
              <br />
              <span class="text-accent">Hypermedia is ready.</span>
              <br />
              <span class="text-muted">SPAs are not.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
