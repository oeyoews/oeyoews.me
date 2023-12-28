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