import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Menu from "../Menu";
import Alias from '../../containers/Alias';
//import Log from "../../containers/Log";
import PropTypes from "prop-types";
const Home = ({ isLogged, onClickPlay, onOpenMenu, open }) => {
  return (
    <div className="home">
      <div className="header">
        <div className="menuButton">
          <Menu menu={onOpenMenu} open={open} />
        </div>
        <div >
        </div>
      </div>
      <span className="title-game">
        <div className="title-game-setting">
          <h1>Enquête CLUED'O</h1>
        </div>
      </span>
      {isLogged && (
        <Link to={`/play`}>
          <button className="play" type="button" onClick={onClickPlay}>
            Jouer
        </button>
        </Link>
      )}
      {!isLogged && (
        <button disabled className="play-disabled" type="button" onClick={onClickPlay}>
          Jouer
        </button>
      )}
      <div className="toAlias">
        <Alias />
      </div>
    </div>
  );
};
Home.propTypes = {
  connected: PropTypes.bool.isRequired,
};
export default Home;
