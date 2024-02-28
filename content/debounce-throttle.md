---
date: 2024/1/29 14:33:24
---

:::tip
防抖节流都是利用 setTimeout 和闭包 来实现的。
:::

## 防抖

* 单位时间内，对于连续触发的事件，只执行最后一次.

* 利用定时器，每次触发前清除掉之前的定时器 (重新开始)

防抖应用场景：
1. 文本输入
2. 编辑器的实时保存

## 节流

* 单位时间内，对于连续触发的事件，只执行一次.

* 利用定时器，等待定时器执行完毕，才开启定时器

节流应用场景：
1. 快速点击，
2. 鼠标滑动，
3. scoll
4. resize

> 如果希望实时变化，使用节流，如果希望在不变化了后在重新调用接口，就需要使用防抖，所以这需要看具体的使用场景。

5. 下拉加载
6. 视频播放的时间记录


> 其实分为立即执行和非立即执行，只不过由于 delay 的值一般设置的都会很小，一般感知不到，所以普遍用的都是非立即执行版本 (通过定时器去延缓执行函数). 而立即执行函数是借助定时器延缓的 timerId, 而不是函数了。

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