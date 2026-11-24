# Shamil Suraweera — Portfolio

Static portfolio site (HTML, CSS and vanilla JS, no build step), served by GitHub Pages at
https://shamilsuraweera.github.io from the `main` branch.

## Structure
| Path | Purpose |
|---|---|
| `index.html` | All content: about, skills, projects, experience, education, contact, plus SEO meta and JSON-LD |
| `style.css` | Styling. Colours are CSS variables at the top (dark and light themes) |
| `script.js` | Theme toggle, typing effect, scroll effects, project sliders and lightbox |
| `assets/` | Logo, favicon, profile photo, `og-image.png` (social preview) and the résumé PDF |
| `assets/projects/<name>/` | Project screenshots |
| `robots.txt`, `sitemap.xml` | Search engine crawl files |

## Projects section
Each project is one `<article class="card">` row: details on the left (`.info`) and a sliding
screenshot carousel on the right (`.slider`). Projects appear in the order they are written.

To add or change a project, copy an existing card and edit:
- the badge (`Web`, `Mobile`, `ERP`), the title, a short description and three short highlights
- the tech tags and the repository link (delete the `.repo` line if there is none)
- the screenshots, one `<button class="slide web">` per image inside `.track`

```html
<button type="button" class="slide web" aria-label="Enlarge screenshot"><img src="assets/projects/NAME/1.png" alt="NAME screenshot 1" loading="lazy" /></button>
<button type="button" class="slide mobile" aria-label="Enlarge screenshot"><img src="assets/projects/NAME/mobile-1.png" alt="NAME mobile screenshot" loading="lazy" /></button>
```

- Use class `web` for landscape screenshots and `mobile` for portrait phone screenshots.
- Put web screenshots first. Arrows and dots appear automatically when there is more than one slide.
- Clicking a screenshot opens it full size.
- Keep descriptions short. Rows are a fixed height (480px on wide screens), so very long text is clipped.
- A card with no screenshots yet uses `<div class="slide empty"><span>Screenshots coming soon</span></div>`
  (Microsoft Dynamics 365 uses this until its images are added to `assets/projects/ms-d-365/`).

Screenshots of client work should have names, prices and logos blurred or replaced with demo data.

## Résumé
Replace `assets/Shamil_Suraweera_Resume.pdf` with the new file under the same name. The hero and
contact download buttons point to it.

## Preview locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Deploy
Push to `main`. GitHub Pages (Settings → Pages → Deploy from branch → `main` / root) republishes within a minute.

## SEO checklist
Done in the repo: title and description, canonical URL, Open Graph and Twitter cards with
`assets/og-image.png`, Person structured data (JSON-LD), `robots.txt`, `sitemap.xml`, image alt text.
Remember to update `lastmod` in `sitemap.xml` after significant changes.

Manual steps (outside the repo):
1. Google Search Console: add the URL prefix property `https://shamilsuraweera.github.io/`, verify it, then submit `sitemap.xml`.
2. Bing Webmaster Tools: import the site from Search Console and submit the sitemap.
3. GitHub repository: set the Website field to the site URL, add a short description and topics (for example `portfolio`, `erp`, `dynamics-365`, `odoo`).
4. Link to the site from the GitHub profile, LinkedIn (Contact info → Website) and the résumé.
5. Check the social preview with the LinkedIn Post Inspector and the Facebook Sharing Debugger.
