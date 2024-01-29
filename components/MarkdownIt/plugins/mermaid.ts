import MarkdownIt from 'markdown-it';
import Mermaid from 'mermaid';

// Define interface to await readiness of import
export default function mermaid(md: MarkdownIt, options: any) {
  // Setup Mermaid
  Mermaid.initialize({
    securityLevel: 'loose',
    ...options
  });

  function getLangName(info: string): string {
    return info.split(/\s+/g)[0];
  }

  // Store reference to original renderer.
  let defaultFenceRenderer = md.renderer.rules.fence;

  // Render custom code types as SVGs, letting the fence parser do all the heavy lifting.
  function customFenceRenderer(
    tokens: any[],
    idx: number,
    options: any,
    env: any,
    slf: any
  ) {
    let token = tokens[idx];
    let info = token.info.trim();
    let langName = info ? getLangName(info) : '';

    if (['mermaid', '{mermaid}'].indexOf(langName) === -1) {
      if (defaultFenceRenderer !== undefined) {
        return defaultFenceRenderer(tokens, idx, options, env, slf);
      }
      return '';
    }

    let imageHTML: string = '';

    try {
      const container_id = 'mermaid-container';
      Mermaid.mermaidAPI.render(container_id, token.content, (html: string) => {
        imageHTML = html;
      });
    } catch (e) {
      return `<div>${e}</div>`;
    }
    return imageHTML;
  }

  md.renderer.rules.fence = customFenceRenderer;
}
