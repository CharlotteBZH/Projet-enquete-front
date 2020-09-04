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

import Menu from "../../containers/Menu";
import Alias from "../../containers/Alias";
import End from "../End";


const Game = ({
  place,
  storytelling,
  onClickNext,
  question,
  character,
  questionCounter,
  characterCounter,
  storyCounter,
  open,
  onOpenMenu,
  onToggleQuestion,
  hide,
  mute,
  onClickMute,
  shouldDisplayQuestion,
  shouldDisplayChapter
}) => {
  //console.log("character : ",character[].name)
  console.log('character', character);
  let characterToDisplay = {};
  if (shouldDisplayQuestion) {
    characterToDisplay = character.find((char) => {
      return char['character.id'] === question[questionCounter - 1].character_id;
    })
    console.log(characterToDisplay)
  }
  return (
    <div className="game">

      <div>
        {mute === false && <iframe title="music" src={soundfile} allow="autoplay"></iframe>}
        {mute === true && <iframe title="mute"></iframe>}
      </div>
      <img className="picturesBack" alt={place.placeName} src={place.placePicture} />
      {shouldDisplayQuestion && <img src={characterToDisplay['character.picture']} alt={characterToDisplay['character.name']} />}
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
      {shouldDisplayQuestion && (<Tag shouldDisplayQuestion={shouldDisplayQuestion} character={characterToDisplay['character.name']} />)}
      {!shouldDisplayQuestion && (<Tag shouldDisplayQuestion={shouldDisplayQuestion} placeName={place.placeName} />)}
      <Headband
        storytelling={storytelling[storyCounter - 1]}
        next={onClickNext}
        isLast={storyCounter === storytelling.length - 1}
        question={question[questionCounter - 1]} //pour s'adapter à l'index du tableau
        character={character[characterCounter - 1]}
        questionCounter={questionCounter}
        storyCounter={storyCounter}
        toggleQuestionResponse={onToggleQuestion}
        hide={hide}
        shouldDisplayQuestion={shouldDisplayQuestion}
      />
    </div>
  );

};

export default Game;

const Tag = ({ placeName, character, shouldDisplayQuestion }) => {
  console.log(character)
  return (
    <div className="tag">
      {shouldDisplayQuestion && (<h2>{character}</h2>)}
      {!shouldDisplayQuestion && (<h2>{placeName}</h2>)}
    </div>
  );
};

const Headband = ({
  storytelling,
  next,
  question,
  character,
  toggleQuestionResponse,
  hide,
  shouldDisplayQuestion
}) => {

  return (
    <div className="headbandAll">
      {shouldDisplayQuestion && (
        <div className="contexte">
          {/* <img src={character.characterPicture} alt={character.characterName}/> */}
          <Selection
            question={question}
            toggleQuestionResponse={toggleQuestionResponse}
            hide={hide}
          />
          <ButtonNext next={next} />
        </div>
      )}
      {!shouldDisplayQuestion && (
        <div className="interrogatoire">
          {<Text sentence={storytelling.sentence} />}
          <ButtonNext next={next} />
        </div>
      )}
    </div>
  )
};


/*return (
    <div className="headband">
      {shouldDisplayQuestion && (
        <div className="headband">
          <Selection
            question={question}
            toggleQuestionResponse={toggleQuestionResponse}
            hide={hide}
          />
          <ButtonNext next={next} hide={hide} />
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
*/









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

const ButtonNext = ({ next, hide }) => {
  const cssClassName = hide ? " buttonNext buttonNext_close" : "buttonNext_open";
  return (
    <Link to={`/play`}>
      <div className={cssClassName} type="button" onClick={next}>
        <Icon circular inverted color="grey" name="play" size="big" />
      </div>
    </Link>
  );
};


