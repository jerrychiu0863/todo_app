import React from 'react';
import { Route } from 'react-router-dom';
import '../css/App.css';

import Navbar from './Navbar';
import Main from '../container/Main';
import Add from '../container/Add';
import List from '../container/List';
import Edit from '../container/Edit';
import Search from '../container/Search';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact component={Main} />
      <Route path="/add" component={Add} />
      <Route path="/list/:id" component={List} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/search" component={Search} />
    </div>
  );
};

export default App;
