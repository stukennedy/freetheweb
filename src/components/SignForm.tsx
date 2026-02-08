export const SignForm = ({ count }: { count: number }) => {
  return (
    <section id="sign" class="min-h-screen flex items-center px-6 py-20 bg-dark-lighter">
      <div class="max-w-3xl mx-auto w-full">
        <div class="mb-12 text-center">
          <span class="font-mono text-terminal text-sm">$ vim signature.txt</span>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Sign the Manifesto
          </h2>
          <p class="text-xl text-gray-400">
            Join the movement. Pledge to build hypermedia-first.
          </p>
        </div>
        
        {/* Live signature counter */}
        <div 
          class="mb-12 text-center p-6 bg-dark rounded-lg border-2 border-terminal"
          hx-get="/api/count"
          hx-trigger="every 30s"
          hx-swap="innerHTML"
        >
          <div class="text-5xl md:text-7xl font-bold text-terminal font-mono">
            {count}
          </div>
          <div class="text-xl text-gray-400 mt-2">
            developers have signed
          </div>
        </div>
        
        {/* The form */}
        <div 
          id="sign-form-container" 
          class="bg-dark p-8 md:p-12 rounded-lg border-2 border-gray-700 hover:border-terminal transition-colors duration-300"
        >
          <form 
            hx-post="/api/sign" 
            hx-target="#sign-form-container"
            hx-swap="innerHTML"
            class="space-y-6"
          >
            <div>
              <label for="name" class="block text-sm font-mono text-terminal mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class="w-full px-4 py-3 bg-dark-lighter border-2 border-gray-700 rounded-lg text-white focus:border-terminal focus:outline-none transition-colors font-sans"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label for="title" class="block text-sm font-mono text-terminal mb-2">
                Title / Role <span class="text-gray-500">(optional)</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                class="w-full px-4 py-3 bg-dark-lighter border-2 border-gray-700 rounded-lg text-white focus:border-terminal focus:outline-none transition-colors font-sans"
                placeholder="e.g., Senior Developer, CTO, Indie Hacker"
              />
            </div>
            
            <div class="flex items-start gap-3">
              <input
                type="checkbox"
                id="pledge"
                name="pledge"
                required
                class="mt-1 w-5 h-5 bg-dark-lighter border-2 border-gray-700 rounded focus:ring-terminal"
              />
              <label for="pledge" class="text-gray-300 leading-relaxed">
                I pledge to <strong class="text-white">build my next project with hypermedia</strong>. 
                I will serve HTML, respect URLs, and let the browser be a hypermedia client.
              </label>
            </div>
            
            <button
              type="submit"
              class="w-full px-8 py-4 bg-terminal text-dark font-bold text-xl rounded-lg hover:bg-white transition-colors duration-300 font-mono"
            >
              → Sign the Manifesto
            </button>
            
            <p class="text-sm text-gray-500 text-center font-mono">
              This form is powered by HTMX. Zero JavaScript frameworks. Zero client-side routing.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export const SignFormSuccess = ({ name, newCount }: { name: string; newCount: number }) => {
  return (
    <div class="text-center space-y-6 py-12">
      <div class="text-6xl">🎉</div>
      <h3 class="text-3xl md:text-4xl font-bold text-terminal">
        Welcome to the movement, {name}!
      </h3>
      <p class="text-xl text-gray-300">
        You're signatory <strong class="text-terminal font-mono">#{newCount}</strong>
      </p>
      <p class="text-lg text-gray-400 max-w-md mx-auto">
        The web needs more builders like you. Share this manifesto and help free the web.
      </p>
      <div class="pt-6">
        <a
          href="/"
          class="inline-block px-6 py-3 bg-dark-lighter border-2 border-terminal text-terminal font-mono rounded-lg hover:bg-terminal hover:text-dark transition-colors duration-300"
        >
          ← Back to manifesto
        </a>
      </div>
    </div>
  );
};
