## Preview

https://nextjs-mdx-blog-tailwindcss.vercel.app

https://nextjs.oeyoewl.top

## TODO

- [ ] nextjs-intl
- [ ] https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer
- [ ] support password meta(with canvas-confetti)
- [ ] support pin post
- [ ] support load more post or pagation
- [ ] 图表(char.js or echarts)
- [ ] add check all articles(to limit home page length)

- [ ] 目前使用 ssr, 由于 next/mdx 的原因无法使用 ssg, 所以加载首页后, 只有在 prefetch(预加载, 及用户页面滚动后才加载)完成后, 页面才会快速跳转, 也许可以自定义 json 文件, 把 title 的信息放在其中, 而不是通过 header(自定义 middleware)(layout 有时不会即时更新???)
- [ ] 目前只写了 blog list, 没有导航(nav, footer), 没有首页..., 未来可能会写
