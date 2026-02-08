export const Proof = () => {
  return (
    <section id="proof" class="px-6 py-20 bg-dark border-t-2 border-terminal">
      <div class="max-w-4xl mx-auto">
        <div class="text-center space-y-8">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            The Proof
          </h2>
          
          <div class="p-8 bg-dark-lighter rounded-lg border-2 border-terminal">
            <p class="text-xl md:text-2xl text-gray-300 leading-relaxed">
              This entire site was built with <strong class="text-terminal">Hono + HTMX</strong>.
            </p>
            <div class="mt-6 space-y-3 text-lg md:text-xl text-gray-400 font-mono">
              <div class="flex items-center justify-center gap-3">
                <span class="text-terminal">✓</span>
                <span>Zero JavaScript frameworks</span>
              </div>
              <div class="flex items-center justify-center gap-3">
                <span class="text-terminal">✓</span>
                <span>Zero client-side routing</span>
              </div>
              <div class="flex items-center justify-center gap-3">
                <span class="text-terminal">✓</span>
                <span>Zero hydration</span>
              </div>
              <div class="flex items-center justify-center gap-3">
                <span class="text-terminal">✓</span>
                <span>Zero build complexity</span>
              </div>
            </div>
            <p class="text-2xl md:text-3xl text-white font-bold mt-8">
              The HTML <span class="text-terminal">IS</span> the application.
            </p>
          </div>
          
          <div class="flex flex-wrap justify-center gap-6 pt-8">
            <a
              href="view-source:https://freetheweb.dev"
              class="px-6 py-3 bg-dark-lighter border-2 border-gray-700 text-gray-300 font-mono rounded-lg hover:border-terminal hover:text-terminal transition-colors duration-300"
            >
              View Source →
            </a>
            <a
              href="https://github.com/stukennedy/freetheweb"
              target="_blank"
              rel="noopener noreferrer"
              class="px-6 py-3 bg-dark-lighter border-2 border-gray-700 text-gray-300 font-mono rounded-lg hover:border-terminal hover:text-terminal transition-colors duration-300"
            >
              View on GitHub →
            </a>
          </div>
        </div>
        
        {/* Resources */}
        <div class="mt-20 pt-12 border-t border-gray-800">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">
            Learn More
          </h3>
          <div class="grid md:grid-cols-2 gap-6">
            <a
              href="https://htmx.org"
              target="_blank"
              rel="noopener noreferrer"
              class="p-6 bg-dark-lighter border-2 border-gray-700 rounded-lg hover:border-terminal transition-colors duration-300 group"
            >
              <h4 class="text-xl font-bold text-terminal group-hover:text-white mb-2">HTMX</h4>
              <p class="text-gray-400">High power tools for HTML. Build modern UIs with hypermedia.</p>
            </a>
            
            <a
              href="https://hono.dev"
              target="_blank"
              rel="noopener noreferrer"
              class="p-6 bg-dark-lighter border-2 border-gray-700 rounded-lg hover:border-terminal transition-colors duration-300 group"
            >
              <h4 class="text-xl font-bold text-terminal group-hover:text-white mb-2">Hono</h4>
              <p class="text-gray-400">Fast, lightweight web framework for the edge. Perfect for hypermedia apps.</p>
            </a>
            
            <a
              href="https://hypermedia.systems"
              target="_blank"
              rel="noopener noreferrer"
              class="p-6 bg-dark-lighter border-2 border-gray-700 rounded-lg hover:border-terminal transition-colors duration-300 group"
            >
              <h4 class="text-xl font-bold text-terminal group-hover:text-white mb-2">Hypermedia Systems</h4>
              <p class="text-gray-400">The book on building hypermedia-driven applications.</p>
            </a>
            
            <a
              href="https://htmx.org/essays/"
              target="_blank"
              rel="noopener noreferrer"
              class="p-6 bg-dark-lighter border-2 border-gray-700 rounded-lg hover:border-terminal transition-colors duration-300 group"
            >
              <h4 class="text-xl font-bold text-terminal group-hover:text-white mb-2">HTMX Essays</h4>
              <p class="text-gray-400">Deep dives on hypermedia, REST, and why SPAs aren't the answer.</p>
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <div class="mt-20 pt-8 border-t border-gray-800 text-center space-y-4">
          <p class="text-gray-400">
            Built with <span class="text-terminal">❤</span> by{' '}
            <a 
              href="https://stukennedy.com" 
              class="text-terminal hover:text-white transition-colors font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stu Kennedy
            </a>
          </p>
          <div class="flex justify-center gap-6 text-sm">
            <a 
              href="https://twitter.com/stuk" 
              class="text-gray-500 hover:text-terminal transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a 
              href="https://github.com/stukennedy" 
              class="text-gray-500 hover:text-terminal transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/stukennedy" 
              class="text-gray-500 hover:text-terminal transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <p class="text-xs text-gray-600 font-mono pt-4">
            Made with Cloudflare Workers · Hono · HTMX · Zero JavaScript Frameworks
          </p>
        </div>
      </div>
    </section>
  );
};
