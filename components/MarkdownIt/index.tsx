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
const MarkdownItContainer = require('markdown-it-container');
import config from '~config';
import { capitalize } from '~lib/captalize';

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

const containers = [
  { name: 'note', label: '💡', color: 'blue' },
  { name: 'info', label: '💡', color: 'blue' },
  { name: 'todo', label: '💡', color: 'blue' },
  { name: 'important', label: '❌', color: 'red' }, //  ❎
  { name: 'success', label: '✅', color: 'green' },
  { name: 'tip', label: '✅', color: 'green' },
  { name: 'question', label: '✅', color: 'green' },
  { name: 'warning', label: '⚠️', color: 'yellow' },
  { name: 'caution', label: '⚠️', color: 'yellow' },
  { name: 'note', label: '📝', color: 'yellow' },
  { name: 'fire', label: '🔥', color: 'blue' }
];

function createContainerConfig(name: string, label: string, color: string) {
  return {
    marker: ':',
    // @ts-ignore
    render: function (tokens, idx) {
      if (tokens[idx].nesting === 1) {
        return (
          `<div class="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 my-8">\n` +
          `<div class="flex items-center w-4 mr-4">${label}</div>` +
          `<div class="w-full">`
        );
      } else {
        return '</div>\n</div>\n';
      }
    }
  };
}

const md: MarkdownIt = new MarkdownIt(options)
  .use(MarkdownItGitHubAlerts)
  .use(MarkdownItCheckbox)
  .use(MarkdownItPangu)
  .use(MarkdownItAbbr)
  .use(MarkdownItFootnote)
  .use(MarkdownItContainer, 'spoiler')
  .use(MarkdownItAnchor, {
    level: 2,
    slugify: (string: string) => string,
    permalink: true,
    permalinkClass: 'anchor',
    permalinkSymbol: '',
    permalinkBefore: true
  });

containers.forEach((container) => {
  const { name, label, color } = container;
  const config = createContainerConfig(name.toUpperCase(), label, color);
  md.use(MarkdownItContainer, name.toLowerCase(), config);
  md.use(MarkdownItContainer, capitalize(name.toLowerCase()), config);
  md.use(MarkdownItContainer, name.toUpperCase(), config);
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
