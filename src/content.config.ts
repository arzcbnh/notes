import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const java = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/collections/java" }),
    schema: z.object({
        title: z.string(),
        category: z.string(),
        position: z.number(),
    }),
});

const typescript = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/collections/typescript" }),
    schema: z.object({
        title: z.string(),
        position: z.number(),
    }),
});

// prettier-ignore
export const collections = {
    java,
    typescript,
};
