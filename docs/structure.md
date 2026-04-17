# Project Structure

## Architecture Overview

The source code is primarily housed in the `src/` directory following standard Astro conventions combined with React component modularity.

### Key Directories
- **`src/pages/`**: Contains Astro files that map directly to the routing structure. Key sub-routes include `/locations` (city pages), `/blog`, and various service-level endpoints.
- **`src/layouts/`**: Contains wrapper layouts (e.g., `BaseLayout.astro`) which handle global head tags, SEO metadata, and cross-page structural elements.
- **`src/components/`**: Houses all isolated UI components, largely built with React.
  - `home/`: Components used on the index page (`whatweoffer.js`).
  - `footer/`, `navbar/`: Global navigation components.
  - `pages/`: Specialized page-level components or logical splits for larger route files, notably holding `locations/Page.js` and `services/ServicePageTemplate.js` which manage structured data representations.
- **`src/styles/`**: Global stylesheets, usually for Tailwind base imports (`index.css`).

### SEO & Routing
- New pages should be added to `src/pages` to automatically route.
- Deep linking is handled globally in the `footer/footer.js` to ensure "orphan pages" are visible to Search Engine crawlers.
