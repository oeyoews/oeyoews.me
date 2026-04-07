import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMdxRemoveExpressions from 'remark-mdx-remove-expressions';
import type { MDXRemoteOptions } from 'next-mdx-remote-client/rsc';

export const mdxRemoteOptions: MDXRemoteOptions = {
  parseFrontmatter: true,
  disableImports: true,
  disableExports: true,
  mdxOptions: {
    remarkPlugins: [
      remarkGfm,
      [remarkMdxRemoveExpressions, { onlyDangerousExpressions: true }]
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'append', properties: { className: ['anchor'] } }]
    ]
  }
};
