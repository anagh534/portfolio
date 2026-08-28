# Site-wide SEO Audit Context
Last Updated: 2026-08-28 22:47:00

This document tracks SEO maintenance and updates for the portfolio website.

## Latest Updates
- **2026-08-28**: Updated Node.js page to target "node.js development company in kochi" and "cochin" based on Search Console drop/poor stats.
  - Added "Node.js development company in Kochi / Cochin" to `keywords`, `description`, `title`, and main page description in `src/components/pages/nodejs-development/Page.js`.
  - Framed the service as a "premium alternative to hiring a full Node.js development company" to match user intent for "company" without misleading.
  - Added a specific FAQ addressing "company vs freelancer" in Kochi.
- **2026-07-26**: Executed priority fixes, NRI/Gulf expansion, and thin location page expansions from the comprehensive SEO guide:
  - **Unified Location Base**: Replaced all specific city developer base references (e.g., "based in Kasaragod", "based in Kozhikode") across `hero.js`, `about.js`, `services/Page.js`, and `about/Page.js` to consistently state **"based in Kerala"**.
  - **Location Page Expansions**: Upgraded `src/components/locations/LocationTemplate.js` to support an `extraContent` prop for deep local SEO articles.
  - Expanded **Kozhikode (/locations/kozhikode/)** with ~420 words of keyword-rich content highlighting Cyberpark, HiLite Business Park, SM Street, MERN/Next.js vs WordPress, and Flutter app demand.
  - Expanded **Coimbatore (/locations/coimbatore/)** with ~430 words of keyword-rich content highlighting Peelamedu, RS Puram, Saravanampatti IT corridor, manufacturing/textile ERP dashboards, and Tamil/English communication.
  - **New Page Added**: Created `src/pages/hire-kerala-developer-remotely/index.astro` and `src/components/pages/hire-kerala-developer-remotely/Page.js` targeting "Kerala developer for UAE business", "hire Indian Flutter developer remotely", and "Malayalam speaking developer abroad".
  - Interlinked the new Remote / NRI Dev page across `navbar.js`, `footer.js`, and `services/Page.js` (cleaning up duplicate titles).
  - Fixed "custom custom" typos across `src/components/home/about.js`, `src/components/home/skills.js`, and `src/components/pages/services/Page.js`.
  - Updated Homepage H1 (`src/components/home/hero.js`) and description to explicitly highlight **Kerala** base, MERN stack, Coimbatore, and NRI / Gulf remote client targeting.
- **2026-07-24**: Added extra SEO-rich content (`extraContent` prop) to the following pages to improve ranking for core keywords:
  - `src/components/pages/mobile-app-development/Page.js`: Optimized for "mobile app developer in kerala" & "app developer in kerala". Added content around native-like apps, local market dynamics, and post-launch support.
  - `src/components/pages/web-development/Page.js`: Optimized for "website developer in kerala" & "professional web developer in kerala". Added content emphasizing custom coding vs templates, Core Web Vitals, and responsive design.
  - `src/components/pages/flutter-app-development/Page.js`: Maintained targeting for "flutter developer kerala". Added rich content about performance (60fps), single codebase cost benefits, and advanced Firebase/hardware integrations without keyword stuffing to preserve current ranking.
  - **New Page Added**: Created `src/pages/ecommerce-development/index.astro` and its component `src/components/pages/ecommerce-development/Page.js` to target "ecommerce website developer kerala".
  - **New Page Added**: Created `src/pages/web-design/index.astro` and its component `src/components/pages/web-design/Page.js` to target "web design service kerala", focusing on "Figma/PSD to Website" and "AI Design to Code".

## Keyword Targets
- Primary: 
  - `flutter developer kerala`
  - `mobile app developer in kerala`
  - `website developer in kerala`
  - `node.js development company in kochi`
- Secondary: 
  - `freelance web developer in kerala`
  - `app developer kochi`
  - `node.js development company in cochin`

## Technical Checklist
- [x] Trailing Slashes active (`trailingSlash: 'always'`)
- [x] Canonical URLs match absolute URLs with trailing slash
- [x] Meta titles 50-60 chars
- [x] Meta descriptions 140-160 chars
- [x] Local SEO structured data (Service Schema with areas served)
- [x] Client directives used on interactive components
- [x] Single H1 per page
