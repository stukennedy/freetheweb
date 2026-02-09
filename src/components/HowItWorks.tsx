const HypermediaDiagram = () => (
  <svg viewBox="0 0 460 240" class="w-full max-w-xl mx-auto" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="a-accent" markerWidth="7" markerHeight="7" refX="7" refY="3.5" orient="auto">
        <path d="M0,0.5 L6,3.5 L0,6.5" fill="none" stroke="#e0ff00" stroke-width="1.2" />
      </marker>
      <marker id="a-dim" markerWidth="7" markerHeight="7" refX="7" refY="3.5" orient="auto">
        <path d="M0,0.5 L6,3.5 L0,6.5" fill="none" stroke="#888898" stroke-width="1.2" />
      </marker>
    </defs>

    {/* Browser */}
    <rect x="20" y="85" width="160" height="70" rx="4" fill="#111118" stroke="#252530" stroke-width="1.5" />
    <text x="100" y="115" style="text-anchor:middle;fill:#e8e6e3;font-size:13px;font-family:monospace;letter-spacing:0.05em">BROWSER</text>
    <text x="100" y="135" style="text-anchor:middle;fill:#76768a;font-size:9px;font-family:sans-serif">displays HTML, follows links</text>

    {/* Server */}
    <rect x="280" y="85" width="160" height="70" rx="4" fill="#111118" stroke="#e0ff00" stroke-width="1" stroke-opacity="0.25" />
    <text x="360" y="115" style="text-anchor:middle;fill:#e0ff00;font-size:13px;font-family:monospace;letter-spacing:0.05em">SERVER</text>
    <text x="360" y="135" style="text-anchor:middle;fill:#76768a;font-size:9px;font-family:sans-serif">renders HTML, owns state</text>

    {/* Top arrow: Server → Browser (HTML) */}
    <path d="M280,90 C230,30 230,30 180,90" stroke="#e0ff00" stroke-width="1.5" fill="none" marker-end="url(#a-accent)" />
    <rect x="170" y="35" width="120" height="22" rx="3" fill="#08080c" />
    <text x="230" y="50" style="text-anchor:middle;fill:#e0ff00;font-size:10px;font-family:monospace">HTML + Controls</text>

    {/* Bottom arrow: Browser → Server (HTTP) */}
    <path d="M180,150 C230,210 230,210 280,150" stroke="#888898" stroke-width="1.5" fill="none" marker-end="url(#a-dim)" />
    <rect x="170" y="183" width="120" height="22" rx="3" fill="#08080c" />
    <text x="230" y="198" style="text-anchor:middle;fill:#888898;font-size:10px;font-family:monospace">HTTP Request</text>

    {/* User action annotation */}
    <text x="100" y="178" style="text-anchor:middle;fill:#76768a;font-size:8px;font-family:monospace">↑ user clicks link</text>
    <text x="100" y="190" style="text-anchor:middle;fill:#76768a;font-size:8px;font-family:monospace">or submits form</text>

    {/* Server action annotation */}
    <text x="360" y="178" style="text-anchor:middle;fill:#76768a;font-size:8px;font-family:monospace">returns only the</text>
    <text x="360" y="190" style="text-anchor:middle;fill:#76768a;font-size:8px;font-family:monospace">fragment that changed</text>
  </svg>
);

export const HowItWorks = () => {
  return (
    <section class="px-6 py-24 md:py-32">
      <div class="sep mb-24 md:mb-32" />
      <div class="max-w-3xl mx-auto">
        <div class="sr text-center mb-16">
          <span class="font-mono text-accent text-xs tracking-wider">$ diff spa.arch hypermedia.arch</span>
          <h2 class="font-serif italic text-4xl md:text-6xl mt-4 mb-3">How Hypermedia Works</h2>
          <p class="text-dim text-lg md:text-xl max-w-xl mx-auto">
            The server sends HTML with built-in controls — links and forms.
            The browser follows them. That's the whole architecture.
          </p>
        </div>

        {/* SVG Diagram */}
        <div class="sr mb-20">
          <HypermediaDiagram />
          <div class="flex justify-center gap-8 md:gap-16 mt-8 font-mono text-[10px] tracking-wider uppercase">
            <span class="text-muted">No virtual DOM</span>
            <span class="text-muted">No client state</span>
            <span class="text-muted">No JSON parsing</span>
          </div>
        </div>

        {/* SPA comparison */}
        <div class="sr grid md:grid-cols-2 gap-6 mb-20">
          <div class="p-6 border border-danger/20 bg-surface/50">
            <h3 class="font-mono text-danger text-[11px] tracking-[0.15em] uppercase mb-5">SPA: 8 steps to render</h3>
            <ol class="space-y-2 font-mono text-[11px] text-dim">
              <li class="flex gap-2"><span class="text-danger/60">1.</span> Download JS bundle (2MB)</li>
              <li class="flex gap-2"><span class="text-danger/60">2.</span> Parse &amp; execute JavaScript</li>
              <li class="flex gap-2"><span class="text-danger/60">3.</span> Initialize framework runtime</li>
              <li class="flex gap-2"><span class="text-danger/60">4.</span> Mount component tree</li>
              <li class="flex gap-2"><span class="text-danger/60">5.</span> Fetch data from API (JSON)</li>
              <li class="flex gap-2"><span class="text-danger/60">6.</span> Parse JSON, update state</li>
              <li class="flex gap-2"><span class="text-danger/60">7.</span> Reconcile virtual DOM</li>
              <li class="flex gap-2"><span class="text-danger/60">8.</span> Patch real DOM</li>
            </ol>
          </div>
          <div class="p-6 border border-accent/20 bg-surface/50">
            <h3 class="font-mono text-accent text-[11px] tracking-[0.15em] uppercase mb-5">Hypermedia: 2 steps</h3>
            <ol class="space-y-2 font-mono text-[11px] text-[#e8e6e3]">
              <li class="flex gap-2"><span class="text-accent/60">1.</span> Browser requests URL</li>
              <li class="flex gap-2"><span class="text-accent/60">2.</span> Server returns HTML. Done.</li>
            </ol>
            <div class="mt-8 pt-5 border-t border-rule/30">
              <p class="text-muted text-[11px] font-mono">For updates, HTMX sends a request and swaps the HTML fragment the server returns. Same two steps.</p>
            </div>
          </div>
        </div>

        {/* Live HTMX demo */}
        <div class="sr">
          <h3 class="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-8 text-center">Try it live</h3>
          <div class="border border-rule bg-surface overflow-hidden">
            <div class="border-b border-rule bg-ink px-5 py-3">
              <span class="font-mono text-muted text-[11px] tracking-wider">demo.html</span>
            </div>
            <div class="p-5 md:p-6 border-b border-rule/50 bg-ink/50">
              <pre class="font-mono text-[12px] md:text-[13px] leading-relaxed overflow-x-auto"><code dangerouslySetInnerHTML={{ __html:
`&lt;<span class="text-[#e8e6e3]">button</span> <span class="text-accent">hx-get</span>=<span class="text-dim">"/api/demo"</span>
        <span class="text-accent">hx-target</span>=<span class="text-dim">"#result"</span>
        <span class="text-accent">hx-swap</span>=<span class="text-dim">"innerHTML"</span>&gt;
  Fetch from server
&lt;/button&gt;
&lt;<span class="text-[#e8e6e3]">div</span> id=<span class="text-dim">"result"</span>&gt;&lt;/div&gt;`
              }} /></pre>
            </div>
            <div class="p-5 md:p-6 space-y-4">
              <div class="flex items-center gap-4">
                <button
                  hx-get="/api/demo"
                  hx-target="#demo-result"
                  hx-swap="innerHTML"
                  class="px-5 py-2.5 bg-accent text-ink font-mono font-bold text-xs tracking-wider uppercase cursor-pointer hover:bg-[#e8e6e3] transition-colors"
                >
                  Fetch from server
                </button>
                <span class="font-mono text-muted text-[10px] tracking-wider">click to send hx-get</span>
              </div>
              <div id="demo-result" class="min-h-[48px] border border-rule/30 bg-ink p-4 font-mono text-muted text-xs">
                Server response will appear here...
              </div>
            </div>
          </div>
          <p class="font-mono text-muted text-[10px] tracking-wider mt-4 text-center">
            Three HTML attributes. Zero JavaScript. That's HTMX.
          </p>
        </div>
      </div>
    </section>
  );
};
