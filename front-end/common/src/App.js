import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './Header/Header'
import Home from './Home/Home'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path="/articles" component={Blogs} />
          <Route path="/contact" component={Contact} /> */}
        </Switch>
      </div>
    </Router>

  );
}

export default App;
