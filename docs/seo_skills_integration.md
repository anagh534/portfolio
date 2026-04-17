# Integration with Existing Workflow Skills

This project leverages automated AI reasoning workflows and installed skills. Below is the guide on how to direct AI agents within this workspace to utilize custom skills for SEO improvements.

## 1. Skill: `seo`
- **When to Use**: Prompt the AI to "Check my SEO" or "Optimize for search".
- **Action**: The AI should evaluate global `<head>` tags, update `BaseLayout.astro`, review internal linking structures (like ensuring no orphan pages), and fix any XML sitemap issues.

## 2. Skill: `seo-geo` (Generative Engine Optimization)
- **When to Use**: Prompt the AI to "Optimize for AI search engines" or "Improve JSON-LD".
- **Action**: The AI should target individual service pages (e.g., `src/components/services/ServicePageTemplate.js`) and modify structured data. It will ensure definitions and entity contexts are robust so LLMs (like ChatGPT or Google AI Overviews) can easily extract and cite the portfolio as an authoritative source.

## 3. Skill: `seo-content-writer`
- **When to Use**: Prompt the AI to "Write a blog post about X" or "Create SEO content".
- **Action**: The AI will write highly optimized articles embedding CORE-EEAT guidelines. Apply this when generating new content for the `src/pages/blog/` directory or expanding copy on targeted `/locations/*` pages.
