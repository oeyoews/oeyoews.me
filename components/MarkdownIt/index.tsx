import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor';
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts';
import 'markdown-it-github-alerts/styles/github-base.css';
import 'markdown-it-github-alerts/styles/github-colors-dark-media.css';
import 'markdown-it-github-alerts/styles/github-colors-light.css';
// @ts-ignore
import MarkdownItCheckbox from 'markdown-it-task-lists';
// @ts-ignore
const MarkdownItPangu = require('markdown-it-pangu');
const MarkdownItToc = require('markdown-it-task-lists');
const MarkdownItAbbr = require('markdown-it-abbr');
const MarkdownItFootnote = require('markdown-it-footnote');
import config from '~config';

// TIPS: 如果不依赖于文件名字，可以借助 markdown-it-meta plugin, 其实主要代码都一致

const options = {
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  langPrefix: 'language-',
  // @ts-ignore
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="not-prose"><code class="hljs">' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          '</code></pre>'
        );
      } catch (__) {}
    }
    return (
      '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>'
    );
  }
};

const md: MarkdownIt = new MarkdownIt(options)
  .use(MarkdownItGitHubAlerts)
  .use(MarkdownItCheckbox)
  .use(MarkdownItPangu)
  .use(MarkdownItAbbr)
  .use(MarkdownItFootnote)
  .use(MarkdownItAnchor, {
    level: 2,
    slugify: (string: string) => string,
    permalink: true,
    permalinkClass: 'anchor',
    permalinkSymbol: '',
    permalinkBefore: true
  });

config.enableTOC &&
  md.use(MarkdownItToc, {
    slugify: (string: string) => string,
    includeLevel: [1, 2, 3],
    containerHeaderHtml: '<h2 class="">TOC</h2>',
    listType: 'ol',
    containerClass:
      'rounded-md p-2 fixed left-0 top-0 hidden md:block max-h-screen'
  });

const toc = `[[toc]]
`;

const MarkdownItRenderer = ({ content }: { content: string }) => {
  const renderedHtml = md.render(config.enableTOC ? toc + content : content);

  return <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
};

export default MarkdownItRenderer;
