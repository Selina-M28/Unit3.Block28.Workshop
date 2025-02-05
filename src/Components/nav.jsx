import React from "react";
import { Link } from "react-router-dom";

function nav() {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/red">Red</Link>
      <Link to="/blue">Blue</Link>
    </div>
  );
}

export default nav;
