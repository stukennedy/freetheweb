export const SignForm = ({ count }: { count: number }) => {
  return (
    <section id="sign" class="px-6 py-24 md:py-32">
      <div class="sep mb-24 md:mb-32" />
      <div class="max-w-2xl mx-auto">
        <div class="sr text-center mb-16 md:mb-20">
          <span class="font-mono text-accent text-xs tracking-wider">$ vim signature.txt</span>
          <h2 class="font-serif italic text-4xl md:text-6xl mt-4 mb-3">Sign the Manifesto</h2>
          <p class="text-dim text-lg">Join the movement. Pledge to build hypermedia-first.</p>
        </div>

        <div
          class="sr text-center mb-16"
          hx-get="/api/count"
          hx-trigger="every 30s"
          hx-swap="innerHTML"
        >
          <div class="font-mono text-accent text-6xl md:text-8xl font-bold glow">{count}</div>
          <div class="font-mono text-muted text-[10px] tracking-[0.25em] uppercase mt-4">developers have signed</div>
        </div>

        <div id="sign-form-container" class="sr">
          <form
            hx-post="/api/sign"
            hx-target="#sign-form-container"
            hx-swap="innerHTML"
            class="space-y-8"
          >
            <div>
              <label for="name" class="block font-mono text-accent text-[11px] tracking-[0.2em] uppercase mb-3">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class="w-full px-0 py-3 bg-transparent border-0 border-b border-rule text-lg transition-colors placeholder:text-muted/40"
                placeholder="Your name"
              />
            </div>

            <div>
              <label for="title" class="block font-mono text-accent text-[11px] tracking-[0.2em] uppercase mb-3">
                Title / Role <span class="text-muted">(optional)</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                class="w-full px-0 py-3 bg-transparent border-0 border-b border-rule text-lg transition-colors placeholder:text-muted/40"
                placeholder="e.g., Senior Developer, CTO"
              />
            </div>

            <div class="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="pledge"
                name="pledge"
                required
                class="mt-1.5 w-4 h-4"
              />
              <label for="pledge" class="text-dim leading-relaxed">
                I pledge to{' '}
                <strong class="text-[#e8e6e3]">build my next project with hypermedia</strong>.
                I will serve HTML, respect URLs, and let the browser be a hypermedia client.
              </label>
            </div>

            <button
              type="submit"
              class="w-full py-4 bg-accent text-ink font-mono font-bold text-sm tracking-wider uppercase hover:bg-[#e8e6e3] transition-colors duration-200"
            >
              Sign the Manifesto
            </button>

            <p class="font-mono text-muted text-[10px] tracking-wider text-center uppercase">
              This form uses HTMX. Zero frameworks. Zero client routing.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export const SignFormSuccess = ({ name, newCount }: { name: string; newCount: number }) => {
  return (
    <div class="text-center py-8 space-y-6">
      <div class="font-mono text-accent text-6xl md:text-8xl font-bold glow">#{newCount}</div>
      <h3 class="font-serif italic text-3xl md:text-4xl">
        Welcome, {name}.
      </h3>
      <p class="text-dim text-lg max-w-md mx-auto">
        You've joined the movement. The web needs more builders like you.
      </p>
      <div class="pt-4">
        <a
          href="/"
          class="inline-block font-mono text-accent text-sm tracking-wider uline hover:text-[#e8e6e3] transition-colors"
        >
          Back to manifesto
        </a>
      </div>
    </div>
  );
};
