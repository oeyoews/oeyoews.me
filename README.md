![nextjs-tiddlywiki](https://github.com/oeyoews/nextjs-mdx-blog/blob/main/public/next-mdx.png?raw=true)

> [!IMPORTANT]
> 这是一个从 [nextjs-mdx-blog](https://github.com/oeyoews/nextjs-mdx-blog) 抽离出来的 tiddlywiki 分支, 暂时没有放到一个单独的仓库.
> 默认使用 markdown 的形式渲染, wikitext 也可以渲染, 不过部分高级语法不会得到支持.

- https://colorplay.tiddlyhost.com/tiddlers.json(wikitext)
- https://balloonvendor.tiddlyhost.com/tiddlers.json(markdown)

## Features

- 全文 RSS 输出
- Echarts 文章日历统计
- SSG 静态生成
- 支持 online/local tiddlywiki json

## Usage

- fork 此仓库(branch: tiddlywiki)
- 打开.env 文件将 xxx.tiddlyhost.com/xxx, 替换成你自己的 tiddlyhost 地址
- 或者从 tiddlywiki 导出 json 文件, 替换 public/markdown.json 文件

## Deploy

...

## TODO

- 解决 cors 问题, 支持实时渲染本地或托管的 nodejs tw 实例(不用导出 json)
