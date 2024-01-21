```ts
// typeof keyof
const a = [1, 2] as const;

type In = (typeof a)[number]; // 1 | 2

const ab = [{ title: '99' }, { title: '88' }] as const;

/** @description: 使用字面量类型组合的联合类型 */
type Iab = (typeof ab)[number]['title']; // 99 | 88

const abc = {
  a: 1,
  b: 2
} as const;

type Iabctype = keyof typeof abc; // a | b
type Iabc = (typeof abc)[Iabctype]; // 1 | 2

// Omit
interface IUser {
  id: number;
  name: string;
  age: number;
}

// 创建一个省略指定属性的新类型, 其实利用借助了  Pick and Exclude
type UserWithoutId = Omit<IUser, 'id'>; // 类型为 { name: string; age: number; }

interface User2 {
  id: number;
  name: string;
  age: number;
  email: string;
}
// 该新类型只包含指定属性, use in
type UserBasicInfo = Pick<User2, 'name' | 'email'>;
// 类型为 { name: string; email: string; }

```