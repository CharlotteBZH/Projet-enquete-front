import React from 'react';
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

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Registration />
          </Route>

          <Route exact path="/logon">
            <Registration />
          </Route>

          <Route exact path="/login">
            <Connexion />
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
