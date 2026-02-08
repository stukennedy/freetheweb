export const AIAngle = () => {
  return (
    <section id="ai" class="min-h-screen flex items-center px-6 py-20 bg-gradient-to-br from-dark via-dark-lighter to-dark">
      <div class="max-w-4xl mx-auto">
        <div class="mb-12">
          <span class="font-mono text-terminal text-sm">$ ./the-secret-weapon.sh</span>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            The AI Angle
          </h2>
          <p class="text-2xl md:text-3xl text-terminal font-bold">
            This is the future, and SPAs are obsolete.
          </p>
        </div>
        
        <div class="space-y-8 text-lg md:text-xl text-gray-300">
          <div class="p-8 bg-dark border-2 border-terminal rounded-lg">
            <p class="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
              {'> AI agents can read HTML.'}<br/>
              {'> They can follow links.'}<br/>
              {'> They can submit forms.'}<br/>
              {'> '}<span class="text-red-500">They cannot execute your React components.</span>
            </p>
          </div>
          
          <div class="space-y-6">
            <p class="text-xl leading-relaxed">
              LLMs interact with the web through <strong class="text-terminal">HTTP + HTML</strong> — exactly what hypermedia is. They make GET requests, parse HTML, follow links, and submit forms. It's how they were designed to work.
            </p>
            
            <p class="text-xl leading-relaxed">
              SPAs require a <strong class="text-red-500">JavaScript runtime</strong> to render content. LLMs don't have one. They can't `npm install`. They can't execute your React components. Your SPA might as well not exist to them.
            </p>
            
            <div class="my-8 p-6 bg-dark-lighter rounded-lg border-l-4 border-terminal">
              <h3 class="text-2xl font-bold text-terminal mb-4">Why This Matters</h3>
              <ul class="space-y-3 text-lg">
                <li class="flex items-start gap-3">
                  <span class="text-terminal text-2xl">✓</span>
                  <span>Hypermedia is <strong>natively AI-compatible</strong> because content and controls are in the markup</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-terminal text-2xl">✓</span>
                  <span>The more we build with hypermedia, the more the web becomes an <strong>AI-accessible platform</strong></span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-terminal text-2xl">✓</span>
                  <span>AI agents can <strong>use your app</strong> — book appointments, fill forms, retrieve data — without custom APIs</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-terminal text-2xl">✓</span>
                  <span>This isn't theoretical — it's happening <strong>right now</strong> with agentic AI tools</span>
                </li>
              </ul>
            </div>
            
            <p class="text-xl leading-relaxed">
              Every SPA you build is a <strong>wall</strong> between your users and the AI tools they're starting to rely on. Every hypermedia app you build is a <strong>bridge</strong>.
            </p>
            
            <div class="mt-8 p-8 bg-gradient-to-r from-terminal/10 to-transparent border-2 border-terminal rounded-lg">
              <p class="text-2xl md:text-3xl font-bold text-white">
                The future of the web is agentic. <br/>
                <span class="text-terminal">Hypermedia is ready.</span><br/>
                <span class="text-gray-500">SPAs are not.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
