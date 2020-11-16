import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


import Header from './Header/Header'
import Home from './Home/Home'
import Github from './Github/Github'
import Profile from './Profile/Profile'
import ProfileWithHook from './Profile/ProfileWithHook'
import CSSTricks from './CSSTricks/CSSTricks'
import HooksExample from './HooksExample/HooksExample'
import Trivia from './Trivia/Trivia'

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = ''
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/github" component={() => (<Github username="janitha000" />)} />
            <Route path="/profile" component={ProfileWithHook} />
            <Route path="/css" component={CSSTricks} />
            <Route path="/hooks" component={HooksExample} />
            <Route path="/trivia" component={Trivia} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>



  );
}

export default App;
