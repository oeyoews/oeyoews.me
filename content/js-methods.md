---
title: js-methods
date: 2023/12/26 22:47:34
---

> 一些常用的 JS 内容方法.

## some

- 如果要不断使用逻辑运算符号判断, 这一定很让人难受 (最起码是我).

```js
if(d === "dark" || d === "light" || d === 'green") {
	console.log('good')
}
```

但是可以利用 数组的内置对象方法 `Array.prototype.some`

```js
const checker = ['dark', 'light', 'green'];
const d = 'dark';
if (checker.some((item) => item === d)) {
  console.log('goods');
} else {
  console.log('nothing');
}
```

`Array.prototype.some()` [^some] 方法第一个参数是一个 callbackFn, 第二个函数 thisArg 不常用.

> 数组不属于基本类型, 是一个特殊的 Array 对象.

> 所有的 builtin 复制操作 (展开语法, Array.from, Array.prototype.slice Array.prototype.concat) 都会创建浅拷贝.

*[callbackFn]: 就是一个负责判断的回调函数, 返回类型为 Boolean

[^some]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some