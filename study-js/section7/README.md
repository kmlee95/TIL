## Objects

> one of the Javascript data types  
> obejct = { key: value};

### Object를 만드는 방법

- const obj1 = {};
- const obj2 = new Object();

자바스크립트 동적으로 타입이 런타임때 결정되는 언어이다.

```javascript
const kyungmin = { name: "kyungmin", age: 4 };

kyungmin.hasJob = true; //동적으로 추가 가능
delete kyungmin.hasJob; //동적으로 삭제 가능
```

### Computed properties

> 코딩할 때에는 dot(.)을 사용하고, 실시간으로 원하는 key를 받아올 때 computed key를 사용한다.

```javascript
console.log(kyungmin.name);
console.log(kyungmin["name"]);
kyungmin["hasJob"] = true; // 동적으로 생성가능
```

### Property value shorthand

```javascript
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person4 = makePerson("kyungmin", 30);

//첫번째 방법
function makePerson(name, age) {
  return {
    name,
    age,
  };
}

//두번째 방법(Constructor function);
const person3 = new Person("kyungmins", 40);
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  // return this;
}
```

### in operator : property existence check(key in obj)

```javascript
console.log("name" in kyungmin); // true
console.log("test" in kyungmin); // false
```

### for...in vs for...of

```javascript
const kyungmin = { name: "kyungmin", age: 4 };
//for in(object)
for (key in kyungmin) {
  console.log(key); //name, age
}

//for of(array)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value); // 1,2,4,5
}
```

### fun cloning(object clone)

```javascript
//Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name: "kyungmin", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user); //user2, user1이 같은 객체 값을 가리킨다.

//해결방법(old)
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
//해결방법(new)
const user4 = Object.assign({}, user1);
```
