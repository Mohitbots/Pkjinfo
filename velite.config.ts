import { defineConfig, defineCollection, s } from 'velite';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import readingTime from 'reading-time';

const computedFields = <T extends { body: string }>(data: T) => ({
  readingTime: readingTime(data.body).text,
  wordCount: data.body.split(/\s+/gu).length,
});

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      lastUpdated: s.isodate().optional(),
      author: s.string().default('Anonymous'),
      image: s.string().optional(),
      tags: s.array(s.string()).optional(),
      category: s.string().optional(),
      featured: s.boolean().default(false),
      draft: s.boolean().default(false),
      body: s.markdown(),
    })
    .transform((data) => ({ ...data, ...computedFields(data) })),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
