import { connect } from "react-redux";
import Home from "../components/Home";
import { getChapter } from '../store/action';

const mapState = (state) => ({
  // connected: state.connected.connected,
});

const mapDispatch = (dispatch) => ({
  onClickPlay: () => {
    dispatch(getChapter());
  },
});

export default connect(mapState, mapDispatch)(Home);
