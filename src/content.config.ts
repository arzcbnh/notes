import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const categories = defineCollection({
    loader: glob({ pattern: "**/[^_]*.json", base: "./src/collections/categories" }),
    schema: z.array(
        z.object({
            title: z.string(),
            slug: z.string(),
        })
    ),
});

const java = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/collections/java" }),
    schema: z.object({
        title: z.string(),
        category: z.string(),
        position: z.number(),
    }),
});

// function defineCollection(name: string) {
//     const loader = glob({ pattern: "**/*.md", base: "src/content/" + name });
//     const schema = z.object({
//         title: z.string(),
//         position: z.number(),
//         category: reference("categories"),
//     });
//
//     return defineCollection({ loader, schema });
// }
//
// const categories = defineCollection({
//     loader: glob({ pattern: "**/*.json", base: "src/content/categories" }),
//     schema: z.object({
//         title: z.string(),
//     }),
// });

// const example = defineDefaultCollection("example");
// const java = defineDefaultCollection("java");
// const typescript = defineDefaultCollection("typescript");

export const collections = { categories, java };
