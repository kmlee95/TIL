import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from './store';
import ToDo from '../components/ToDo';

const Home = ({ toDos, addToDo }) => {
  //console.log(props); //react-router로 받는 props
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText('');
  };

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo, id) => (
          <ToDo {...toDo} key={id} />
        ))}
      </ul>
    </>
  );
};

//현재 props에 데이터를 추가하여 가져온다(저장소에서 데이터 가져온다고 생각)
const mapStateToProps = (state) => {
  return { toDos: state };
};

//addTodo action 할 수 있게 props에 등록(dispatch역할)
const mapDispatchToProps = (dispatch) => {
  return { addToDo: (text) => dispatch(add(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
