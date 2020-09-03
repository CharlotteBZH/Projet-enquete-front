import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Menu from "../Menu";


import soundfile from "../../audio/startGame.mp3";
import Alias from '../../containers/Alias';
import PropTypes from "prop-types";

const Home = ({
  isLogged,
  connected,
  onClickPlay,
  onOpenMenu,
  open,
  mute,
  onClickMute,
}) => {
  return (
    <div className="home">
      <div>
        {mute === false && <iframe title="music" src={soundfile} allow="autoplay"></iframe>}
        {mute === true && <iframe title="mute"></iframe>}
      </div>
      <div className="header">
        <div className="menuButton">
          <Menu
            menu={onOpenMenu}
            open={open}
            mute={mute}
            onClickMute={onClickMute}
          />
        </div>
        <div className="toLog">
          <Alias />
        </div>
      </div>
      <span className="title-game">
        <div className="title-game-setting">
          <h1>Enquête CLUED'O</h1>
        </div>
      </span>
      {isLogged && (
        <Link to={`/play`}>
          <div className="start">
            <button className="playButtonClick" type="button" onClick={onClickPlay}>
              Jouer
        </button>
          </div>
        </Link>
      )}
      {!isLogged && (
        <div className="start">
          <button disabled className="playButtonClick" type="button" onClick={onClickPlay}>
            Jouer
        </button>
        </div>
      )}

    </div>
  );
};

export default Home;
