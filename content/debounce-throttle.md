:::tip
防抖节流都是利用 setTimeout 和闭包 来实现的。
:::

> 其实分为立即执行和非立即执行，只不过由于 delay 的值一般设置的都会很小，一般感知不到，所以普遍用的都是非立即执行版本.

```ts
function debounce(fn: Function, delay: number) {
	let timerId: ReturnType<typeof setTimeout>;

	return function(...args: any[]) {
		clearTimeout(timer); // 对于不判断定时器是否存在，直接进行 clear
		timerId = setTimeout(() => {
		fn(...args)
		}, delay)
	}
}

function throttle(fn: Function, delay: number) {
	let timerId: ReturnType<typeof setTimeout>;

	return function (...args, any[], delay) {
		// 如果定时器不存在，再运行函数
		if(!timerId) {
			timerId = setTimeout(() => {
			fn(...args)
			// 函数结束后，置空定时器
			timerId = null;
			}, dealy)
		}
		}
	}
```
