# HUSH Timer Documentation

This is the development & testing documentation of [HUSH Timer](https://hushtimer.app/).

## Development

This documentation uses [Fumadocs](https://fumadocs.dev) on Next.js, exported as a static site and deployed to GitHub Pages.

### Install packages

Requires [Bun](https://bun.sh) and Node.js 22 or later. Bun installs packages and runs the scripts; Next.js itself runs on Node.

```bash
bun install
```

### Run the docs locally

```bash
bun run dev
```

Then open http://localhost:3000.

### Build the static site

```bash
bun run build
```

The site is written to `out/`.

## Writing docs

- Pages are MDX files in `content/docs/`. Each page sets its title in the frontmatter.
- The sidebar order is set by the `meta.json` file in each folder.
- Images go in `public/assets/` and are linked as `/assets/<file>.png`.
- Link to another page by its file path, for example `[Getting Started](./getting-started.mdx)`.

## Contribution

If you want to add/edit this documentation, open a new branch and create a pull request.
