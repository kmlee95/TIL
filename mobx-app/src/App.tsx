import React, { FC, useCallback, useEffect } from "react";
import { autorun, runInAction } from "mobx";
import { observer } from "mobx-react";
import store from "./store";

// 컴포넌트를 observer로 감싸주어 state가 실시간으로 변경되는 것을 감지한다
const App: FC = observer(() => {
  const { countClass, countObject, doubleObject } = store;
  // autorun(() => {
  //   if (doubleObject.double) {
  //     console.log("DOUBLE" + doubleObject.double);
  //   }
  // });

  const increase = useCallback(() => doubleObject.increase(), [doubleObject]);

  useEffect(() => {
    if (doubleObject.double === 8) {
      console.log("0 초기화");
      runInAction(() => {
        doubleObject.value = 0;
      });
    }
  });

  return (
    <div style={{ padding: "50px" }}>
      <div style={{ marginBottom: "50px" }}>
        <h1>Count (Class)</h1>
        <div>number: {countClass.number}</div>
        <button onClick={() => countClass.increase()}>plus</button>
        <button onClick={() => countClass.decrease()}>minus</button>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h1>Count (Object)</h1>
        <div>num: {countObject.num}</div>
        <button onClick={() => countObject.increase()}>increment</button>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h1>Count (Object)</h1>
        <div>double number: {doubleObject.value}</div>
        <button onClick={increase}>increment</button>
      </div>
    </div>
  );
});

export default App;
// export default observer(App) // 이렇게 감싸줄수도 있다
