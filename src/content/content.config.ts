import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

function defineDefaultCollection(name: string) {
    const loader = glob({ pattern: "**/*.md", base: "src/content/" + name });
    const schema = z.object({
        title: z.string(),
        position: z.number(),
        category: reference("categories"),
    });

    return defineCollection({ loader, schema });
}

const categories = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "src/content/categories" }),
    schema: z.object({
        title: z.string(),
    }),
});

const example = defineDefaultCollection("example");
const java = defineDefaultCollection("java");
const typescript = defineDefaultCollection("typescript");

export const collections = { categories, example, java, typescript };
