# elli mia — Official Portfolio Website

Official portfolio website for **elli mia**, electronic music producer, DJ, and artist based in Tsukuba, Ibaraki.
Hosted on GitHub Pages at [ellimia.net](https://ellimia.net).

## Features

- Single-page layout with smooth-scroll navigation.
- Built with pure HTML, CSS, and vanilla JS — zero frameworks, zero external dependencies.
- Fully responsive and accessible design.
- Built-in Language Toggle (English / Japanese) persisting via `localStorage`.
- Automatic language detection: non-Japanese browsers default to English on first visit.
- **PWA Ready**: Includes `manifest.json`, `theme-color`, and Apple Touch Icon for a native app-like experience when added to the home screen.
- **Advanced Accessibility (a11y)**:
  - Dynamically translated `aria-label` attributes for screen readers.
  - Native `inert` focus trap mapping for the mobile navigation menu.
  - Screen-reader only (`.sr-only`) warnings for external links opening in new tabs.
  - Horizontally scrollable commission pricing table that maintains semantic structure on mobile.
- **Performance & SEO**:
  - `decoding="async"` for smoother image rendering and LCP preloading for the hero image.
  - Semantic `<time>` tags for dates and `rel="me"` on social links for decentralized identity verification.
  - JSON-LD structured data and XML Sitemap mapping for improved search engine understanding.
- Privacy-first: no tracking tools, no external CDNs, JS-protected email reveal (with auto-copy to clipboard feature), and strict Referrer-Policy.
- AI blocks: `robots.txt` configured to explicitly deny access to major AI dataset training crawlers (`GPTBot`, `Applebot-Extended`, `FacebookBot`, etc) while allowing real-time AI search bots (`ChatGPT-User`, `PerplexityBot`).

## File Structure

```
/
├── index.html          # Main single-page site
├── commission.html     # Services and pricing page
├── 404.html            # Custom 404 error page (noindex)
├── css/
│   └── style.css       # All responsive & accessibility styles
├── js/
│   └── main.js         # Navigation, language toggle, email reveal, focus trap
├── images/             # Optimized assets (WebP)
├── manifest.json       # Web App Manifest for PWA
├── sitemap.xml         # XML Sitemap for search engines
├── robots.txt          # Disallows AI training crawlers
├── CNAME               # Custom domain: ellimia.net
├── .gitignore
└── README.md
```

## Running Locally

No build step required. Simply open `index.html` in a web browser.
To test full functionality (like `localStorage` in some browsers), run a simple HTTP server:
```bash
python3 -m http.server
# or
npx serve
```

## Privacy & Robots

`robots.txt` explicitly disallows the following AI training and scraping agents:
`GPTBot`, `CCBot`, `Google-Extended`, `anthropic-ai`, `ClaudeBot`, `Bytespider`, `ImagesiftBot`, `Amazonbot`.

The following user-assisting search bots are explicitly allowed to help users discover the site via AI search:
`OAI-SearchBot`, `ChatGPT-User`, `Claude-Web`, `PerplexityBot`.

## License

All rights reserved. © 2026 elli mia.
