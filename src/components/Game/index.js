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

import soundfile from "../../audio/game_boucle.mp3";

import Menu from "../Menu";
import Log from "../../containers/Log";

const Game = ({
  place,
  storytelling,
  onClickNext,
  question,
  questionCounter,
  storyCounter,
  open,
  onOpenMenu,
  onToggleQuestion,
  hide,
  mute,
  onClickMute,
}) => {
  // il faudra faire une variable compteur qui viendra remplacer
  // le [0] dans le headband
  //console.log("questionAffichage : ", questionCounter);
  console.log(
    "------------------------------------------------------------------------"
  );

  return (
    <div className="game">
      <div>
        {mute == false && <iframe src={soundfile} allow="autoplay"></iframe>}
        {mute == true && <iframe></iframe>}
      </div>
      <img className="picturesBack" src={place.placePicture} />
      <Menu
        menu={onOpenMenu}
        open={open}
        mute={mute}
        onClickMute={onClickMute}
      />
      <Log />
      <Tag place={place} />
      <Headband
        storytelling={storytelling[0]}
        next={onClickNext}
        question={question[questionCounter - 1]} //pour s'adapter à l'index du tableau
        questionCounter={questionCounter}
        storyCounter={storyCounter}
        toggleQuestionResponse={onToggleQuestion}
        hide={hide}
      />
    </div>
  );
};

export default Game;

const Tag = ({ place }) => {
  console.log("place :", place);
  return (
    <div className="tag">
      <h2>{place.placeName}</h2>
    </div>
  );
};

const Headband = ({
  storytelling,
  next,
  question,
  storyCounter,
  questionCounter,
  toggleQuestionResponse,
  hide,
}) => {
  //console.log("in headband", storytelling);
  //console.log("questionCounter :",questionCounter);
  //console.log("storyCounter : ",storyCounter)
  return storyCounter == 1 ? (
    <div className="headband">
      {<Text sentence={storytelling.sentence} />}
      <ButtonNext next={next} />
    </div>
  ) : typeof question !== "undefined" ? (
    <div className="headband">
      <Selection
        question={question}
        toggleQuestionResponse={toggleQuestionResponse}
        hide={hide}
      />
      <ButtonNext next={next} />
    </div>
  ) : (
    /*Là il faudrait "simuler" un clic sur NEXT pour sauter les chapitres/situations sans questions
        Peut être regarder du côté des REF => pas compris comment s'en servir
        Et virer le div en dessous :)
        */
    <div className="headband">
      <Selection question="Pas de question" />
      <ButtonNext next={next} />
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

const Selection = ({ question, toggleQuestionResponse, hide }) => {
  const cssClassName = hide ? " toggler toggler_close" : "toggler_open";
  console.log("question :", question.description);
  console.log("response :", question.answer);
  return (
    <div className="selection">
      <p className={cssClassName} onClick={toggleQuestionResponse}>
        {question.description}
      </p>
      {hide == false && <p>{question.answer}</p>}
    </div>
  );
};

const ButtonNext = ({ next }) => {
  return (
    <Link to={`/play`}>
      <button className="buttonNext" type="button" onClick={next}>
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
