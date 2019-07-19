import React from "react";
import { Route } from "react-router-dom";
import "../css/App.css";

import Navbar from "./Navbar";
import Main from "./Main";
import AddToDo from "./AddToDo";
import Edit from "./Edit";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact component={Main} />
      <Route path="/add" component={AddToDo} />
      <Route path="/edit/:id" component={Edit} />
    </div>
  );
};

export default App;
