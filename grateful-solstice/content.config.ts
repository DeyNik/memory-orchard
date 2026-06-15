// src/content.config.ts
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- New in Astro v6

const notesCollection = defineCollection({
  // Tell Astro to look inside src/content/notes/ for any .md files
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  'notes': notesCollection,
};