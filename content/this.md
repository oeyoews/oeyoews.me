---
title: this
date: 2023/12/28 00:02:12
---

* 全局环境下的 this
* 上下文对象调用中的 this
* apply/bind/call(abc) 改变 this 指向

```js
const d = {
	// settimeout 一般默认使用箭头函数, 保证自己是一个纯函数, 不受到 settimeout this 的影响
  log() {
    setTimeout(() => {
      console.log(this, 'd');
    }, 1000);
  },

// nodejs 指向 timeout, 浏览器中指向全局 Window 对象
// settimout 调用的内部函数, 方法所在的函数, 自然就指向了 settimeout
  logWithoutThis() {
    setTimeout(function () {
      console.log('global', this);
    }, 1000);
  }
};

function test() {
  // 严格模式下, this 指向 undeined, 否则 this 指向全局对象 global
  'use strict';
  console.log('test', this);
}

const foo = {
    bar: 10,
    // 等价于 fn() { ... }
    fn: function() {
       console.log(this)
       console.log(this.bar)
    }
}

// 这里 this 仍然指向的是 window。虽然 fn 函数在 foo 对象中作为方法被引用，但是在赋值给 fn1 之后，fn1 的执行仍然是在 window 的全局环境中。
var fn1 = foo.fn // "裸奔"
fn1()
// 指向 foo, fn 其实就是一个函数.

foo.fn()

d.log()
d.logWithoutThis();

const o1 = {
    text: 'o1',
    fn: function() {
        return this.text
    }
}
const o2 = {
    text: 'o2',
    // 如果希望挂在到 o2, fn: o1.fn 赋值
  fn: function (test) {
    console.log(test)
    return o1.fn();
    // abc 改变 this 指向
    // return o1.fn.apply(o2, ['banana']);
    // return o1.fn.bind(o2)();
  }
}
const o3 = {
    text: 'o3',
    fn: function() {
        var fn = o1.fn
        return fn()
    }
}

console.log(o1.fn()) // o1
console.log(o2.fn()) // o1
console.log(o3.fn()) // undefined
```



* `Function.prototype.apply()` 按照数组传递函数参数, call 则是逐个调用函数参数, bind 的参数是在绑定时传入的
* ac 直接改变函数, b 是创建了一个新的绑定函数, ac 的区别主要是传递的函数参数上.

* 如果将对象的方法单独抽离出来 (比如结构, 或者重新赋值), this 指向就会发生变化

```js
const x = 9;
const moduleX = {
  x: 99,
  getX() {
    console.log(this.x, this);
  }
};

const { getX } = moduleX;

// wrong
getX();

// correct
getX.apply(moduleX);
```