* 最初接触到 tialwindcss 的时候并没有因为 内联样式这个备受争议的问题而关掉 tailwindcss 的官网，反而是因为不会用 tailwindcss 而感到困惑。可能是当时 css 没怎么学的缘故吧，后来就慢慢啃官网，一点一点使用 tailwindcss, 最后将 tailwindcss 移植到 tiddlywiki 中，在 tiddlywiki 中开始熟悉起了 tailwindcss, 可以不用依赖 vscode 的 tailwindcss 扩展，直接盲写 tailwindcss.

* 这也导致了我的 css 全是在使用 tialwindcss 的时候，一点一点恶补出来的。(我在 tailwindcss 中学 CSS)

## 原子化 css

原子化 CSS 是一种 CSS 的架构方式，它倾向于小巧且用途单一的 class，并且会以 __视觉效果__ 进行命名。

## 组件化 css

* 之前的组件化 css 缺点就是后期修改不方便，但是如果使用 tailwindcss 来写组件，这个问题就迎刃而解了

## tailwindcss 优点

* 样式文件不会一直增大，会逐渐趋于平稳的大小.
* 约束性：tailwindcss 提供了一套颜色供我们选择，不用每次都为样式的颜色而犹豫浪费时间, 即使是新手，也不会再写出大红大绿的网页了, 页面的视觉上会比较一致, 可以说在一定程度上解决了设计上的问题
* 响应式：内联样式是无法使用媒体查询的，但是在 tailwindcss 中，一行 class 就可以搞定

## 为什么不是内容和样式分离了

造成这种反转的原因是 react，vue，angular 这些前端技术出现后前端组件化变得非常容易了。

样式分离的目的主要是为了复用和方便维护，但在组件化面前恰恰相反，最小单位是组件. 内容样式如果分离的话，反而会造成维护负担;

内联样式没有原子类简介，而 tailwindcss 恰好是将原子类的集大成者, 象 bootstap 这种定制型灵活性极低

## 缺点

* 熟悉 tailwindcss 的原子类样式需要时间，但是用起来后会很简单
* 公共组件库的基本配置冲突，比如 mx-2 为不同的值如何解决的 (暂时还没遇到这个问题)