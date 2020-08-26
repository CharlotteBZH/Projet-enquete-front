import { connect } from "react-redux";
import Game from "../components/Game";
import { getNext } from '../store/action';

const mapState = (state) => ({
  game: state.game,
});

const mapDispatch = (dispatch) => ({
  onClickNext: () => {
    dispatch(getNext());
  },
});

export default connect(mapState, mapDispatch)(Game);


