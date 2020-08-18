import React from 'react';
import './style.scss';
import Connection from './Connection';
import Menu from './Menu';

function Game() {
  return (
    <div className="game">
      <h1>Composant Game</h1>
      <Connection />
      <Tag />
      <Menu />
      <Headband />
      <Text />
      <Selection />
      <ButtonNext />
    </div>
  );
}

export default Game;