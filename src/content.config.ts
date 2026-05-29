import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const wiki  = defineCollection({
    loader: glob({base: './content/wiki', pattern: '**/*.{md,mdx}'}),
    schema: z.object({
        title: z.string(),
        version: z.string().optional(),
        slug: z.string().optional()
    })
})

export const collections = { wiki };
