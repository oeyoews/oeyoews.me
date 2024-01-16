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
// es6
`${one}${two}`
```

## 字符串查找

```js
// es5

// es6

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
// es6
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