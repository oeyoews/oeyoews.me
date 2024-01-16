---
title: es6-methods
date: 2024/1/16 11:30:50
---

## 解构

## 函数参数默认值

## rest 参数

## 箭头函数

## 模板字符串

## 扩展运算符 (Spread)

## 数组: find fill

```js
// es5
'one' + 'two
// ES6
`${one}${two}`
```

## 字符串查找

```js
// es5

// ES6

'onetwo'.startWith('one')
'onetwo'.endWith('two')
'onetwo'.includes('two') // or for array
```

## 字符串长度填充

```js
'99'.padEnd(22)
'99'.padStart(22)
```

## 字符串重复

```js
// ES6
'9'.repeat(9)
```

## 尾调用

```js
function () {
	//
	return g(x)
}
```

## 尾递归

函数调用自身称为递归, 尾调用自身就叫尾递归.

```js
// 递归
function factorial(n) {
	if(n===1) return 1;
	// 阶乘函数
	return n * factorial(n-1)
}

// 尾递归优化仅仅在严格模式下生效
function factorials(n, total) {
	if(n===1) return total;
	return factorials(n-1, n*total)
}

factorials(5, 1) // return total ==> 5x4x3x2

// Fibonacci
function Fibonacci(n) {
	if(n<1) return 1;
	return Fibonacci(n-1) + Fibonacci(n-2);
}

// optimized fibonacci

function Fibonaccis(n, ac1=1, ac2=1) {
	if(n<1) return ac2;
	return Fibonaccis(n-1, ac2, ac1+ac2)

}
// currying(柯里化):将多参数的函数, 转换成单参数的形式

function currying(fn, n) {
	return function(m) {
		return fn.call(this, m, n)
	}
}

function tailFactorial(n, total) {
	if(n===1) return total;
	return tailFactorial(n-1, n*total)
}

const factorial = currying(tailFactorial, 1)
factorial(5)
```

## Class

生成实例对象的传统方法是通过构造函数.

```js
// ES5
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);

// ES6
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```

## 私有属性

```js
// class 基本可以看作是构造函数的语法糖
class Person {
  #salary = 99999; // instance cannot access this variable (es2022)
  static #sayHi() {
    // just in class inner use
    console.log('xxx');
  }

  constructor() {
    this.salary = this.#salary;
    Person.#sayHi();
  }

  sayHi() {
    console.log('hi');
  }
}

class Son extends Person {
  constructor() {
    super();
    super.sayHi();
  }
}
```

:::note
class 的子类构造函数必须首先执行一次 super() 函数, 否则会报错, 并且 super 函数只能在 construector 里面使用.

作用是形成子类的 this 对象, 将父类的实例方法和属性放到 this 上, 类似于 重新绑定 (call)this.

也可以通过 super 获取父类的属性或方法
:::

## Mixin

Mixin 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口。它的最简单实现如下。

```js
const a = {
  a: 'a'
};
const b = {
  b: 'b'
};
const c = {...a, ...b}; // {a: 'a', b: 'b'}
```

## async

ES2017 标准引入了 async 函数，使得异步操作变得更加方便。Generator 的语法糖

async 返回一个 Promise 对象.
await 接收一个 Promise 对象. 如果不是就直接返回对应的值.

## ArrayBuffer

（1）ArrayBuffer 对象：代表内存之中的一段二进制数据，可以通过“视图”进行操作。“视图”部署了数组接口，这意味着，可以用数组的方法操作内存。

（2）TypedArray 视图：共包括 9 种类型的视图，比如 Uint8Array（无符号 8 位整数）数组视图, Int16Array（16 位整数）数组视图, Float32Array（32 位浮点数）数组视图等等。

（3）DataView 视图：可以自定义复合格式的视图，比如第一个字节是 Uint8（无符号 8 位整数）、第二、三个字节是 Int16（16 位整数）、第四个字节开始是 Float32（32 位浮点数）等等，此外还可以自定义字节序。

简单说，ArrayBuffer 对象代表原始的二进制数据，TypedArray 视图用来读写简单类型的二进制数据，DataView 视图用来读写复杂类型的二进制数据。

https://es6.ruanyifeng.com/#docs/arraybuffer