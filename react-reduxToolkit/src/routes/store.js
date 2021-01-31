import { configureStore, createSlice } from '@reduxjs/toolkit';

// const addToDo = createAction('ADD');
// const deleteToDo = createAction('DELETE');

// //mutation or return 둘 다 가능(redux-toolkit)
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() }); //redux-toolkit 은 자동으러 immer 제공, state mutation 가능
//   },
//   [deleteToDo]: (state, action) => {
//     state.filter((toDo) => toDo.id !== action.payload); //filter은 mutate 하지 않지만 return
//   },
// });

//const store = createStore(reducer);

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;
export default store;
