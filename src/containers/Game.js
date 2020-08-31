import { connect } from "react-redux";
import Game from "../components/Game";
import { getNext, openMenu } from "../store/action";

const mapState = (state) => ({
  place: state.place,
  storytelling: state.storytelling,
  question: state.question,
  character: state.character,
  storyCounter: state.counter.storyCounter,
  questionCounter: state.counter.questionCounter,
  open: state.open,
});

const mapDispatch = (dispatch) => ({
  onClickNext: () => {
    dispatch(getNext());
  },
  onOpenMenu: () => {
    dispatch(openMenu());
  },
});

export default connect(mapState, mapDispatch)(Game);
