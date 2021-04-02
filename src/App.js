import React from "react";
import Header from "./components/Header/header";
import Main from "./components/Main/heroImage";
import Grid from "./components/GridItems/gridItems.js";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Main></Main>
      <Grid></Grid>
    </div>
  );
};

export default App;
