import Script from 'next/script';
// https://github.com/mermaid-js/mermaid/issues/3650

export default function MermaidScript() {
  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/mermaid@11.0.0-alpha.4/dist/mermaid.min.js"
      async
    />
  );
}
