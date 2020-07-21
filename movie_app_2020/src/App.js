import React from "react";

function Food(props) {
  //console.log({fav});
  return (
    <div>
      <h1>I like {props.name}</h1> <h2>i data {props.picture}</h2>
    </div>
  );
}
const foodILike = [
  { id: 1, name: "kimchi", data: "hi" },
  { id: 2, name: "pizza", data: "kiki" },
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.data} />;
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
