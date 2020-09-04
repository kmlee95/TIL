import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";

//Composition 은 두개이상의 route를 렌더링하는 방식(동시에)
//Switch, redirect 개념 잘 파악하기. (redirect -> 맞는 주소가 없으면 여기로 ..)

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/tv/pupular" render={() => <h1>popular</h1>} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
