import React from 'react';
//import { Link } from "react-router-dom";
import './style.scss';

import Alias from '../Alias';
import Log from '../Log';


function Home({ connected }) {
  return (
    <div className="home">
      <span className="title-game">
        <h1>Enquête CLUED'O</h1>
      </span>
      <span className="play-game">
        <button
          className="play"
          type="button">
          Jouer
        </button>
      </span>
      <div className="tolog">
        {connected ? <Alias /> : <Log />}
        {console.log(connected)}
      </div>
    </div>
  );
}

export default Home;
