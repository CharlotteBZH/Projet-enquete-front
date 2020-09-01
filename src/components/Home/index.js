import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import Menu from "../Menu";
//import Alias from '../../containers/Alias';
import Log from "../../containers/Log";
import soundfile from "../../audio/startGame.mp3";

import PropTypes from "prop-types";

const Home = ({
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
        {mute == false && <iframe src={soundfile} allow="autoplay"></iframe>}
        {mute == true && <iframe></iframe>}
      </div>
      <div className="menuButton">
        <Menu
          menu={onOpenMenu}
          open={open}
          mute={mute}
          onClickMute={onClickMute}
        />
      </div>
      <span className="title-game">
        <h1>Enquête CLUED'O</h1>
      </span>

      <Link to={`/play`}>
        <button className="play" type="button" onClick={onClickPlay}>
          Jouer
        </button>
      </Link>

      <div className="tolog">
        <Log />
      </div>
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
