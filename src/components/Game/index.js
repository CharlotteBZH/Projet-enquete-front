import React from 'react';
import './style.scss';
import './headBand.scss';
import './buttonNext.scss';
import './text.scss';
import './selection.scss';


import Connexion from '../Connexion';
//import Menu from '../Menu';

function Game() {
  return (
    <div className="game">
      <h1>Composant Game</h1>
      <Connexion />
      <Tag tagName="toto"/>
      <Headband />
    </div>
  );
}

export default Game;




function Tag({tagName}) {
  return (
    <div className="tag">
      <h2>{tagName}</h2>
    </div>
  );
}

function Headband() {
  return (
    <div className="headband">
      <Text naration="Hello World"/>
      <Selection question="tu penses que...?"/>
      <ButtonNext />
    </div>
  );
}

function Text({naration}) {
  return (
    <div className="text">
      <p>{naration}</p>
    </div>
  );
}

function Selection({question}) {
  return (
    <div className="selection">
      <p className="selection_para">{question}</p>
      <p className="selection_para">{question}</p>
      <p className="selection_para">{question}</p>
      <p className="selection_para">{question}</p>
    </div>
  );
}

function ButtonNext() {
  return (
    <div className="buttonNext">
      <h1>></h1>
    </div>
  );
}