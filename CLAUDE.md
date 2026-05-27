# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Dev Server

```bash
cd "/Users/andreymiranda/Library/CloudStorage/GoogleDrive-kassulinha38@gmail.com/Meu Drive/Arquivos Pessoais/Site Pessoal"
python3 -m http.server 3001
```

`npm run dev` exists but `serve` does not resolve to a global binary — use Python's http.server instead. The `.claude/launch.json` entry for "portfolio" is kept for reference but unreliable.

## Stack

No build tool. Pure HTML/CSS/JS, loaded via CDN:
- **GSAP 3 + ScrollTrigger** — all scroll-driven animations and counter tweens
- **Google Fonts** — `Inter` (body) + `Space Grotesk` (display/headings)

Three files own everything:
| File | Responsibility |
|---|---|
| `index.html` | Static structure, `data-i18n` attributes, asset references |
| `portfolio.js` | All logic: data, i18n, render functions, GSAP, lightbox, cursor, form |
| `portfolio.css` | All styles (single-file, minified single-line blocks per section) |

## Architecture: portfolio.js

Boot order (DOMContentLoaded):
1. `renderProjects()` → `renderProcess()` → `renderBlog()` — inject dynamic HTML into static containers
2. `applyLang(currentLang)` — fills `[data-i18n]`, `[data-i18n-html]`, `[data-i18n-ph]` attributes and re-calls render functions
3. Init modules: canvas, cursor, lightbox, mobile menu, lang toggle, header, anchors, contact form, work card interactions, tweaks panel
4. `runLoader()` — plays intro animation, then calls `initAnimations()` on complete

**Key data structures:**
- `LANG.pt` / `LANG.en` — flat key/value objects for all UI strings. Keys like `'hero.line1'`, `'about.p2html'`. HTML values use `data-i18n-html` in the template; plain text uses `data-i18n`.
- `PROJECTS[]` — array of project objects: `{ num, wide, gallery, aspect, slideDir, cat:{pt,en}, title, cover, images[], desc:{pt,en}, url }`. `wide:true` adds `work-card--wide` (spans 2 cols). `gallery:true` renders triptych layout. `slideDir:'v'` makes the lightbox animate vertically.
- `STEPS[]` — no longer rendered (replaced by `process.body` HTML key in LANG). Array kept for reference.
- `POSTS[]` — blog placeholder data.

**i18n flow:** `t(key)` reads from `LANG[currentLang]`. `applyLang()` sets `currentLang`, updates DOM attributes, re-renders dynamic sections. Language is persisted in `localStorage('am_lang')`.

**Animation pattern:** Most scroll animations use `ScrollTrigger.create({ once: true, onEnter: () => gsap.fromTo(...) })`. This avoids elements getting stuck at `opacity:0` if ScrollTrigger misfires. Avoid using `gsap.from()` with `scrollTrigger` for elements that must always be visible.

**Cursor:** Custom cursor (dot + lagged ring) with dark/light mode detection based on which section the pointer is over. `bindCursorHover(els)` adds the expand class on hover — must be called after any `innerHTML` reset that introduces new interactive elements.

**Lightbox:** `openLightbox(projIdx, imgIdx)` — rebuilds media area on each open. `lbGoToImage(idx)` does GSAP slide transitions without rebuilding. `navLightbox(dir)` cycles between projects. Keyboard: Escape closes; arrow keys navigate images within project, then spill to adjacent project.

**Tweaks panel:** Hidden panel for live-tuning `gridSpeed`, `gridOpacity`, `cursorLag`. Activated via `postMessage({ type: '__activate_edit_mode' })`. Values stored in `TWEAKS_DEFAULTS` at top of file between `/*EDITMODE-BEGIN*/` and `/*EDITMODE-END*/` markers.

## index.html Conventions

- Sections use `id` attributes matching nav anchors: `#trabalhos`, `#processo`, `#sobre`, `#blog`, `#contato`
- Dynamic content slots: `id="workGrid"`, `id="processSteps"`, `id="blogGrid"`
- Lightbox markup is static in HTML (`id="lightbox"`, `id="lbBackdrop"`); content injected by `openLightbox()`
- `data-i18n="key"` → `el.textContent`; `data-i18n-html="key"` → `el.innerHTML`; `data-i18n-ph="key"` → `el.placeholder`

## Editing Copy

All bilingual text lives in `LANG.pt` and `LANG.en` in `portfolio.js`. Reference `COPY.md` for the content inventory. Project descriptions are in `PROJECTS[].desc.{pt,en}`.

## Assets

```
assets/
  profile/      — hero cutout + about photo
  projects/     — per-project subfolders (Motorsports/, Xtadium/, Emirates/, PSG/, Iron Dames Motorsport/, Iron Dames Equestrian/, Uae Tour/)
  clients/      — 13 client logos (PNG with transparency)
```
