---
title: 关于中英文空格
date: 2023/12/25
---

## pangu

- 之前看到 pangu.js 这个项目，一直希望移植到 tiddlywiki 中，只可惜效果不是很好，今天突然想到可以不用进行页面监听的形式，直接做成 format 就可以了。

## 开始移植

- 凭借着 tiddlywiki 的丰富插件开发经历，很快就做好了，效果也不错。

## 发现坑

- 插件做好后自然要拿自己进行测试了，刚开始一会儿就发现一个小问题，格式 markdown 的时候，如果遇到下面这种情况，插件也会自动在他们之间加上空格，这个问题就很严重了，虽然很少使用加粗。

```md
**中文**
```

- pnpm autocorrect --lint , 以项目根路径为绝对路径，不管处于那个路径下。全局安装状态下，需要使用 ./x 明确指定路径

* 支持 .gitignore .autocorrectignore

## 翻 Issue

- 果不其然，pangu 的 issue 区就有人发过相关的 issue, readme 中也有提到这一点，pangu 为了做到 zero dependency, 最初只是为了了 plain text 和 html 而做的，如果希望兼容 markdown 就需要借助其他的库来实现。这里就有一个环境问题，如果是 node，很好解决，remark-pangu 和 markdown-it-pangu 插件都能解决这个问题，如果是浏览器就不太好实现了，

## 重新打包 markdown-it-pangu

- 由于现在 tiddlywiki 使用了 markdown-it, 所以支持其扩展，但是我发现 markdown-it-pangu 的作者最初只考虑到了 node 环境，并没有适配 browser, 于是借助 unbuild 进行打包，支持了 cdn 嵌入

## 发现 autocorrect

但是 markdown-it-pangu 并不能解决文本格式化上的问题，在翻 issue 的同时，看到 autocorrect 的作者推荐这个，测试了以下，效果很好 (CJK), 并且还有对应的 vscode 扩展。

于是立马就在我的 tiddlywiki-starter-kit 构建步骤中加上了 autocorrect, 还有对应的 GitHub Action, 不过暂时没有加，会产生不必要的 merge, 借助 simple-git-hooks 就可以解决这个问题

autocorrect 支持 .autocorrectrc 配置文件，你可以加上自定义的 spellcheck, 并且自动修正 (很强)

使用 autocorrect 后，markdown linter 基本就用不上了 (仅仅针对 CJK)。

## 又发现新坑

- 经过测试 autocorrect 会根据.gitignore 自动忽略一些目录，这在 README 没有提到。后来就对构建环境进行判断，如果是非本地，就删除项目下面的.gitignore.

## 下一步

autocorrect 本来是一个 ruby china 项目，但是也支持 wasm, 下一步计划就是将其移植到 tiddlywiki 中去，解决最初的插件问题
