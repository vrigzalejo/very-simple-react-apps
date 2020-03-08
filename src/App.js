import React from 'react';
import logo from './logo.svg';
import {SportsStoreDataStore} from './data/DataStore';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {ShopConnector} from './components/ShopConnector';

import './App.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab);

class App extends React.Component
{
  render() {
    return <Provider store={SportsStoreDataStore}>
      <Router>
        <Switch>
          <Route path="/shop" component={ShopConnector} />
          <Redirect to="/shop" />
        </Switch>
      </Router>
    </Provider>
  }
 
}

export default App;
