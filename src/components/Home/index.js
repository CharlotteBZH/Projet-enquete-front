import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Menu from "../Menu";
import "semantic-ui-css/semantic.min.css";

import soundfile from "../../audio/startGame.mp3";
import Alias from "../../containers/Alias";
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
        {mute === false && (
          <iframe title="music" src={soundfile} allow="autoplay"></iframe>
        )}
        {mute === true && <iframe title="mute"></iframe>}
      </div>
      <div className="header">
        <div className="header-menu">
          <Menu
            menu={onOpenMenu}
            open={open}
            mute={mute}
            onClickMute={onClickMute}
          />
        </div>
        <div className="header-alias">
          <Alias />
        </div>
      </div>

      <div id="content-home" className="content-container">
        <h1 className="content-container__title">Meurtre à O'Beach</h1>
        <div className="content-container__sysnopsis">
          <p>
            Invité par ton ex pour passer des vacances à la mer, tu te disputes
            avec elle en arrivant.
          </p>
          <p>
            Le lendemain elle est retrouvée morte.Et le seul suspect aux yeux de
            tous, c'est TOI.{" "}
          </p>
          <p>Comment prouveras tu ton innocence ...?</p>
        </div>
        {isLogged && (
          <Link to={`/play`}>
            <div className="content-container__start">
              <button
                className="content-container__playButtonClick"
                type="button"
                onClick={onClickPlay}
              >
                Jouer
              </button>
            </div>
          </Link>
        )}
        {!isLogged && (
          <div className="content-container__start">
            <button
              className="content-container__playButtonClick disabled"
              type="button"
              onClick={onClickPlay}
            >
              Jouer
            </button>
            <p className="content-container__message">
              Connecte-toi pour jouer
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
