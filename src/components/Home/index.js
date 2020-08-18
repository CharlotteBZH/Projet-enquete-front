import React from 'react';
//import { Link } from "react-router-dom";
import './style.scss';



function Home() {
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
          <div className="pseudo">Pseudo</div>
          <div>Incription</div>
          <div>Connexion</div>
        </div>  
      </div>
  );
}

export default Home;
