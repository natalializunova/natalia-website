import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    imageAlt: z.string(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { blog };
