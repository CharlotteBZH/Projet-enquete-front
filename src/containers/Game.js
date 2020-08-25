import { connect } from "react-redux";
import Game from "../components/Game";

import { getChapter } from "../store/action";

const mapState = (state) => ({
  game: state.game.chapterId,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Game);
