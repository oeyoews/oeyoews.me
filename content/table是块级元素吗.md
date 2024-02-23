---
title: CSS: table 是块级元素吗
date: 2024/2/23 15:07:40
---

* 在处理 tiddlywiki 中的表格文字溢出的问题时在网上搜了一下，大多数的处理办法就是 block+overflow，或者使用 table-layout+ 省略文字处理

```css
table {
	display: block;
}
```

block 的问题让我感到很疑惑，我一致以为元素只有 block, inline inline-block 三种情况。于是我搜索了这样一个问题 table 属于哪种类型的元素，网上并没有一致的答案. 于是手动写了一个 html 看了下浏览器默认的情况 默认是 `display: table`, is table element not block and inline type.

```css
table {
    display: table;
    border-collapse: separate;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 2px;
    border-color: gray;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
td {
    display: table-cell;
    vertical-align: inherit;
}
th {
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
    text-align: -internal-center;
}
```

## css: display

1. "block"：将元素显示为块级元素，即它在页面中显示为一个块，占据一行的全部宽度，可以设置宽度和高度。

2. "inline"：将元素显示为内联元素，即它在页面中显示为一个行内元素，不会独占一行，只占据它的内容所需的宽度。

3. "inline-block"：将元素显示为内联块级元素，即它在页面中显示为一个行内元素，但可以设置宽度和高度，且会独占一行。

4. "none"：将元素隐藏，不会在页面上显示，但仍然会占据布局空间。

5. "flex"：将元素显示为弹性盒子，使其成为一个弹性容器，可以通过设置其子元素的排列方式来控制布局。

6. "grid"：将元素显示为网格容器，使其成为一个网格布局容器，可以通过设置网格行和列来控制布局。

7. "table"：将元素显示为表格元素，即使不在表格中也会按照表格的布局方式显示。

8. "table-cell"：将元素显示为表格单元格，用于设置表格布局中单元格的样式。