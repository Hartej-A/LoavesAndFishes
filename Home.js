import React, { useState } from "react";
import "./Home/Home.css";
import Login from "./Home/Login.js";

const Home = (props) => {
  return (
    <div>
      <img className="logo" src="./Home/Logo.png" alt="Loaves and Fishes logo" />
      <Login />
    </div>
  );
}

export default Home;
