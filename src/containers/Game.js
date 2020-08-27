import { connect } from "react-redux";
import Game from "../components/Game";
import { getNext } from '../store/action';
import { compareStoryCounterWithStoryLength } from '../store/reducer/index';

const mapState = (state) => ({
  game: state.game,
  place: state.place.name,
  //infostory: compareStoryCounterWithStoryLength
});


/*const mapState = (state) => ({
  list: state.recipes.list,
  title: getTitleByRecipeNumber(state.recipes.list.length)
});*/

const mapDispatch = (dispatch) => ({
  onClickNext: () => {
    dispatch(getNext());
  },
});

export default connect(mapState, mapDispatch)(Game);


