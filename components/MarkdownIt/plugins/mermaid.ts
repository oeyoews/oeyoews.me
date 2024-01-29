// @ts-nocheck
import mermaid from 'mermaid';
import config from '~config';

import type MarkdownIt from 'markdown-it';

const MarkdownItMermaid = (md: MarkdownIt) => {
  const defaultFenceRender = md.renderer.rules.fence;

  const customMermaidFenceRender = (tokens, idx, options = {}, env, slf) => {
    const token = tokens[idx];
    const code = token.content.trim();
    let [type, theme] = token.info.split(' ');
    const firstLine = code.split(/\n/)[0].trim();
    if (
      firstLine === 'gantt' ||
      firstLine === 'sequenceDiagram' ||
      firstLine.match(/^graph(?: (TB|BT|RL|LR|TD))?(;)?$/)
    ) {
      type = 'mermaid';
    }

    if (type.trim() !== 'mermaid') {
      return defaultFenceRender(tokens, idx, (options = {}), env, slf);
    } else if (type.trim() === 'mermaid') {
      try {
        const mermaid_config = {
          securityLevel: 'loose',
          theme: theme || 'default', //  "default" | "forest" | "dark" | "neutral"
          startOnLoad: false, // 会自动寻找 mermaid class
          htmlLabels: true
        };
        mermaid.initialize(mermaid_config);
        mermaid.parse(code);
        const id = 'mermaid_' + idx;

        let imageHTML = '';
        let imageAttrs = [];
        mermaid.render(id, code, (html) => {
          let svg = this.document.getElementById(id);
          if (svg) {
            imageAttrs.push([
              'style',
              `max-width:${svg.style.maxWidth};max-height:${svg.style.maxHeight}`
            ]);
          }
          imageHTML = html;
        });

        switch (config.rendertype) {
          case 'svg':
            return `<div>${imageHTML}</div>`;
          case 'png':
            imageAttrs.push([
              'src',
              `data:image/svg+xml,${encodeURIComponent(imageHTML)}`
            ]);
            return `<img ${slf.renderAttrs({ attrs: imageAttrs })}>`;
          default:
            return `<div>${imageHTML}</div>`;
        }
      } catch (e) {
        return `<pre>${code}</pre>`;
      }
    }
  };

  md.renderer.rules.fence = customMermaidFenceRender;
};

export { MarkdownItMermaid as default };
