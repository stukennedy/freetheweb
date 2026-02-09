export const Manifesto = () => {
  return (
    <section id="manifesto" class="px-6 py-24 md:py-32">
      <div class="sep mb-24 md:mb-32" />
      <div class="max-w-3xl mx-auto">
        <div class="sr">
          <span class="font-mono text-accent text-xs tracking-wider">$ cat manifesto.md</span>
          <h2 class="font-serif italic text-4xl md:text-6xl mt-4 mb-3">The Manifesto</h2>
          <p class="text-dim italic mb-20 md:mb-24">
            Like the Agile Manifesto — we value the items on the left more than the items on the right.
          </p>
        </div>

        {/* Principle 01 */}
        <div class="sr relative py-12 md:py-16">
          <span class="ghost">01</span>
          <div class="relative z-10">
            <div class="flex items-baseline gap-3 md:gap-5 flex-wrap mb-5">
              <span class="font-serif italic text-accent text-3xl md:text-5xl">HTML</span>
              <span class="font-mono text-muted text-[10px] tracking-[0.25em] uppercase">over</span>
              <span class="font-mono text-dim text-2xl md:text-4xl line-through decoration-muted">JSON</span>
            </div>
            <p class="text-dim leading-relaxed max-w-xl">
              The server should return documents, not data blobs for the client to assemble. HTML is the universal format — every browser, every screen reader, every LLM understands it.
            </p>
          </div>
        </div>
        <div class="sep" />

        {/* Principle 02 */}
        <div class="sr relative py-12 md:py-16">
          <span class="ghost">02</span>
          <div class="relative z-10">
            <div class="flex items-baseline gap-3 md:gap-5 flex-wrap mb-5">
              <span class="font-serif italic text-accent text-3xl md:text-5xl">Server Authority</span>
              <span class="font-mono text-muted text-[10px] tracking-[0.25em] uppercase">over</span>
              <span class="font-mono text-dim text-2xl md:text-4xl line-through decoration-muted">Client State</span>
            </div>
            <p class="text-dim leading-relaxed max-w-xl">
              The server knows the state. The server <em>is</em> the state. Stop duplicating it in Redux, syncing it, debugging drift, and pretending client-side state is simpler.
            </p>
          </div>
        </div>
        <div class="sep" />

        {/* Principle 03 */}
        <div class="sr relative py-12 md:py-16">
          <span class="ghost">03</span>
          <div class="relative z-10">
            <div class="flex items-baseline gap-3 md:gap-5 flex-wrap mb-5">
              <span class="font-serif italic text-accent text-3xl md:text-5xl">Progressive Enhancement</span>
              <span class="font-mono text-muted text-[10px] tracking-[0.25em] uppercase">over</span>
              <span class="font-mono text-dim text-2xl md:text-4xl line-through decoration-muted">JS Dependency</span>
            </div>
            <p class="text-dim leading-relaxed max-w-xl">
              The web works without JavaScript. Forms submit. Links navigate. Your app should respect that. JavaScript is for enhancement, not existence.
            </p>
          </div>
        </div>
        <div class="sep" />

        {/* Principle 04 */}
        <div class="sr relative py-12 md:py-16">
          <span class="ghost">04</span>
          <div class="relative z-10">
            <div class="flex items-baseline gap-3 md:gap-5 flex-wrap mb-5">
              <span class="font-serif italic text-accent text-3xl md:text-5xl">Real URLs</span>
              <span class="font-mono text-muted text-[10px] tracking-[0.25em] uppercase">over</span>
              <span class="font-mono text-dim text-2xl md:text-4xl line-through decoration-muted">Client Routes</span>
            </div>
            <p class="text-dim leading-relaxed max-w-xl">
              Every view should have a URL that works when shared, bookmarked, or crawled. If your route only exists in JavaScript, it doesn't exist.
            </p>
          </div>
        </div>
        <div class="sep" />

        {/* Principle 05 */}
        <div class="sr relative py-12 md:py-16">
          <span class="ghost">05</span>
          <div class="relative z-10">
            <div class="flex items-baseline gap-3 md:gap-5 flex-wrap mb-5">
              <span class="font-serif italic text-accent text-3xl md:text-5xl">Hypermedia Client</span>
              <span class="font-mono text-muted text-[10px] tracking-[0.25em] uppercase">over</span>
              <span class="font-mono text-dim text-2xl md:text-4xl line-through decoration-muted">App Runtime</span>
            </div>
            <p class="text-dim leading-relaxed max-w-xl">
              The browser already knows how to follow links, submit forms, and render HTML. Let it. We don't need to rebuild the browser in JavaScript.
            </p>
          </div>
        </div>

        <div class="sr mt-16 md:mt-20 text-center">
          <a
            href="#sign"
            class="inline-block px-10 py-4 bg-accent text-ink font-mono font-bold text-sm tracking-wider uppercase hover:bg-[#e8e6e3] transition-colors duration-200"
          >
            Sign the Manifesto
          </a>
        </div>
      </div>
    </section>
  );
};
