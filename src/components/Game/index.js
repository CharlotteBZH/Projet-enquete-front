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
import Alias from "../../containers/Alias";



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
  shouldDisplayQuestion
}) => {
  return (
    <div className="game">

      <div>
        {mute === false && <iframe title="music" src={soundfile} allow="autoplay"></iframe>}
        {mute === true && <iframe title="mute"></iframe>}
      </div>
      <img className="picturesBack" alt={place.placeName} src={place.placePicture} />

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
      {shouldDisplayChapter && 
      <div>
        {<Tag placeName={place.placeName} />}
        {<Headband
          storytelling={storytelling[storyCounter - 1]}
          next={onClickNext}
          isLast={storyCounter === storytelling.length - 1}
          question={question[questionCounter - 1]} //pour s'adapter à l'index du tableau
          questionCounter={questionCounter}
          storyCounter={storyCounter}
          toggleQuestionResponse={onToggleQuestion}
          hide={hide}
          shouldDisplayQuestion={shouldDisplayQuestion}
        />}
      </div>
      }
      {!shouldDisplayChapter && <End />}
      );
};

export default Game;

const Tag = ({ placeName }) => {

  return (
    <div className="tag">
      <h2>{placeName}</h2>
    </div>
  );
};

const Headband = ({
  storytelling,
  next,
  question,
  toggleQuestionResponse,
  hide,
  shouldDisplayQuestion
}) => {
  //console.log("in headband", storytelling);
  //console.log("questionCounter :",questionCounter);
  //console.log("storyCounter : ",storyCounter)
  // Soit il y a des questions à la fin
  // afficher storytelling.sentence tant qu'il y en a

  // Si shouldDisplayQuestion
  // Afficher <Selection />
  // Sinon Afficher <Text />
  return (
    <div className="headband">
      {shouldDisplayQuestion && (
        <div className="headband">
          <Selection
            question={question}
            toggleQuestionResponse={toggleQuestionResponse}
            hide={hide}
          />
          <ButtonNext next={next} />
        </div>
      )}
      {!shouldDisplayQuestion && (
        <div className="headband">
          {<Text sentence={storytelling.sentence} />}
          <ButtonNext next={next} />
        </div>
      )}
    </div>
  )
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
      {hide === false && <p>{question.answer}</p>}
    </div>
  );
};

const ButtonNext = ({ next }) => {
  return (
    <Link to={`/play`}>
      <div className="buttonNext" type="button" onClick={next}>
        <Icon circular inverted color="grey" name="play" size="big" />
      </div>
    </Link>
  );
};


