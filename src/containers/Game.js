import { connect } from "react-redux";
import Game from "../components/Game";
import { getNext } from '../store/action';
import { compareStoryCounterWithStoryLength } from '../store/reducer/index';

const mapState = (state) => ({
  game: state.game,
  chapter: state.chapter
});

const mapDispatch = (dispatch) => ({
  onClickNext: () => {
    dispatch(getNext());
  },
});

export default connect(mapState, mapDispatch)(Game);


