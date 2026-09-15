import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts — one markdown file per post in src/content/blog/*.md
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Notio Technology'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Service pillars shown on the homepage — one file per service.
// Reorder or swap these out to reuse the layout for a different site.
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    icon: z.enum(['strategy', 'implementation', 'support']).default('strategy'),
    order: z.number().default(0),
    ctaLabel: z.string().default('Learn more'),
    ctaHref: z.string().default('/contact'),
  }),
});

// Client / partner testimonials — optional, empty by default.
const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    order: z.number().default(0),
  }),
});

// Singleton copy blocks (hero, intro, CTA banner, etc). Each file's slug is
// the block's id (e.g. hero.md, intro.md) and the body holds the long-form
// paragraph copy for that block, so this whole folder can be dropped into
// another site in this family and only the frontmatter/body edited.
const site = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/site' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    eyebrow: z.string().optional(),
  }),
});

// Generic content pages — one file per nav destination (the mega-menu links
// under Services / Technologies / Business Capability Area / News &
// Resources / About). Filename = URL slug.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    section: z.string(),
    summary: z.string(),
  }),
});

export const collections = { blog, services, testimonials, site, pages };
