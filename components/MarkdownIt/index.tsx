import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor';
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts';
import 'markdown-it-github-alerts/styles/github-base.css';
import 'markdown-it-github-alerts/styles/github-colors-dark-media.css';
import 'markdown-it-github-alerts/styles/github-colors-light.css';

const md: MarkdownIt = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  langPrefix: 'language-',
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
  },
})
  .use(MarkdownItGitHubAlerts)
  .use(MarkdownItAnchor, {
    level: 2,
    slugify: (string: string) => string,
    permalink: true,
    permalinkClass: 'header-anchor',
    permalinkSymbol: '¶',
    permalinkBefore: false,
  });

const MarkdownItRenderer = ({ content }: { content: string }) => {
  const renderedHtml = md.render(content);

  return <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
};

export default MarkdownItRenderer;
