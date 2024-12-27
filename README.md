# Matt's Cheatsheets and Hacks

## Authoring content

Each directory inside `src/content` represents a sheet for a different tool. Markdown files inside these directories are turned into an accordion by turning the first line of the file into the accordion title, while the rest is slotted inside the accordion. Heading levels are adjusted after building the page.

### Creating a new sheet

-   Create a directory in `src/content`.
-   Declare the collection in `src/content/content.config/ts`.
-   Create a new page in `src/pages`.

Headings in markdown files must always be at least 4th level
