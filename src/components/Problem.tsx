export const Problem = () => {
  return (
    <section id="problem" class="px-6 py-24 md:py-32">
      <div class="sep mb-24 md:mb-32" />
      <div class="max-w-3xl mx-auto">
        <div class="sr">
          <span class="font-mono text-accent text-xs tracking-wider">$ cat the-problem.txt</span>
          <h2 class="font-serif italic text-4xl md:text-6xl mt-4 mb-4">What SPAs Broke</h2>
          <p class="text-dim text-lg md:text-xl mb-16 md:mb-20">
            SPAs turned the browser from a{' '}
            <span class="text-accent">hypermedia client</span> into a{' '}
            <span class="text-danger">JavaScript runtime</span>. The result:
          </p>
        </div>

        <div class="stagger space-y-10 md:space-y-12">
          <div class="sr flex gap-5 md:gap-7">
            <span class="font-mono text-accent text-sm mt-0.5 shrink-0 tabular-nums">01</span>
            <div>
              <h3 class="font-mono text-sm tracking-wider mb-1.5">BROKEN URLs</h3>
              <p class="text-dim leading-relaxed">Routes that don't work without JavaScript. Try sharing a link. Go ahead.</p>
            </div>
          </div>

          <div class="sr flex gap-5 md:gap-7">
            <span class="font-mono text-accent text-sm mt-0.5 shrink-0 tabular-nums">02</span>
            <div>
              <h3 class="font-mono text-sm tracking-wider mb-1.5">BLOATED BUNDLES</h3>
              <p class="text-dim leading-relaxed">2MB of JavaScript to render a list. Your users are on mobile. They notice.</p>
            </div>
          </div>

          <div class="sr flex gap-5 md:gap-7">
            <span class="font-mono text-accent text-sm mt-0.5 shrink-0 tabular-nums">03</span>
            <div>
              <h3 class="font-mono text-sm tracking-wider mb-1.5">FRAGILE STATE</h3>
              <p class="text-dim leading-relaxed">Client-side state management is an entire career. Redux, MobX, Zustand, Jotai — we invented solutions for problems we created.</p>
            </div>
          </div>

          <div class="sr flex gap-5 md:gap-7">
            <span class="font-mono text-accent text-sm mt-0.5 shrink-0 tabular-nums">04</span>
            <div>
              <h3 class="font-mono text-sm tracking-wider mb-1.5">INACCESSIBLE</h3>
              <p class="text-dim leading-relaxed">Screen readers choke on virtual DOMs. Buttons that aren't buttons. Forms that don't submit. We broke the web for everyone.</p>
            </div>
          </div>

          <div class="sr flex gap-5 md:gap-7">
            <span class="font-mono text-accent text-sm mt-0.5 shrink-0 tabular-nums">05</span>
            <div>
              <h3 class="font-mono text-sm tracking-wider mb-1.5">AI-HOSTILE</h3>
              <p class="text-dim leading-relaxed">LLMs can't interact with client-rendered apps. The content is locked behind a JavaScript execution wall.</p>
            </div>
          </div>

          <div class="sr flex gap-5 md:gap-7">
            <span class="font-mono text-accent text-sm mt-0.5 shrink-0 tabular-nums">06</span>
            <div>
              <h3 class="font-mono text-sm tracking-wider mb-1.5">DEVELOPER SUFFERING</h3>
              <p class="text-dim leading-relaxed">Build tools, bundlers, hydration, RSC, islands... a tower of complexity to solve problems we created.</p>
            </div>
          </div>
        </div>

        <div class="sr mt-16 md:mt-24 pl-6 border-l border-accent/30">
          <p class="font-serif italic text-xl md:text-2xl text-dim leading-relaxed">
            "We took the most successful hypermedia system in history and replaced it with distributed state machines running in hostile environments."
          </p>
        </div>
      </div>
    </section>
  );
};
