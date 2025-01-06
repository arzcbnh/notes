import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://arzcbnh.github.io",
    base: import.meta.env.DEV ? "" : "/notes",
});
