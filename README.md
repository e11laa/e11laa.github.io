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

No build step required. Simply open `index.html` in a browser, or push to the `main`
branch of this GitHub repository — GitHub Pages will serve it automatically.

### Replace Placeholder Content

All placeholder text is marked with `[square brackets]` for easy find-and-replace:

1. **About** — Update the biography paragraphs in `#about`
2. **Works** — Replace card titles, years, and descriptions; add real cover images to
   `images/` and update the `<img>` tags
3. **Achievements** — Fill in real career milestones and dates
4. **Contact** — Replace `hello@example.com` and the `href="#"` social links with real URLs
5. **Hero tagline** — Update the tagline in `#hero`
6. **Meta tags** — Update `<meta name="description">` and Open Graph tags in `<head>`

### Adding a Profile Photo

1. Place your photo in `images/profile.jpg`
2. In `index.html`, find the `about-image-placeholder` div and replace it with:
   ```html
   <img src="images/profile.jpg" alt="elli mia — portrait photo" />
   ```

### Adding Album Cover Art

For each work card, replace the SVG placeholder with:
```html
<img src="images/cover-1.jpg" alt="[Album Title] cover art" />
```

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
