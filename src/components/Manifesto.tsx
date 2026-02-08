export const Manifesto = () => {
  return (
    <section id="manifesto" class="min-h-screen flex items-center px-6 py-20 bg-dark">
      <div class="max-w-4xl mx-auto">
        <div class="mb-12">
          <span class="font-mono text-terminal text-sm">$ cat manifesto.md</span>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            The Manifesto
          </h2>
          <p class="text-xl text-gray-400 italic">
            Like the Agile Manifesto, we value the items on the left more than the items on the right.
          </p>
        </div>
        
        <div class="space-y-10">
          {/* Principle 1 */}
          <div class="p-8 bg-dark-lighter rounded-lg border-2 border-terminal hover:border-white transition-colors duration-300">
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-terminal font-mono">01</span>
              <div class="flex-1">
                <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
                  <span class="text-terminal">HTML</span> over <span class="text-gray-500">JSON</span>
                </h3>
                <p class="text-lg text-gray-300">
                  The server should return <strong>documents</strong>, not data blobs for the client to assemble. HTML is the universal format—every browser, every screen reader, every LLM can understand it.
                </p>
              </div>
            </div>
          </div>
          
          {/* Principle 2 */}
          <div class="p-8 bg-dark-lighter rounded-lg border-2 border-terminal hover:border-white transition-colors duration-300">
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-terminal font-mono">02</span>
              <div class="flex-1">
                <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
                  <span class="text-terminal">Server Authority</span> over <span class="text-gray-500">Client State</span>
                </h3>
                <p class="text-lg text-gray-300">
                  The server knows the state. The server <em>is</em> the state. Stop duplicating it in Redux, syncing it, debugging drift, and pretending client-side state is simpler.
                </p>
              </div>
            </div>
          </div>
          
          {/* Principle 3 */}
          <div class="p-8 bg-dark-lighter rounded-lg border-2 border-terminal hover:border-white transition-colors duration-300">
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-terminal font-mono">03</span>
              <div class="flex-1">
                <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
                  <span class="text-terminal">Progressive Enhancement</span> over <span class="text-gray-500">JavaScript Dependency</span>
                </h3>
                <p class="text-lg text-gray-300">
                  The web <strong>works without JavaScript</strong>. Forms submit. Links navigate. Your app should respect that. JavaScript is for enhancement, not existence.
                </p>
              </div>
            </div>
          </div>
          
          {/* Principle 4 */}
          <div class="p-8 bg-dark-lighter rounded-lg border-2 border-terminal hover:border-white transition-colors duration-300">
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-terminal font-mono">04</span>
              <div class="flex-1">
                <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
                  <span class="text-terminal">Real URLs</span> over <span class="text-gray-500">Client-Side Routes</span>
                </h3>
                <p class="text-lg text-gray-300">
                  Every view should have a URL that works when shared, bookmarked, or crawled. If your route only exists in JavaScript, <em>it doesn't exist</em>.
                </p>
              </div>
            </div>
          </div>
          
          {/* Principle 5 */}
          <div class="p-8 bg-dark-lighter rounded-lg border-2 border-terminal hover:border-white transition-colors duration-300">
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-terminal font-mono">05</span>
              <div class="flex-1">
                <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
                  <span class="text-terminal">Browser as Hypermedia Client</span> over <span class="text-gray-500">Application Runtime</span>
                </h3>
                <p class="text-lg text-gray-300">
                  The browser already knows how to follow links, submit forms, and render HTML. <strong>Let it.</strong> We don't need to rebuild the browser in JavaScript.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-16 text-center">
          <a 
            href="#sign" 
            class="inline-block px-8 py-4 bg-terminal text-dark font-bold text-xl rounded-lg hover:bg-white transition-colors duration-300 font-mono"
          >
            → Sign the Manifesto
          </a>
        </div>
      </div>
    </section>
  );
};
