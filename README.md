# elli mia — Personal Portfolio Website

Official portfolio website for **elli mia**, musician and composer.
Hosted on [GitHub Pages](https://pages.github.com/) at [ellimia.net](https://ellimia.net).

## Features

- Single-page layout with smooth-scroll navigation
- Sections: Hero · About · Works / Discography · Achievements · Contact · Footer
- Dark, elegant theme — no external dependencies
- Fully responsive (mobile-first)
- Accessible: semantic HTML5, ARIA labels, keyboard navigation, skip link
- Pure HTML + CSS + vanilla JS — works offline, no build tools required
- Privacy-first: no tracking, no CDN, no real personal data in source

## File Structure

```
/
├── index.html          # Main single-page site
├── css/
│   └── style.css       # All styles (dark theme, responsive)
├── js/
│   └── main.js         # Mobile nav toggle, active link highlight
├── images/             # Add your images here (.gitkeep keeps the folder in git)
├── CNAME               # Custom domain: ellimia.net
├── robots.txt          # Disallows AI training crawlers
├── .gitignore
└── README.md
```

## Getting Started

No build step required. Simply open `index.html` in a browser, or commit to the `main`
branch of this GitHub repository — GitHub Pages will serve it automatically.

### Running Locally
You can use any local server to preview the site:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## Customisation

| What to change | Where |
|---|---|
| Accent colour | `css/style.css` — `--accent` variable |
| Background colour | `css/style.css` — `--bg` variable |
| Font stack | `css/style.css` — `body { font-family: … }` |
| Nav links | `index.html` — `<ul id="nav-links">` |
| Footer copyright | `index.html` — `<footer>` |

## Privacy & Robots

`robots.txt` disallows the following AI training crawlers:
`GPTBot`, `CCBot`, `Google-Extended`, `ChatGPT-User`, `anthropic-ai`, `Claude-Web`

## License

All rights reserved. © 2026 elli mia.
