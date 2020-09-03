import { connect } from "react-redux";
import Game from "../components/Game";
import { getNext, openMenu, toggleQuestionResponse, onMute } from "../store/action";

const mapState = (state) => ({
  hide: state.hide,
  place: state.place,
  storytelling: state.storytelling,
  question: state.question,
  character: state.character,
  storyCounter: state.counter.storyCounter,
  questionCounter: state.counter.questionCounter,
  open: state.open,
  mute: state.mute,
  shouldDisplayQuestion: state.counter.shouldDisplayQuestion
});

const mapDispatch = (dispatch) => ({
  onClickNext: () => {
    dispatch(getNext());
  },
  onOpenMenu: () => {
    dispatch(openMenu());
  },
  onToggleQuestion: () => {
    dispatch(toggleQuestionResponse());
  },
  onClickMute: () => {
    dispatch(onMute());
  },
});

export default connect(mapState, mapDispatch)(Game);
