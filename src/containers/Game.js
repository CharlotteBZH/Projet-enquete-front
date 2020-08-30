import { connect } from "react-redux";
import Game from "../components/Game";
import { getNext } from '../store/action';


const mapState = (state) => ({
  place: state.place,
  storytelling: state.storytelling,
  question: state.question,
  character: state.character,
});



const mapDispatch = (dispatch) => ({
  onClickNext: () => {
    console.log("toto")
    dispatch(getNext());
  },
});

export default connect(mapState, mapDispatch)(Game);
