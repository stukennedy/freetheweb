export const Proof = () => {
  return (
    <section id="proof" class="px-6 py-24 md:py-32 pb-16">
      <div class="sep mb-24 md:mb-32" />
      <div class="max-w-3xl mx-auto">
        <div class="sr text-center mb-12">
          <h2 class="font-serif italic text-3xl md:text-5xl mb-4">The Proof</h2>
          <p class="text-dim text-lg md:text-xl">
            This entire site is built with{' '}
            <span class="text-accent font-semibold">Hono + HTMX</span>.
          </p>
        </div>

        <div class="sr grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 border-y border-rule mb-12">
          <div class="text-center">
            <div class="font-mono text-accent text-4xl md:text-5xl font-bold glow">0</div>
            <div class="font-mono text-muted text-[10px] tracking-[0.15em] uppercase mt-3">JS Frameworks</div>
          </div>
          <div class="text-center">
            <div class="font-mono text-accent text-4xl md:text-5xl font-bold glow">0</div>
            <div class="font-mono text-muted text-[10px] tracking-[0.15em] uppercase mt-3">Client Routing</div>
          </div>
          <div class="text-center">
            <div class="font-mono text-accent text-4xl md:text-5xl font-bold glow">0</div>
            <div class="font-mono text-muted text-[10px] tracking-[0.15em] uppercase mt-3">Hydration</div>
          </div>
          <div class="text-center">
            <div class="font-mono text-accent text-4xl md:text-5xl font-bold glow">0</div>
            <div class="font-mono text-muted text-[10px] tracking-[0.15em] uppercase mt-3">Build Steps</div>
          </div>
        </div>

        <div class="sr text-center mb-16">
          <p class="font-serif italic text-2xl md:text-4xl">
            The HTML <span class="text-accent">IS</span> the application.
          </p>
        </div>

        <div class="sr flex flex-wrap justify-center gap-4 mb-20">
          <a
            href="/view-source"
            target="_blank"
            class="px-6 py-3 border border-rule font-mono text-sm text-dim hover:text-accent hover:border-accent/40 transition-colors duration-200"
          >
            View Source
          </a>
          <a
            href="https://github.com/stukennedy/freetheweb"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-3 border border-rule font-mono text-sm text-dim hover:text-accent hover:border-accent/40 transition-colors duration-200"
          >
            GitHub
          </a>
        </div>

        <div class="sep mb-14" />

        <div class="sr">
          <h3 class="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-8 text-center">Learn More</h3>
          <div class="grid md:grid-cols-2 gap-3">
            <a
              href="https://htmx.org"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-5 bg-surface border border-rule hover:border-accent/30 transition-colors duration-200"
            >
              <h4 class="font-mono text-sm text-accent group-hover:text-[#e8e6e3] transition-colors mb-1">HTMX</h4>
              <p class="text-muted text-sm">High power tools for HTML.</p>
            </a>
            <a
              href="https://hono.dev"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-5 bg-surface border border-rule hover:border-accent/30 transition-colors duration-200"
            >
              <h4 class="font-mono text-sm text-accent group-hover:text-[#e8e6e3] transition-colors mb-1">Hono</h4>
              <p class="text-muted text-sm">Fast, lightweight web framework for the edge.</p>
            </a>
            <a
              href="https://hypermedia.systems"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-5 bg-surface border border-rule hover:border-accent/30 transition-colors duration-200"
            >
              <h4 class="font-mono text-sm text-accent group-hover:text-[#e8e6e3] transition-colors mb-1">Hypermedia Systems</h4>
              <p class="text-muted text-sm">The book on hypermedia-driven applications.</p>
            </a>
            <a
              href="https://htmx.org/essays/"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-5 bg-surface border border-rule hover:border-accent/30 transition-colors duration-200"
            >
              <h4 class="font-mono text-sm text-accent group-hover:text-[#e8e6e3] transition-colors mb-1">HTMX Essays</h4>
              <p class="text-muted text-sm">Deep dives on hypermedia and REST.</p>
            </a>
          </div>
        </div>

        <div class="sep mt-20 mb-8" />

        <footer class="text-center space-y-4 pb-8">
          <p class="text-muted text-sm">
            Built by{' '}
            <a
              href="https://stukennedy.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-accent uline hover:text-[#e8e6e3] transition-colors"
            >
              Stu Kennedy
            </a>
          </p>
          <div class="flex justify-center gap-6">
            <a href="https://stukennedy.com" target="_blank" rel="noopener noreferrer"
              class="font-mono text-[11px] text-muted hover:text-accent transition-colors tracking-wider uppercase">Website</a>
            <a href="https://twitter.com/stukennedydev" target="_blank" rel="noopener noreferrer"
              class="font-mono text-[11px] text-muted hover:text-accent transition-colors tracking-wider uppercase">Twitter</a>
            <a href="https://github.com/stukennedy" target="_blank" rel="noopener noreferrer"
              class="font-mono text-[11px] text-muted hover:text-accent transition-colors tracking-wider uppercase">GitHub</a>
            <a href="https://linkedin.com/in/stu-kennedy" target="_blank" rel="noopener noreferrer"
              class="font-mono text-[11px] text-muted hover:text-accent transition-colors tracking-wider uppercase">LinkedIn</a>
          </div>
          <p class="font-mono text-muted text-[9px] tracking-[0.15em] pt-6">
            CLOUDFLARE WORKERS + HONO + HTMX + ZERO JS FRAMEWORKS
          </p>
        </footer>
      </div>
    </section>
  );
};
