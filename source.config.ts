import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema.extend({
      // Set `sidebar: false` in frontmatter to hide the docs nav sidebar on that page.
      sidebar: z.boolean().optional(),
      // Set `tocEmbed` to a LinkedIn post embed URL to render it under the "On this page" TOC.
      tocEmbed: z.string().url().optional(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // Enable h4 (####) in the Table of Contents
    remarkHeadingOptions: {},
  },
});
