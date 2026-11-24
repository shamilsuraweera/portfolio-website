# Portfolio

Static portfolio site (HTML/CSS/JS, no build step) for GitHub Pages.

## Customize
- Edit content in `index.html` (about, skills, projects, experience, contact).
- Colors live in the CSS variables at the top of `style.css`.

## Adding a project screenshot
Save the image in `assets/projects/` and add this as the first child of the project's `<article class="card">`:

    <figure class="shot"><img src="assets/projects/NAME.png" alt="Screenshot of PROJECT" loading="lazy" /></figure>

## Preview locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Deploy to GitHub Pages
1. Create a repo on GitHub (name it `<username>.github.io` for a root URL).
2. `git remote add origin <repo-url> && git add . && git commit -m "Initial portfolio" && git push -u origin main`
3. Repo → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
