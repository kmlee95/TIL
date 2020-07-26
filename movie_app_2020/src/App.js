import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; //hashRouter or BrowserRouter둘다 사용해도 ㄱㅊ
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

//여기서 작성한 route는 저 주소의url를 호출하면 관련된 component를 보여주겠다는 의미.
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
