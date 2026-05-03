# SEO Audit Context

**Last Updated:** 2026-05-03 16:30:00

This file tracks the SEO status and tasks for every page in the portfolio.

## Audit Completion (Final)
- [x] **Trailing Slashes**: Added to all internal links and canonical URLs site-wide.
- [x] **Internal Linking**: Verified consistency and fixed issues (especially in /about and location pages).
- [x] **FAQ Hydration**: Verified `client:visible` added to all page modules.
- [x] **Astro Config**: Enforced `trailingSlash: 'always'` and `output: 'static'`.
- [x] **Sitemap Enhanced**: Added `lastmod`, `priority`, and `changefreq` via sitemap `serialize()`.
- [x] **robots.txt Fixed**: Added explicit `Allow: /`, removed irrelevant `/_next/` and `/.git/` rules, added AI bot allowances (GPTBot, PerplexityBot, ClaudeBot, ChatGPT-User), added `Disallow` for 404 URLs.
- [x] **404 URLs Fixed**: `/resume` → redirect page (noindex, meta-refresh → /contact/). `/ANAGH-K-R-MERN-STACK-DEVELOPER.pdf` → disallowed in robots.txt.
- [x] **Empty Routes Deleted**: Removed `/src/pages/kerala/` and `/src/pages/ml/` (empty dynamic route directories that served no pages).
- [x] **Flutter Page Meta Desc Fixed**: 119 chars → 158 chars with CTA.
- [x] **Home Page Title Fixed**: 64 chars → 60 chars (within Google's display limit).
- [x] **Keywords Cleaned**: Removed flutter training, irrelevant brand names, and low-intent queries.
- [x] **llms.txt Updated**: Removed stale /kerala/ and /ml/ route references.

## Global SEO Tasks
- [x] Ensure `sitemap.xml` exists and is up to date. (Handled by Astro sitemap integration with lastmod/priority)
- [x] Ensure `robots.txt` is configured properly.
- [x] Check for mixed content errors (HTTPS). (Verified in BaseLayout)
- [x] Verify favicon presence and proper sizing. (Linked in BaseLayout)
- [/] Cloudflare optimization: Enable Auto Minify, Brotli, and Rocket Loader. (To be verified by user in Cloudflare dashboard)
- [x] Implement/Verify JSON-LD Organization schema on home page.

## "Crawled – Not Indexed" Status (GSC) — RESOLVED / EXPLAINED

These 3 URLs appeared in GSC Coverage → "Crawled - currently not indexed":

| URL | Status | Action |
|-----|--------|--------|
| `https://www.anaghkr.in/sitemap.xml` | ✅ **Normal** — utility file, Google won't index it | No action needed |
| `https://www.anaghkr.in/robots.txt` | ✅ **Normal** — utility file, Google won't index it | No action needed |
| `https://investment-backend.anaghkr.in/` | ⚠️ **Different subdomain** — out of scope for this repo | Fix on that server separately |

> robots.txt and sitemap.xml being "crawled not indexed" is **expected behavior**. Google crawls them to understand the site but never indexes them as search results. No fix needed.

## "Not Found (404)" — FIXED

| URL | Fix Applied |
|-----|------------|
| `https://www.anaghkr.in/resume` | Created `/src/pages/resume/index.astro` → noindex meta-refresh → `/contact/` |
| `https://www.anaghkr.in/ANAGH-K-R-MERN-STACK-DEVELOPER.pdf` | Added `Disallow` in `robots.txt` to stop crawling |

> **Note (Cloudflare setup):** Since the site is on GitHub Pages + Cloudflare CDN proxy (not Cloudflare Pages), the `_redirects` file is **not processed**. The resume redirect uses Astro's static page with `<meta http-equiv="refresh">` instead.

## "Pages with Redirect" — CONTEXT

28 redirect pages in GSC are caused by Cloudflare/GitHub Pages automatically redirecting non-trailing-slash URLs to trailing-slash URLs (e.g., `/flutter-app-development` → `/flutter-app-development/`). These are legitimate canonical redirects enforced by `trailingSlash: 'always'` in `astro.config.mjs`.

Google follows these redirects correctly and does not penalize them since they are consistent and point to canonical URLs. **No action needed**, but they will naturally resolve as Google re-crawls and consolidates.

## Keyword Strategy (Updated 2026-05-03)

### Removed Keywords
- `flutter training calicut` / `flutter training in calicut` (user does not offer training)
- `anagh` / `anagh technologies` (not service keywords)
- `mac file transfer to android` / `offline sharing` / `dam control` (product, not service)
- `mern stack multitenant ecommerce tutorial 2026` (blog only)
- `react kr latest` (unclear intent)
- `cloudflare` / `sanity cms` (tool names, not buyer intent)
- `storedada e commerce solution ernakulam` (competitor brand)
- `dropshipping in kerala` / `kerala dropshipping` (buyer/seller intent, not client)
- `ar app development services ernakulam` (not offered)
- `web designer near me` / `app developer near me` (too generic)
- `ios developer kerala` / `android developer kerala` (covered under flutter/mobile)

### Focus Keywords (High-Intent)
1. `flutter developer kerala` ← #1 protect
2. `freelance web developer kerala`
3. `wordpress developer in calicut`
4. `ecommerce development company in kerala`
5. `flutter app developers in kochi`
6. `shopify developer in kerala`
7. `woocommerce developer in kerala`
8. `app development company in kerala`
9. `web development in thrissur`
10. `custom web development in kerala`

## Page-Specific Checklist
Each page must be checked against the following criteria:
- [x] **FAQ Section**: Working correctly.
- [x] **Title**: 50–60 chars, unique.
- [x] **Meta Description**: 140–160 chars.
- [x] **Duplicate Content**: No duplicate titles/descriptions across pages.
- [x] **URL Structure**: Clean, hyphens only, lowercase.
- [x] **Heading Structure**: One `<h1>`, proper hierarchy (h1 -> h2 -> h3), natural keywords.
- [x] **Keyword Optimization**: Primary keyword in Title, H1, first 100 words.
- [x] **Content Quality**: ~300 words, readable, short paragraphs.
- [x] **Internal Linking**: 2–3 internal links per page with meaningful anchor text.
- [x] **Images**: Alt text present, <200KB, WebP format.
- [x] **Indexing**: No `noindex` tag, canonical link present.
- [x] **Mobile Friendly**: Responsive design, no horizontal scroll.
- [x] **Speed**: Load < 3s, lazy loading, minified CSS/JS.
- [x] **Core Web Vitals**: LCP < 2.5s, CLS < 0.1, INP low.
- [x] **Schema**: JSON-LD present.
- [x] **Open Graph**: `og:title`, `og:description`, `og:image` present.

---

## Page Status Tracking

### Home
- [x] src/components/pages/home — Title fixed (60 chars), keywords cleaned

### About
- [x] src/components/pages/about

### Contact
- [x] src/components/pages/contact

### Services
- [x] src/components/pages/services
- [x] src/components/pages/web-development
- [x] src/components/pages/wordpress-development
- [x] src/components/pages/ecommerce-development
- [x] src/components/pages/mobile-app-development
- [x] src/components/pages/react-development
- [x] src/components/pages/nodejs-development
- [x] src/components/pages/nextjs-development
- [x] src/components/pages/flutter-app-development — Desc fixed (158 chars), keywords cleaned
- [x] src/components/pages/mern-stack-development

### Specialized Development
- [x] src/components/pages/chat-app-development
- [x] src/components/pages/dating-app-development
- [x] src/components/pages/shopify-store-development
- [x] src/components/pages/instagram-store-development
- [x] src/components/pages/dropshipping-website-development
- [x] src/components/pages/clothing-ecommerce-website-development
- [x] src/components/pages/electronics-ecommerce-website-development
- [x] src/components/pages/shoe-store-website-development

### Blog
- [x] src/components/pages/blog
- [x] src/components/pages/blog/[slug]

### Utility / Redirect Pages
- [x] src/pages/resume — noindex meta-refresh → /contact/ (fixes GSC 404)

### Locations
- [x] src/components/pages/locations
- [x] src/components/pages/locations/kochi
- [x] src/components/pages/locations/calicut
- [x] src/components/pages/locations/kozhikode
- [x] src/components/pages/locations/ernakulam
- [x] src/components/pages/locations/thiruvananthapuram
- [x] src/components/pages/locations/kollam
- [x] src/components/pages/locations/palakkad
- [x] src/components/pages/locations/thrissur
- [x] src/components/pages/locations/kannur
- [x] src/components/pages/locations/kasaragod
- [x] src/components/pages/locations/kanhangad

## Recommended Next Steps (Not Yet Implemented)
- [ ] Add `preload` for LCP hero image in `BaseLayout.astro`
- [ ] Add breadcrumb JSON-LD schema to service pages
- [ ] Create flutter city landing pages: /locations/kochi/flutter-developer/, /locations/calicut/flutter-developer/
- [ ] Write blog post: "Flutter Developer Kerala 2026 — How to Choose"
- [ ] Add sitemap ping step to GitHub Actions deploy.yml
- [ ] Ping Google Search Console to resubmit sitemap after this deploy
- [ ] Mark resolved 404 URLs in GSC: use "Validate Fix" after deploy
