import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import './style.scss';
// == Import composants
import Home from '../containers/Home';
import Connexion from '../containers/Connexion';
import Registration from '../Registration';
import Game from '../Game';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/logon">
            <Registration />
          </Route>

          <Route exact path="/login">
            <Connexion  />
          </Route>

          <Route exact path="/play">
            <Game />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
