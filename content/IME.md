---
title: IME
date: 2024/1/20 22:57:38
---

> 如何在输入中文的时候禁止触发 input 事件???

https://www.bilibili.com/video/BV1Wk4y1g7Jr/?spm_id_from=333.788&vd_source=d6afd7eedd9f9c940321c63f0a1539e3

使用 compositionstart/end, 这不是开箱即用的解决方法, 需要结合使用, 关键 是状态管理

```js
const input = document.createElement('input')

const isComposite = false;

input.addEventListener('input', () => {
	if(!isComposite) {
		search()
	}
})

input.addEventListener('compositionstart', () => {
	isComposite = true
})

input.addEventListener('compositionend', () => {
	isComposite = false
})

```