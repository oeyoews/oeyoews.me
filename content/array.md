---
title: array
date: 2023/12/28 21:45:58
---

:::tip
demo
:::

:::note
demo
:::

`Array.prototype` 是数组原型对象, 包含了所有数组实例的方法和属性.

* 但在数组实例上调用方法时, 就会自动在 `Array.prototype` 上寻找,并执行它, 同时将数组实例 this 指向该方法 (或者说是在两者共享 this). (类比 Object)

```js
// 直接在原型对象上添加方法,默认时可枚举的, 可以通过 Object.defineProperty 来手动更改 enumerable 的初始值, 以避免循环被遍历到
// Array.prototype.sayHi = function() {
// 	console.log('Hello', this)
// }

Object.defineProperty(Array.prototype, 'sayHi', {
  value: function() {
	console.log('hello')
  },
  enumerable: false
});


const array = [1, 2, 3];

// for in 不仅会遍历 array 的属性, 还会遍历原型链上的可枚举属性 (对象自身定义的属性), 比如手动添加到 Array.prototype 上的方法, 可以用 hasOwnProperty 进行判断属性是否为对象自身的属性.
for (const item in array) {
	if(!array.hasOwnProperty(item)) {
		console.log(item)
	}
} // 1 2 3 sayHi undefined
```

`Object.defineProperty()` 静态方法会直接在一个对象上定义一个新属性，或修改其现有属性，并返回此对象。

`Object.defineProperty()` 允许精确地添加或修改对象上的属性。通过赋值添加的普通属性会在枚举属性时（例如 for...in、Object.keys() 等）出现，它们的值可以被更改，也可以被删除。此方法允许更改这些额外细节，以使其不同于默认值。默认情况下，使用 `Object.defineProperty()` 添加的属性是不可写、不可枚举和不可配置的。此外，Object.defineProperty() 使用 [[DefineOwnProperty]] 内部方法，而不是 [[Set]]，因此即使属性已经存在，它也不会调用 setter。

`Object.getOwnPropertyNames` 与 `Object.keys` 的区别主要在于它们对属性的处理方式。

1. **`Object.getOwnPropertyNames`**：
   - 返回一个数组，包含指定对象所有自身属性的名称，包括不可枚举属性。
   - 不会获取到原型链上的属性。

   示例：
   ```javascript
   const obj = { a: 1, b: 2 };
   Object.defineProperty(obj, 'c', { value: 3, enumerable: false });

   const propertyNames = Object.getOwnPropertyNames(obj);
   console.log(propertyNames);  // ['a', 'b', 'c']
   ```

2. **`Object.keys`**：
   - 返回一个数组，包含指定对象自身的所有可枚举属性的名称。
   - 不会获取不可枚举属性，也不会获取原型链上的属性。

   示例：
   ```javascript
   const obj = { a: 1, b: 2 };
   Object.defineProperty(obj, 'c', { value: 3, enumerable: false });

   const keys = Object.keys(obj);
   console.log(keys);  // ['a', 'b']
   ```

总的来说，`Object.getOwnPropertyNames` 获取对象的所有属性，包括不可枚举属性，而 `Object.keys` 只获取对象自身的可枚举属性。具体使用取决于你对属性的需求，如果需要获取所有属性，包括不可枚举属性，可以使用 `Object.getOwnPropertyNames`。如果只关心可枚举属性，可以使用 `Object.keys`。

`Object.hasOwn`

> 判断指定的对象含有指定的属性 ( Object.hasOwn() 旨在取代 Object.prototype.hasOwnProperty()。), 不会像 in 运算符一样检查原型链上的指定属性.

```js

const obj = {
  prop: 99
}

// 'prop' in obj 会检查原型链, 即会包括继承属性
Object.hasOwn(obj, 'prop') // true
```

`for ... in` 是为遍历对象构建的, 不推荐和数组一起使用