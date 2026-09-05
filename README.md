# Savan Ghadiya — Portfolio Site

A fully animated, multi-page portfolio for Savan Ghadiya, creative video & photo editor. Dark + neon theme, built as plain HTML/CSS/JS — no build step, no dependencies, deploys straight to GitHub Pages.

## Pages

- `index.html` — Home, with a 3D cursor-tilt poster stack
- `portfolio.html` — Gallery: real posters + "coming soon" slots, click any poster to view full-size
- `who-i-am.html` — Bio
- `my-goal.html` — Goals, shown as a milestone timeline
- `skills.html` — Skill bars + tools used
- `socials.html` — Instagram-forward links page
- `contact.html` — Contact form (demo only — see below)

`who-i-am.html`, `my-goal.html`, and `skills.html` share a small pill sub-navigation at the top of each so visitors can move between them without going back to a main menu.

## Images

Real posters and logo live in `assets/img/`:
- `logo-sg.png` — your SG logo (used in nav, socials page, and as the favicon source)
- `poster-silage-full.jpg` / `poster-silage-thumb.jpg` — Vidhi Makai Silage poster
- `poster-rakshabandhan-full.jpg` / `poster-rakshabandhan-thumb.jpg` — Raksha Bandhan 2026 poster

Each poster has a `-thumb` version (used in grids, small + fast-loading) and a `-full` version (shown when clicked, in the lightbox popup). When you add new work, follow the same pattern so the site stays fast — a phone-camera photo straight off your device can be 4-8MB, which will make the site slow to load if used directly.

**Quick way to resize a new image before adding it** (using an online tool like squoosh.app, or ImageMagick if you have it locally):
- Thumb: resize to ~500x625px, JPG, ~80% quality
- Full: resize to max 1200px on the long edge, JPG, ~85% quality

## Adding a new portfolio piece

1. Add your two resized image files to `assets/img/`
2. In `portfolio.html`, replace one of the `tile--soon` "coming soon" blocks with a real tile — copy the pattern from an existing poster tile (image + `data-lightbox` attributes + overlay text)
3. Optionally also add it to the "Recent work" preview on `index.html`

## Before you go fully live, double check:

- [ ] The TikTok/Discord tiles were removed from Socials since you didn't provide those — add them back in `socials.html` if you want them
- [ ] Swap the "coming soon" tiles in `portfolio.html` for real work as you finish more pieces
- [ ] Wire up `contact.html`'s form to something real (see below)

## Making the contact form actually work

Right now the form just shows a message on submit — it doesn't send anywhere.

1. **Formspree** (formspree.io) — sign up free, add `action="https://formspree.io/f/yourFormID"` and `method="POST"` to the `<form>` tag in `contact.html`. Done.
2. **EmailJS** — good if you want it to feel more custom, slightly more setup.

## Deploying to GitHub Pages

1. Push this folder's contents to your repo:
   ```
   git clone <your-empty-repo-url>
   cd <your-repo-name>
   # copy all these files into this folder
   git add .
   git commit -m "First site build"
   git push
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under "Build and deployment," set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. Your site will be live at `https://yourusername.github.io/your-repo-name/` within a minute or two.

## Adding more pages later

Copy any existing page as a starting point, keep the `<nav>` and `<footer>` blocks identical, add a new `<li>` to `.nav__links` in **every** page if you add a new one, and link `assets/style.css` + `assets/nav.js` the same way.
