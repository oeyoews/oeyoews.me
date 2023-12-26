---
title: Javascript: 克隆
date: 2023/12/26
---

> 之前虽然在写代码的时候了解过 JS 的 浅克隆/深克隆，但是也只是略微使用，并没有做更深入的了解。虽然知道它的存在，但是如果让自己完全明明白白的用自己的话讲述出来，还是很困难。更多的是可能知道其中的意思，但是又不知道改怎么飙到出来。于是又重新看了下 MDN 文档和一些帖子，下面是一些个人的总结。

## 浅克隆

- 又叫浅拷贝, 顾名思义, 仅仅克隆基本类型的数据，如果对象内部含有引用类型的数据，是不会进行克隆的，他们的仍然指向相同的地址。克隆就是复制，两者互不影响，(浅克隆就是不完全的克隆，或者说是半克隆).

* 经常使用的有 `Object.assign`, `Array.from()`, 展开语法.

[Link](https://developer.mozilla.org/zh-CN/docs/Glossary/Shallow_copy)

## 深克隆

- 深克隆才是完全意义上的克隆。使用文档的大致意思就是。副本和源对象的所有地址都不共享，浅克隆情况下就是引用类型的数据地址仍然是共享的，修改其中的任何一个，另外一个都会收到影响.

* 源对象和副本不共享相同的引用 (即不指向同一个地址), 深拷贝确保不会造成意料之外的更改

* 深拷贝有序列化 (但似乎不常用)，但是更多的是借助 `Object.assign` 的浅拷贝方法来实现深拷贝效果

```js
const deepClone = (obj) => {
  return Object.assign({}, obj);
};
```

```js
const obj = { name: 'clone' };
const newObj = Object.assign({}, name);
```

## 相关代码

```js
const array = {
  name: 'array',
  list: {
    age: '18',
  },
};

const array_shadow_copy = Object.assign(array);

// normal
array_shadow_copy.name = 'newarray';

// array will be changed
array_shadow_copy.list = ['111'];
```
