import React from "react";
import { Link } from "react-router-dom"; //Link를 사용하는 이유는 href를 사용할경우 새로고침이 되는데 Link는 새로고침이 아니라 페이지를 빠르게 전환하는 리액트 특성과 맞음

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
