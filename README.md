# Notio Technology — Astro site

A red/black/white SAP-consulting site for Notio Technology, built in Astro
with content collections so copy and blog posts live in markdown instead of
being hardcoded in components.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where content lives

- `src/content/blog/*.md` — blog posts (title, description, pubDate, tags in
  frontmatter; body is the post).
- `src/content/services/*.md` — the three service pillars on the homepage
  (title, summary, icon, order, CTA text/link).
- `src/content/testimonials/*.md` — optional client quotes, empty for now.
- `src/content/site/*.md` — singleton copy blocks: `hero.md`, `intro.md`,
  `confidence.md`, `cta.md`. Each file's frontmatter holds the heading/eyebrow
  fields; the markdown body is the paragraph copy.

Because everything text-heavy is markdown, this same component set can be
reused for another, similarly-structured site: swap the files under
`src/content/`, adjust the palette in `src/styles/global.css`, and the pages
pick up the new content automatically.

## Structure

```
src/
  components/   Header, Footer, Hero, ServiceCard, BlogCard
  content/      the markdown content collections described above
  layouts/      BaseLayout.astro (head, header, footer, scroll-reveal script)
  pages/        index.astro, blog/index.astro, blog/[slug].astro, contact.astro
  styles/       global.css (color tokens, type, shared section/card styles)
```

## Notes

- The color scheme (red `#E90008` / black / white) and layout rhythm are
  matched to the reference site's visual identity; all copy, the wordmark,
  and the hero graphic are original to Notio, not copied assets.
- The contact form is static (no backend) — it just shows a confirmation
  message on submit. Wire `src/pages/contact.astro` up to a form service or
  your own API to make it live.
- `src/content/testimonials` is empty by default; add markdown files there
  and a testimonials section can be wired up the same way services are.
