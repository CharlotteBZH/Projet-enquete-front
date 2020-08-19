import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import './style.scss';
// == Import composants
import Home from '../Home';
import Connexion from '../Connexion';
import Registration from '../Registration';
import Game from '../Game';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home connected={false} />
          </Route>

          <Route exact path="/logon">
            <Registration />
          </Route>

          <Route exact path="/login">
            <Connexion mail="mymail@gmail.com" pwd="1234" />
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
