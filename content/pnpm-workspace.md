---
title: monorepo:  workspace
---

## 开始

由于自己的一些项目代码抽离出来，做成了 npm package, 随着 package 的增多，npm link 显得明显吃力，要不然就是不断改代码，发包，最初使用的是 npmmirror, 由于有缓存，还要手动进行同步 https://npmmirror.com/package/ ~~(cnpm 网页版同步不行)~~. 后来就在当前项目下使用 npmrc 修改为原来的 npm 地址。

## 改善

上述是不断踩坑的经历，不知道浪费了多长事件，以前虽然看过 monrepo, workspace, 但没有细看，也没有和自己的使用场景联系上。今天又重新看了以下，确实很好用。

下面使用 workspace 为例，需要 pnpm-workspace.yaml

```yaml
packages:
	packages/*
```

`package.json` 建议也加上 workspace 的字段，

## 注意

- 安装新包的时候需要 加上 -w 参数
- 如果依赖 dist/ 建议 保留 dist/目录，否则别人 clone 的时候，还要分别进入每个包手动构建。

> 但是也可以 在 package.json 里面加上一个 prepare 的命令, 自动构建 dist, 不过依赖包就多了.
