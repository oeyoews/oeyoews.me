---
title: Javascript: 克隆
date: 2023/12/26
---

## 浅克隆

:::note
JS 的内置对象复制操作大多都是浅克隆
:::

- 又叫浅拷贝, 顾名思义, 仅仅克隆基本类型的数据，如果对象内部含有引用类型的数据，是不会进行克隆的，他们的仍然指向相同的地址。克隆就是复制，两者互不影响，(浅克隆就是不完全的克隆，或者说是半克隆).

* 经常使用的有 `Object.assign`, `Array.from()`, 展开语法 (Spread syntax).

* 当然, 如果确定没有引用类型, 使用 spread syntax 的效率比 Object.assign 其实更高. 展开运算符, 创建了一个副本, Object.assign 需要修改第一个参数对象, 其实两者的行为一致都是浅拷贝.

```js
const d = {
  name: {
    v1: 'd2'
  }
};

const cloned = { ...d };
cloned.name.v1 = 99;
console.log(d.name.v1); // 99
```

[Link](https://developer.mozilla.org/zh-CN/docs/Glossary/Shallow_copy)

## 深克隆

:::tip
如何手动写一个 deepClone function
:::

- 深克隆才是完全意义上的克隆。使用文档的大致意思就是。副本和源对象的所有地址都不共享，浅克隆情况下就是引用类型的数据地址仍然是共享的，修改其中的任何一个，另外一个都会收到影响.

* 源对象和副本不共享相同的引用 (即不指向同一个地址), 深拷贝确保不会造成意料之外的更改

* 深拷贝有序列化 + 反序列化 (或者 structedClone),  但是很多 JS 对象是不可序列化的, 比如带有闭包的函数,dom api，但是更多的是借助 `Object.assign` 的浅拷贝方法来实现深拷贝效果

* [structuredClone()](https://developer.mozilla.org/zh-CN/docs/Web/API/structuredClone) 也可以进行深拷贝, 不过对浏览器的要求比较高.对一些旧的设备或者浏览器可能不适用.

```js
const deepClone = (obj) => {
  return Object.assign({}, obj);
};
```

```js
const obj = { name: 'clone' };
// 空对象作为第一个参数, 得到的新对象就是深拷贝
const newObj = Object.assign({}, name);
```

## 相关代码

```js
const array = {
  name: 'array',
  list: {
    age: '18'
  }
};

const array_shadow_copy = Object.assign(array);

// normal
array_shadow_copy.name = 'newarray';

// array will be changed
array_shadow_copy.list = ['111'];
```
