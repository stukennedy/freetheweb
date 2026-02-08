export const Problem = () => {
  return (
    <section id="problem" class="min-h-screen flex items-center px-6 py-20 bg-dark-lighter">
      <div class="max-w-4xl mx-auto">
        <div class="mb-12">
          <span class="font-mono text-terminal text-sm">$ cat the-problem.txt</span>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            What SPAs Broke
          </h2>
        </div>
        
        <div class="space-y-8 text-lg md:text-xl text-gray-300">
          <p class="text-xl md:text-2xl text-white leading-relaxed">
            SPAs turned the browser from a <span class="text-terminal font-semibold">hypermedia client</span> into a <span class="text-red-500 font-semibold">JavaScript runtime</span>. The result?
          </p>
          
          <div class="space-y-6 pl-6 border-l-4 border-terminal">
            <div class="pl-6">
              <h3 class="text-2xl font-bold text-terminal mb-2">🔗 Broken URLs</h3>
              <p>Routes that don't work without JS. Try sharing a link. Go ahead. We'll wait.</p>
            </div>
            
            <div class="pl-6">
              <h3 class="text-2xl font-bold text-terminal mb-2">📦 Bloated Bundles</h3>
              <p>2MB of JavaScript just to show a list of items. Your users are on mobile. They notice.</p>
            </div>
            
            <div class="pl-6">
              <h3 class="text-2xl font-bold text-terminal mb-2">💥 Fragile State</h3>
              <p>Client-side state management is an <em>entire career</em>. Redux, MobX, Zustand, Jotai... we invented solutions for problems we created.</p>
            </div>
            
            <div class="pl-6">
              <h3 class="text-2xl font-bold text-terminal mb-2">♿ Inaccessible</h3>
              <p>Screen readers choke on virtual DOMs. Forms that don't submit. Buttons that aren't buttons. We broke the web for everyone.</p>
            </div>
            
            <div class="pl-6">
              <h3 class="text-2xl font-bold text-terminal mb-2">🤖 AI-Hostile</h3>
              <p>LLMs can't interact with client-rendered apps. The content isn't in the HTML—it's locked behind a JavaScript execution wall.</p>
            </div>
            
            <div class="pl-6">
              <h3 class="text-2xl font-bold text-terminal mb-2">😫 Developer Suffering</h3>
              <p>Build tools, bundlers, hydration, RSC, islands... We built a <strong>tower of complexity</strong> to solve problems <em>we created</em>.</p>
            </div>
          </div>
          
          <div class="mt-12 p-6 bg-dark rounded-lg border-2 border-red-500">
            <p class="text-xl md:text-2xl font-mono text-red-400">
              {'> We took the most successful hypermedia system in history and replaced it with distributed state machines running in hostile environments.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
