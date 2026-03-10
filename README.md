# elli mia — Official Portfolio Website

Official portfolio website for **elli mia**, electronic music producer, DJ, and artist based in Tsukuba, Ibaraki.
Hosted on GitHub Pages at [ellimia.net](https://ellimia.net).

## Features

- Single-page layout with smooth-scroll navigation.
- Built with pure HTML, CSS, and vanilla JS — zero frameworks, zero external dependencies.
- Fully responsive and accessible design.
- Built-in Language Toggle (English / Japanese) persisting via `localStorage`.
- Automatic language detection: non-Japanese browsers default to English on first visit.
- JSON-LD structured data for improved search engine understanding.
- Open Graph & Twitter Card meta tags for rich social media previews.
- XML Sitemap for search engine crawling.
- Privacy-first: no tracking tools, no external CDNs, and email address hidden from basic scrapers.
- AI blocks: `robots.txt` configured to deny access to major AI training crawlers.

## File Structure

```
/
├── index.html          # Main single-page site
├── 404.html            # Custom 404 error page
├── css/
│   └── style.css       # All styles 
├── js/
│   └── main.js         # Navigation, language toggle, email reveal
├── images/             # Optimized assets (WebP)
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
