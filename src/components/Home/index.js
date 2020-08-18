import React from 'react';
//import { Link } from "react-router-dom";
import './style.scss';



function Home() {
  return (
      <div className="home">
        <h1 className="title">Enquête CLUED'O</h1>
        <button 
          className="play"
          type="button">
          Jouer
        </button>
        <div className="tolog">
          <div className="pseudo">Pseudo</div>
          <div>Incription</div>
          <div>Connexion</div>
        </div>  
      </div>
  );
}

export default Home;
