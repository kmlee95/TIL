# React Hook 강의 참고

## 1. 리액트 Higher-order Component(HOC)

코드를 작성하다 보면 자주 반복해서 작성하게 되는 코드들이 있따. 우리는 주로 그러한 것들을 함수화해서 재사용한다.(컴포넌트도 비슷)
그런데 컴포넌트 기능 상 에서도 자주 반복되는 코드들이 나타날 수 있다.

리액트 컴포넌트를 작성하게 될 때 반복될 수 있는 코드들은 `HOC`를 만들어서 해결해 줄 수 있다.

`HOC`는 하나의 함수이다. 화면에서 재 사용 가능한 로직만을 분리해서 component로 만들고, 재사용이 불가능한 ui와 같은 다른 부분들은 parameter로 받아서  
처리하는 방법이다.

하지만 `HOC 의 문제점`은 로직을 분리해서 둘러싸고, 둘러싸고, 또 둘러싸다보니 wrapper지옥문이 ...  
depth가 깊어지면 좀 뭐 어때.. 라고 해도 상관 없지만 api도 호출하고, 이벤트도 등록하고, 뭔가 subscribe도 해야하는 복잡한 component가 있다면
여러 로직이 `componentDidMount` 등의 리액트lifeCycle에 흩어지게 된다. 함수는 단일책임 원칙을벗어나거나 코드는 복잡해지고.. 테스트는 어려워진다.

## 2. 리액트 Hook의 등장

- class없이 state를 사용할 수 있는 새로운 기능  
  setState는 어디 있나요? componentDidMount는요?  
  네, 이제 없습니다. 대신 state와 React life cycle을 hook 할 수 있는 기능을 제공합니다.

### 2.1 기존의 컴포넌트 구성

```javascript
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "이름",
    };
  }

  render() {
    return (
      <input
        value={name}
        onClick={(e) => this.setState({ name: e.target.value })}
      />
    );
  }
}
```

### 2.2 React hook

```javascript
import { useState } from "react";

function Example() {
  const [name, setName] = useState("이름");

  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
```
