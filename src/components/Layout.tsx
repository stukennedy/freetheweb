export const Layout = ({ children }: { children: any }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Free The Web — A Hypermedia Manifesto</title>
        <meta name="description" content="The web was built on hypermedia. We broke it with SPAs. It's time to fix it. A manifesto for returning to what works." />
        <meta property="og:title" content="Free The Web — A Hypermedia Manifesto" />
        <meta property="og:description" content="The web was built on hypermedia. We broke it with SPAs. It's time to fix it." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#08080c" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <link rel="stylesheet" href="/styles.css" />
        <script src="/htmx.min.js" defer></script>
      </head>
      <body>
        <main>
          {children}
        </main>

        <div style="position:fixed;inset:0;z-index:9999;pointer-events:none;opacity:0.03" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain)" />
          </svg>
        </div>

        <script dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in-view');io.unobserve(x.target)}})},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
              var so=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.querySelectorAll('.sr').forEach(function(c){c.classList.add('in-view')});so.unobserve(x.target)}})},{threshold:.05,rootMargin:'0px 0px -30px 0px'});
              document.querySelectorAll('.sr:not(.stagger .sr)').forEach(function(el){io.observe(el)});
              document.querySelectorAll('.stagger').forEach(function(el){so.observe(el)});
            })();
          `
        }} />
      </body>
    </html>
  );
};
