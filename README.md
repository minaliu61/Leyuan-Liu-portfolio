# Leyuan Liu — Personal Portfolio & Digital Archive

A bilingual (Chinese / English), responsive static portfolio designed for GitHub Pages.

## Included
- Public portfolio sections: profile, education, internship experience, projects, credentials, skills.
- Chinese / English language toggle.
- Project search and category filters.
- Local media vault for images, videos and PDFs using browser IndexedDB.
- JSON export of the structured profile data.
- Phone number hidden by default.

## Run locally
Open `index.html` in a modern browser. For best results, use a local static server (for example VS Code Live Server).

## Publish with GitHub Pages
1. Create a new GitHub repository, e.g. `leyuan-liu-portfolio`.
2. Upload **all files and folders** in this project to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish and open the provided URL.

## Updating content
Edit `data.js`:
- Add/edit internships in `experiences`.
- Add/edit projects in `projects`.
- Add certificates and awards in `credentials`.
- Update skills in `skills`.
- Set `showPhone: true` only if you intentionally want your phone number publicly visible.

## Important privacy and storage notes
- A GitHub Pages site is public. Do not put private IDs, home addresses, personal documents, or sensitive information in the repository.
- The phone number is hidden by default. Your email is currently displayed.
- Files added through the website's Digital Vault are stored only in the current browser's IndexedDB. They are **not** uploaded to GitHub, shared with visitors, or synced across devices.
- To publicly display selected photos/videos/certificates, add optimized files to the repository's `assets/` directory and reference them from the site. Consider removing metadata from images before publishing.
- This is a static site and does not implement account login or secure private storage. Do not treat the local vault as a secure cloud drive.
- The scholarship item is marked as listed twice based on the supplied information; verify the exact count before publishing.
