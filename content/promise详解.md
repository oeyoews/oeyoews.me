---
title: JS: Promise 详解
date: 2024/2/26 16:39:01
---

promise 的链式调用 解决了 异步编程中的回调地狱问题
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