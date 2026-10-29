/**
 * Structured Data (JSON-LD) for Fireboy and Watergirl Game
 * Automatically injects Schema.org metadata into document.head
 */
(function() {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://fireboyandwatergirlgame.github.io/#website",
          "url": "https://fireboyandwatergirlgame.github.io/",
          "name": "Fireboy and Watergirl Game",
          "description": "Play all Fireboy and Watergirl games online for free — unblocked and no download required.",
          "inLanguage": "en-US",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://fireboyandwatergirlgame.github.io/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "WebApplication",
          "@id": "https://fireboyandwatergirlgame.github.io/#game",
          "name": "Fireboy and Watergirl Game",
          "alternateName": ["Fireboy and Watergirl", "Fireboy Watergirl", "Fireboy and Watergirl Unblocked"],
          "description": "Fireboy and Watergirl is the legendary co-op puzzle platformer series. Guide the elemental duo through temples filled with traps, switches, and diamonds. Play all 7 games in the series for free — unblocked on any browser.",
          "genre": ["Puzzle", "Platformer", "Co-op", "Adventure", "2 Player"],
          "gamePlatform": "Web Browser",
          "applicationCategory": "Game",
          "operatingSystem": "Any",
          "url": "https://fireboyandwatergirlgame.github.io/",
          "image": "https://parkingfury3.github.io/gamefile-pakingfury3/fireboy-and-watergirl-1-forest-temple/logo.png",
          "author": {
            "@type": "Organization",
            "name": "Oslo Albet"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "ratingCount": "12450"
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://fireboyandwatergirlgame.github.io/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Fireboy and Watergirl Game?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Fireboy and Watergirl is a series of classic co-op puzzle platformer games. Players guide two elemental heroes — Fireboy (immune to lava) and Watergirl (immune to water) — through increasingly complex temples filled with traps, levers, platforms, and diamonds. Both characters must reach their colored exit doors to complete each level."
              }
            },
            {
              "@type": "Question",
              "name": "Can I play Fireboy and Watergirl unblocked at school?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Fireboy and Watergirl Game is hosted on GitHub Pages and runs in any modern browser without downloads, plugins, or Flash. It bypasses most school and office network filters, making it fully playable on Chromebooks and restricted computers during free periods."
              }
            },
            {
              "@type": "Question",
              "name": "How many Fireboy and Watergirl games are there?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "There are 7 main Fireboy and Watergirl games: 1 Forest Temple, 2 Light Temple, 3 Ice Temple, 4 Crystal Temple, 5 Elements, 6 Fairy Tales, and 7 And Friends. All games are available free to play online without downloading anything."
              }
            },
            {
              "@type": "Question",
              "name": "Can 2 players play Fireboy and Watergirl at the same time?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Fireboy and Watergirl supports two-player co-op on one keyboard. Player 1 uses the Arrow Keys to control Fireboy and Player 2 uses W, A, D to control Watergirl. You can also play solo by controlling both characters yourself."
              }
            },
            {
              "@type": "Question",
              "name": "Is Fireboy and Watergirl free to play?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all Fireboy and Watergirl games are 100% free to play online. Every game in the full series is accessible directly in your browser without any payments, registrations, or downloads required."
              }
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData, null, 2);
    document.head.appendChild(script);
})();
