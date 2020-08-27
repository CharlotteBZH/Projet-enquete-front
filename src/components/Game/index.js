import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./style.scss";
import "./headBand.scss";
import "./buttonNext.scss";
import "./text.scss";
import "./selection.scss";
import "./tag.scss";
import PropTypes from "prop-types";

import Menu from '../Menu';
//import Connexion from '../../containers/Connexion';

const Game = ({ game, chapter }) => {
  return (
    <div className="game">
      <Menu />
      <Tag {...game} />
      <Headband {...game, chapter} />
    </div>
  );
};

export default Game;

const Tag = ({ tagName }) => {
  return (
    <div className="tag">
      <h2>{tagName}</h2>
      <Icon name="user" className="userLogo" />
    </div>
  );
};

const Headband = ({ narration, onClickNext }) => {
  return (
    <div className="headband">
      <Text narration={narration} />
      <Selection
      // question={question}
      />
      <ButtonNext onClick={onClickNext} />
    </div>
  );
};

const Text = ({ narration }) => {
  return (
    <div className="text">
      <p>{narration}</p>
    </div>
  );
};

const Selection = ({ question }) => {
  return (
    <div className="selection">
      <p className="selection_para">{question}</p>
      <p className="selection_para">{question}</p>
      <p className="selection_para">{question}</p>
      <p className="selection_para">{question}</p>
    </div>
  );
};

const ButtonNext = ({ onClickNext }) => {
  return (
    <Link to={`/play`}>
      <div className="buttonNext" type="button" onClick={onClickNext}>
        <Icon circular inverted color="grey" name="play" size="big" />
      </div>
    </Link>
  );
};

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};

Text.propTypes = {
  narration: PropTypes.string.isRequired,
};

Selection.propTypes = {
  question: PropTypes.string.isRequired,
};
