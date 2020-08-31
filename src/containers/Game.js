import { connect } from "react-redux";
import Game from "../components/Game";
import { getNext } from '../store/action';


const mapState = (state) => ({
  place: state.place.placeName,
  storytelling: state.storytelling,
  question: state.question,
  character: state.character,
  storyCounter:state.counter.storyCounter,
  questionCounter: state.counter.questionCounter,
});



const mapDispatch = (dispatch) => ({
  onClickNext: () => {
    dispatch(getNext());
  },
});

export default connect(mapState, mapDispatch)(Game);
