export const AIAngle = () => {
  return (
    <section id="ai" class="px-6 py-24 md:py-32">
      <div class="sep mb-24 md:mb-32" />
      <div class="max-w-3xl mx-auto">
        <div class="sr">
          <span class="font-mono text-accent text-xs tracking-wider">$ echo "one more thing"</span>
          <h2 class="font-serif italic text-4xl md:text-6xl mt-4 mb-3">Oh, and It's AI-Ready</h2>
          <p class="text-dim text-lg md:text-xl mb-16 md:mb-20">
            There's a bonus to building the web properly.
          </p>
        </div>

        <div class="sr space-y-6 text-dim text-lg leading-relaxed mb-12">
          <p>
            LLMs and AI agents interact with the web through{' '}
            <strong class="text-accent font-semibold">HTTP and HTML</strong>{' '}
            — they make GET requests, parse markup, follow links, submit forms. That's hypermedia. It's what we've been talking about this whole time.
          </p>
          <p>
            SPAs require a{' '}
            <strong class="text-danger font-semibold">JavaScript runtime</strong>{' '}
            to render content. AI agents don't have one. Your client-rendered app is invisible to them.
          </p>
          <p>
            This isn't the <em>reason</em> to build with hypermedia — developer freedom, accessibility, and simplicity are. But it means every hypermedia app you build is automatically an app that AI agents can read, navigate, and use. No special APIs required.
          </p>
        </div>

        {/* Terminal window */}
        <div class="sr bg-surface rounded-lg border border-rule overflow-hidden mb-12">
          <div class="flex items-center gap-2 px-4 py-3 border-b border-rule bg-elevated/40">
            <span class="w-2.5 h-2.5 rounded-full bg-danger/40" />
            <span class="w-2.5 h-2.5 rounded-full bg-accent/20" />
            <span class="w-2.5 h-2.5 rounded-full bg-accent/40" />
            <span class="ml-3 font-mono text-[11px] text-muted">bonus.sh</span>
          </div>
          <div class="p-6 md:p-8 font-mono text-sm md:text-base leading-loose">
            <p class="text-muted">$ curl https://your-hypermedia-app.com</p>
            <div class="mt-4 space-y-1">
              <p>{'>'} AI agents can read this HTML.</p>
              <p>{'>'} They can follow the links.</p>
              <p>{'>'} They can submit the forms.</p>
              <p class="text-accent mt-3">{'>'} You didn't have to do anything extra.</p>
            </div>
          </div>
        </div>

        <div class="sr">
          <p class="text-dim text-lg leading-relaxed">
            Build for humans, for accessibility, for simplicity, for <em>yourself</em>.
            The AI compatibility comes free.
          </p>
        </div>
      </div>
    </section>
  );
};
