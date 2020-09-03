import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  //Link
} from "react-router-dom";

import './style.scss';

// == Import composants
import Home from '../../containers/Home';
import Connexion from '../../containers/Connexion';
import Registration from '../../containers/Registration';
import Game from '../../containers/Game';


const App = ({ checkAuth, isLogged }) => {

  useEffect(() => {
    checkAuth();
  }, [checkAuth])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home isLogged={isLogged} />

          </Route>

          <Route exact path="/logon">
            {isLogged ? <Redirect to="/" /> : <Registration />}
          </Route>

          <Route exact path="/login">
            {isLogged ? <Redirect to="/" /> : <Connexion />}

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
