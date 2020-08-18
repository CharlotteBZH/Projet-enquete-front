import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './style.scss';

function App() {
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
