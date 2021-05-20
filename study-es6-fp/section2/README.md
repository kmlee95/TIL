## 기존과 달라진 ES6 리스트순회

-for i++
-for of

```javascript
//기존의 리스트 순회(es5)
const list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
  log(list[i]);
}

//es6
for (const a of list) {
  log(a);
}
```

## Array를 통해 알아보기

```javascript
const arr = [1, 2, 3];
for (const a of arr) log(a);
```

## Set을 통해 알아보기

```javascript
const set = new Set([1, 2, 3]);
for (const a of set) log(a);
```

## Map을 통해 알아보기

```javascript
const map = new Map(["a", 1], ["b", 2], ["c", 3]);
for (const a of map) log(a);
```

## 이터러블/이터레이터 프로토콜

- 이터러블 : 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값 -> Array, Set, Map
- 이터레이터 : { value, done } 객체를 리턴하는 next() 를 가진 값
- 이터러블/이터레이터 프로토콜 : 이터러블을 for..of, 전개 연사자 등과 함께 동작하도록한 규약
