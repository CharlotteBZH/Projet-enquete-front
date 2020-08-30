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
import Log from '../../containers/Log';

const Game = ({ place, storytelling, onClickNext, question, character }) => {
  console.log(storytelling);
  // il faudra faire une variable compteur qui viendra remplacer 
  // le [0] dans le headband 
  return (
    <div className="game">
      <button onClick={onClickNext}> click ici</button>
      <Menu />
      <Log />
      <Tag place={place.name} />
      <Headband storytelling={storytelling[0]} next={onClickNext} />
    </div>
  );
};

export default Game;



const Tag = ({ place }) => {
  return (
    <div className="tag">
      <h2>{place}</h2>
    </div>
  );
};

const Headband = ({ storytelling, next}) => {
  console.log("in headband", storytelling);

  return (
    <div className="headband">
      <Text sentence={storytelling.sentence} />
      <Selection
      // question={question}
      />
      <ButtonNext onClick={next} />
    </div>
  );
};

const Text = ({ sentence }) => {
  return (
    <div className="text">
      <p>{sentence}</p>
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
      <button className="buttonNext" type="button" onClick={onClickNext}>
        <Icon circular inverted color="grey" name="play" size="big" />
      </button>
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
