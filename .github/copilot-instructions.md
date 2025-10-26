<!-- .github/copilot-instructions.md -->
# Copilot / AI agent instructions — Create_site

This repository is a minimal static website. The guidance below is intentionally narrow and actionable so an AI coding agent can be productive immediately.

Key facts
- Single-page static site: the only discovered source file is `index.html` at the repository root.
- No build system, package manifest, tests, or server code were found during the repository scan.

Big-picture architecture (what you'll see)
- Static HTML delivered as a single file. Expect that changes are made directly to `index.html` or by adding assets (CSS/JS/images) at the repo root or an `assets/` directory.
- No backend, no APIs, and no CI detected. Integrations (if later added) will likely be external CDN links or plain fetch() calls from client-side JS.

Developer workflows (how to run, debug, and validate locally)
- Open `index.html` directly in a browser for quick checks.
- Serve the directory to reproduce a realistic HTTP environment (PowerShell examples):

```powershell
# Python (if installed)
python -m http.server 8000

# Node (if Node/npm installed)
npx http-server -p 8000
```

- Use the browser DevTools (Console / Network / Elements) for debugging client-side issues.

Project-specific conventions and patterns
- Keep site content and metadata inside `index.html` (title, meta, visible content). When adding assets, prefer an `assets/` or `static/` folder at repo root.
- Filenames and paths are simple and lowercase in this repository; match existing style when adding files (e.g., `assets/styles.css`).
- When modifying `index.html`, preserve any existing textual content unless explicitly replacing it — this repo is tiny and likely hand-edited.

Examples from this repository
- Current `index.html` is a minimal HTML file containing raw content (example shows an author name string). When tasked to update title or add a header, edit `index.html` directly. Example edit tasks agents may receive:
  - Add a proper `<head><title>...</title></head>` section to `index.html`.
  - Create `assets/styles.css` and link it from `index.html`.

Integration points & external dependencies
- No discovered package manifests (no `package.json`, `requirements.txt`, etc.). If adding dependencies, also add the appropriate manifest and document install/run steps in `README.md`.

How AI agents should behave here
- Make minimal, well-scoped edits: change `index.html` or add an `assets/` folder. Avoid introducing large frameworks without a user request.
- If you add a server or build step, update `README.md` and include install/run commands.
- When uncertain (e.g., desired content, branding, or hosting), ask the user a single clarifying question before making large changes.

Commit & PR suggestions
- Keep commits focused and small (single purpose). Example commit messages: `add: site title and basic head` or `chore: add assets/styles.css and link from index.html`.

If you need more context
- Ask the user to confirm intended site purpose (personal page, demo, landing page), any preferred CSS framework, and whether they want a local dev server or CI.

If you find additional files (README, package manifests, or server code) later, re-scan the repo and update this file to reflect new workflows.

---
Please review and tell me if you'd like this to assume a particular framework (e.g., React/Vite) or if there are undisclosed build steps to include.
