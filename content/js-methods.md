---
title: js-methods
date: 2023/12/26 22:47:34
---

> 一些常用的 JS 内容方法.

## Object

```js
const data = {
	name: 'Linux',
	age: 99
}
console.log(Object.keys()) // ['name', 'age']
console.log(Object.values()) // ['Linux', 99']
console.log(Object.entries()) // [ ['name', 'Linux'], ['age', 99] ]
```

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

`Array.prototype.some()` [^some] 方法第一个参数是一个 callbackFn, 第二个函数 thisArg 不常用 (修改 this 指向).

> 数组不属于基本类型, 是一个特殊的 Array 对象.

> 所有的 builtin 复制操作 (展开语法, Array.from, Array.prototype.slice Array.prototype.concat) 都会创建浅拷贝.

## Array.from

* 这是一个静态方法. 第一个参数是 arrayLike, 第二个参数就是 mapFn,

```js
// array
const array = [1, 2, 3]
const newarray = Array.from(array, item => item * 2);
console.log(newarray) // output: [2, 4, 6]

// arrayLike
const arrayLike = {
	0: 'apple', 1: 'banana', length: 2
}
console.log(Array.from(arrayLike))
// array with object
const aobj = [
	{name: 'apple'}
]
console.log(Array.from(aobj, (item) => item.name + ' is bad'))
// output is : ['apple is abd']
```

## Map

`Map()` 是一个构造函数


```js
const map = new Map()

// 类似于 localstorage 的用法 getItem, setItem, 只是不支持直接访问
// set value
map.set('name', 'apple')
// get value
map.get('name')

// 类似于 删除对象的某个属性 delete obj.name
// instance method: delete
map.delete('name')
map.has('name')

// instance method: empty map
map.clear()

// return a new MapIterator Object include all kv
// 类似于 Object.entries()
map.entries()
map.keys()
map.values()

> 虽然设置对象属性的方法同样适用于Map 对象, 但是Map 的数据结构没有被改变, 所以查询不到.


```

<hr>

*[callbackFn]: 就是一个负责判断的回调函数, 返回类型为 Boolean
*[arrayLike]: 可迭代或类数组对象.
*[mapFn]: 对返回的数组值进行操作.

[^some]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some

## Tips

```js
Array.prototype.include() // ES7 语义更明确相比 findIndex find indexof, 使用 samevaluezero()
Object.assign() // ES6(2015)
```
