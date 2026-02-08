export const Hero = () => {
  return (
    <section class="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div class="max-w-5xl w-full">
        {/* ASCII Art Header */}
        <pre class="ascii-art font-mono text-terminal text-xs sm:text-sm md:text-base lg:text-lg terminal-shadow mb-8 overflow-x-auto">
{`
███████╗██████╗ ███████╗███████╗    ████████╗██╗  ██╗███████╗    ██╗    ██╗███████╗██████╗ 
██╔════╝██╔══██╗██╔════╝██╔════╝    ╚══██╔══╝██║  ██║██╔════╝    ██║    ██║██╔════╝██╔══██╗
█████╗  ██████╔╝█████╗  █████╗         ██║   ███████║█████╗      ██║ █╗ ██║█████╗  ██████╔╝
██╔══╝  ██╔══██╗██╔══╝  ██╔══╝         ██║   ██╔══██║██╔══╝      ██║███╗██║██╔══╝  ██╔══██╗
██║     ██║  ██║███████╗███████╗       ██║   ██║  ██║███████╗    ╚███╔███╔╝███████╗██████╔╝
╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝       ╚═╝   ╚═╝  ╚═╝╚══════╝     ╚══╝╚══╝ ╚══════╝╚═════╝ 
`}
        </pre>
        
        {/* Tagline */}
        <div class="space-y-6 text-center">
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            The web was built on <span class="text-terminal">hypermedia</span>.
          </h1>
          <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-400 leading-tight">
            We broke it with <span class="line-through text-red-500">SPAs</span>.
          </h2>
          <p class="text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            It's time to <span class="text-terminal cursor-blink">fix it</span>
          </p>
        </div>
        
        {/* Call to action scroll indicator */}
        <div class="mt-20 text-center">
          <a 
            href="#problem" 
            class="inline-block text-terminal hover:text-white transition-colors duration-300 font-mono text-sm"
          >
            <div class="animate-bounce">
              ↓ Scroll to begin ↓
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
