---
title: Blog Render Strategy
date: 2023/12/7 13:22:34
---

> [!TIP]
> 博客(route: /blog)会根据不同的文件类型选择不同的渲染策略, mdx support component by next-remote, and markdown support plugins by markdown-it.
> 其他路由(tiddlers, issues, journal)统一使用 markdown filetype use markdown-it to render content
