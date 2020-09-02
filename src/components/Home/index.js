import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import Menu from "../Menu";
//import Alias from '../../containers/Alias';
import Log from "../../containers/Log";

import PropTypes from "prop-types";

const Home = ({ connected, onClickPlay, onOpenMenu, open }) => {
  return (
    <div className="home">
      <div className="header">
        <div className="menuButton">
          <Menu menu={onOpenMenu} open={open} />
        </div>
        <div className="tolog">
          <Log />
        </div>
      </div>

      <span className="title-game">
        <div className="title-game-setting">
          <h1>Enquête CLUED'O</h1>
        </div>
      </span>

      <Link to={`/play`}>
        <div className="start">
          <button
            className="playButtonClick"
            type="button"
            onClick={onClickPlay}
          >
            Jouer
          </button>
        </div>
      </Link>
    </div>
  );
};

Home.propTypes = {
  connected: PropTypes.bool.isRequired,
};

export default Home;

/*{connected && 
  <Link to={`/play`} >
    <button
      className="play"
      type="button">
      Jouer
    </button>
  </Link> 
  }
  {!connected &&        
  <button
    className="play"
    disabled
    type="button">
    Jouer
  </button>
  }*/

/*{connected ? <Alias /> : <Log />}
        {console.log(connected)}*/
