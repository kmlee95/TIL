import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const ADD = 'add';
const MINUS = 'minus';

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}; //데이터를 수정하는 function(data modify), 유일하게 여기서만 수정(리듀서라고함, state라고 생각)

const countStore = createStore(countModifier); //우리의 데이터를 저장하는 곳

const onChange = () => {
  number.innerText = countStore.getState(); //데이터를 가져옴
};

countStore.subscribe(onChange); //store에 변화가 있을 때 호출

//countStore.dispatch({ type: "add" }); //countModifier로 메시지를 보냄(action)

//console.log(countStore.getState());

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

//createStore => dispatch(action) => subscribe(변화확인) => getState(값 확인)
