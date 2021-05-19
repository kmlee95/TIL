## 평가

코드가 계산되어 값을 만드는 것
1+2 = 3

## 일급

- 값으로 담을 수 있다.
- 변수에 담을 수 있다
- 함수의 인자로 사용될 수 있다
- 함수의 결과로 사용될 수 있다.

```javascript
<script></script>
```

## 일급함수

- 함수를 값으로 다룰 수 있다.
- 조합성과 추상화의 도구

```javascript
const add5 = (a) => a + 5;
log(add5);

const f1 = () => () => 1;
log(f1());

const f2 = f1();
log(f2);
log(f2());
```

## 고차함수

- 함수를 값으로 다루는 함수

### 함수를 인자로 받아서 실행하는 함수

```javascript
const apply1 = (f) => f(1);
const add2 = (a) => a + 2;
log(apply1(add2));
```

```javascript
const times = (f, n) => {
  let i = -1;
  while (++i < n) f(1);
};
times(log, 3);
times((a) => log(a + 3), 3); //applicative programming
```

### 함수를 만들어 리턴하는 함수(클로저를 만들어 리턴하는 함수)

```javascript
const addMaker = (a) => (b) => a + b; //클로저란 a+b가 a를 계속 기억함.
const add10 = addMaker(10);
log(add10(5));
log(add10(10));
```
