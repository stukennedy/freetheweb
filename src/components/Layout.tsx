export const Layout = ({ children }: { children: any }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Free The Web - A Hypermedia Manifesto</title>
        <meta name="description" content="The web was built on hypermedia. We broke it with SPAs. It's time to fix it." />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free The Web - A Hypermedia Manifesto" />
        <meta property="og:description" content="A movement to free the web from SPA shackles and return to hypermedia." />
        <meta property="og:type" content="website" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    terminal: '#00ff41',
                    dark: '#0a0a0f',
                    'dark-lighter': '#1a1a24',
                  },
                  fontFamily: {
                    mono: ['"JetBrains Mono"', 'monospace'],
                    sans: ['Manrope', 'sans-serif'],
                  },
                }
              }
            }
          `
        }} />
        
        {/* HTMX */}
        <script src="https://unpkg.com/htmx.org@1.9.10" integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC" crossOrigin="anonymous"></script>
        
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              background-color: #0a0a0f;
              color: #e0e0e0;
              font-family: 'Manrope', sans-serif;
              line-height: 1.6;
            }
            
            html {
              scroll-behavior: smooth;
            }
            
            ::selection {
              background-color: #00ff41;
              color: #0a0a0f;
            }
            
            .cursor-blink::after {
              content: '▊';
              animation: blink 1s infinite;
            }
            
            @keyframes blink {
              0%, 49% { opacity: 1; }
              50%, 100% { opacity: 0; }
            }
            
            .terminal-shadow {
              text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
            }
            
            .ascii-art {
              line-height: 1.2;
              letter-spacing: 0;
            }
          `
        }} />
      </head>
      <body class="antialiased">
        {children}
      </body>
    </html>
  );
};
