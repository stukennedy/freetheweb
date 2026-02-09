export const Hero = () => {
  return (
    <section class="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
        style="background:radial-gradient(ellipse 80% 50% at 50% 20%, rgba(224,255,0,0.03) 0%, transparent 70%)" />

      <div class="relative z-10 text-center">
        <div class="mb-10 md:mb-14">
          <div class="hero-reveal d0">
            <span class="hero-type text-[#e8e6e3]">FREE</span>
          </div>
          <div class="hero-reveal d1 my-1 md:my-2">
            <span class="font-mono text-muted text-xs md:text-base tracking-[0.4em] uppercase">the</span>
          </div>
          <div class="hero-reveal d2">
            <span class="hero-type text-accent glow">WEB.</span>
          </div>
        </div>

        <div class="hero-reveal d3 max-w-2xl mx-auto">
          <p class="text-base md:text-2xl font-light leading-relaxed text-dim">
            The web was built on{' '}
            <span class="text-[#e8e6e3] font-normal">hypermedia</span>.{' '}
            We broke it with{' '}
            <span class="text-danger line-through">SPAs</span>.
            <br class="hidden md:block" />
            {' '}It's time to{' '}
            <span class="text-accent font-normal blink">fix it</span>
          </p>
        </div>

        <div class="hero-reveal d5 mt-24 md:mt-32 flex flex-col items-center gap-3">
          <span class="font-mono text-muted text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div class="scroll-line" />
        </div>
      </div>
    </section>
  );
};
