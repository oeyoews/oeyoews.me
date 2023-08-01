import type { MDXComponents } from "mdx/types";
import { Code } from "bright";

export function useMDXComponents(components: MDXComponents) {
  Code.lineNumbers = false;
  Code.theme = "one-dark-pro";
  return {
    pre: Code,
  };
}
