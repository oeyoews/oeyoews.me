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