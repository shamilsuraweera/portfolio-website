# Portfolio

Static portfolio site (HTML/CSS/JS, no build step) for GitHub Pages.

## Customize
- Edit placeholder text in `index.html` (name, about, skills, projects, experience, contact).
- Add your photo as `assets/profile.jpg` (it hides itself if missing).
- Colors live in the CSS variables at the top of `style.css`.

## Preview locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Deploy to GitHub Pages
1. Create a repo on GitHub (name it `<username>.github.io` for a root URL).
2. `git remote add origin <repo-url> && git add . && git commit -m "Initial portfolio" && git push -u origin main`
3. Repo → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
