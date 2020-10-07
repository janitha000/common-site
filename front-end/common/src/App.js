import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './Header/Header'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>

  );
}

export default App;
