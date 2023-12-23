---
title: npm packages 打包的一些问题
---

## 起始 ncc

第一个 npm package 其实是 cli, 使用 ncc 打包，很简单 demo，

## 换成 tsup

但是后来发现 ncc 仅仅支持 node, __dirname 这种在浏览器里面不支持，后来就使用 tsup 进行打包，tsup 使用 esbuild 打包，tsup 和 esbuild 的作者是同一个人，支持 esm, cjs, iife, 也挺方便，文档花上几分钟就能全部看完

## 发现坑

但是后来发现 esm 转换成 cjs 的时候，会额外进行一次封装，需要额外加上一个 default, 默认导出就很烦，虽然有曲线救国的办法，像写一个 wrapper,

最好的办法就是不用 默认导出，社区似乎也没最佳的解决办法

## 后来

* 又看到 unbuild, 应该不会有 tsup 的那个默认导出坑了吧

## 支持 esm 加载

虽然 tsup 支持 esm 构建，但是不能每次都要手动写 mjs 路径吧。

```js
require(''xxx/dist/index.mjs)
```

后来发现在 package.json, 可以加上一个 exports 的 key 进行配置，从而进行自动判断 esm 还是 cjs

## 注意

* devdependency 和 dependency 很重要，如果全部放在 devdependency 里的时候，打包工具就尝试将所有的依赖打包进一个文件，否则，用户安装你的这个包的时候，还要安装你的依赖包