---
title: prototype
date: 2023/12/28 13:29:35
---

## Prototype

```js
const age = {}
age.constructor.prototype === age.__proto__; // true

function Age = {}

age.prototype === age.__proto__ // false
age.constructor.prototype === age.__proto__; // true
```

* `instanceof` 运算符号用于检测函数的 prototype 属性是否出现在某个实例对象的原型链上.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const auto = new Car('Honda', 'Accord', 1998);
const d = 99

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true
```

`instanceof` 是 JavaScript 中用于检查对象是否属于特定类或类型的运算符。以下是一些 `instanceof` 的常见用法：

1. **检查对象是否属于特定类或构造函数：**
   ```javascript
   function Car(make, model) {
     this.make = make;
     this.model = model;
   }

   var myCar = new Car('Toyota', 'Camry');
   console.log(myCar instanceof Car); // true
   ```

2. **检查对象是否属于父类：**
   ```javascript
   class Animal {
     // ...
   }

   class Dog extends Animal {
     // ...
   }

   var myDog = new Dog();
   console.log(myDog instanceof Animal); // true
   ```

3. **检查对象是否属于内置对象类型：**
   ```javascript
   var myArray = [1, 2, 3];
   console.log(myArray instanceof Array); // true

   var myDate = new Date();
   console.log(myDate instanceof Date); // true
   ```

4. **检查对象是否属于自定义类型：**
   ```javascript
   function Person(name) {
     this.name = name;
   }

   var john = new Person('John');
   console.log(john instanceof Person); // true
   ```

5. **处理多态情况：**
   ```javascript
   function displayInfo(obj) {
     if (obj instanceof Car) {
       console.log(`This is a car with make ${obj.make} and model ${obj.model}.`);
     } else if (obj instanceof Dog) {
       console.log(`This is a dog.`);
     } else {
       console.log(`Unknown type.`);
     }
   }

   var vehicle = new Car('Honda', 'Accord');
   displayInfo(vehicle);
   ```

## Reduce

`Array.prototype.reduce`,  累加器, 接受一个函数作为累加器, 遍历数组, 返回一个单一的值.

```js
const d = [1, 2, 3]
const inititaValue = 0

// sum
d.reduce((sum, currentValue) => sum + currentValue, initialValue)
```

## Promise

> async/await 可以不用手写 promise, 让代码更加直观. 就是简化 Promise 写法

```js
function async1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log('async');
      return resolve('ok');
    }, 1000);
  });
}

async function main() {
  const res = await async1();
  console.log(res); // micro task
  console.log('01');
}

function m1() {
  return async1()
    .then((res) => console.log(res)) // micro task
    .then(() => console.log('01'));
}

main();
m1();
```


```js
const pro = new Promise((resolve, reject) => {
  resolve('suc')
} )

// Promise.reject(new Error('xxx'))
throw new Error('xxx')

// 在非 async 函数中调用 async 函数,
// async 的作用就是声明当前函数是一个异步函数, 并且返回一个 Promise 对象
// async 函数是 AsyncFunction 构造函数的实例
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // 1 秒后显示 10
  wait().then(result => alert(result));
}

f();
```

---

```js
// 第一个参数是指定原型对象
const d = Object.create({ age: 9 });

const person = {
  name: 'Linux',
  age: 10,
};

// 原型继承：基于一个已经存在的对象创建对象
const linux = Object.create(person, {
	// name 会覆盖前者的 name, 都是在原型对象上
  name: {
    value: 'Manjaro',
    enumerable: true,
    writable: true,
  },
});
console.log(linux.name);

// add count field on d object prototype
Object.defineProperty(d, 'count', {
  value: 99,
});

d.a = 11;

const obj = {};

console.log(obj.__proto__);
// 修改 obj 的原型
Object.setPrototypeOf(obj, {
  age: 999,
});

console.log('obj:', obj.__proto__);
// 但是建议使用 Object.getPropertypeOf 获取原型，不是 __proto__
console.log(Object.getPrototypeOf(obj));

console.log(d.count);
console.log(d.__proto__); // { age: 9 }
console.log(d.hasOwnProperty('age'));
console.log(d.hasOwnProperty('a'));

```

## Add custom method to array

```js
Array.prototype.log = () => {
  console.log('log function');
};

const arr = [];

// getOwnPropertyNames: Returns the names of the own properties of an object. The own properties of an object are those that are defined directly on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
// @params: just need one params
console.log(Object.getOwnPropertyNames(Array.prototype)); /* [
  'length',      'constructor',    'concat',
  'copyWithin',  'fill',           'find',
  'findIndex',   'lastIndexOf',    'pop',
  'push',        'reverse',        'shift',
  'unshift',     'slice',          'sort',
  'splice',      'includes',       'indexOf',
  'join',        'keys',           'entries',
  'values',      'forEach',        'filter',
  'flat',        'flatMap',        'map',
  'every',       'some',           'reduce',
  'reduceRight', 'toLocaleString', 'toString',
  'at',          'findLast',       'findLastIndex',
  'log'
] */
```