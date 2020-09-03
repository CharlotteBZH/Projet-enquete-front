import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Menu from "../Menu";
import Alias from '../../containers/Alias';
//import Log from "../../containers/Log";
//import PropTypes from "prop-types";

const Home = ({ isLogged, onClickPlay, onOpenMenu, open }) => {
  return (
    <div className="home">
      <div className="header">
        <div className="menuButton">
          <Menu menu={onOpenMenu} open={open} />
        </div>
        <div className="toAlias">
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
