> 字符频率统计

https://www.bilibili.com/video/BV1Du4y1X7EV/?spm_id_from=333.788&vd_source=d6afd7eedd9f9c940321c63f0a1539e3



```js

const a = 'abscdemoademoethiaaadmeodihtissdoeoe';

const res = {};

// loop
for (char in a) {
  if (!res[a[char]]) {
    res[a[char]] = 1;
  } else {
    res[a[char]]++;
  }
}

// reduce
const ress = a.split('').reduce((res, char) => {
	res[char]++ || (res[char] = 1);
  return res;
}, {});

```