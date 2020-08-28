import { connect } from "react-redux";
import Game from "../components/Game";
import { getNext } from '../store/action';
//import { compareStoryCounterWithStoryLength } from '../store/reducer/index';

const mapState = (state) => ({
  place: state.place,
  storytelling: state.storytelling,
  //chapter: state.chapter,
  //infostory: compareStoryCounterWithStoryLength
});



const mapDispatch = (dispatch) => ({
  onClickNext: () => {
    dispatch(getNext());
  },
});

export default connect(mapState, mapDispatch)(Game);
