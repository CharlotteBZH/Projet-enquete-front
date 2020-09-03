import { connect } from "react-redux";
import Home from "../components/Home";
import { getChapter, openMenu, onMute } from "../store/action";

const mapState = (state) => ({
  open: state.open,
  mute: state.mute,
});

const mapDispatch = (dispatch) => ({
  onClickPlay: () => {
    dispatch(getChapter());
  },
  onOpenMenu: () => {
    dispatch(openMenu());
  },
  onClickMute: () => {
    dispatch(onMute());
  },
});

export default connect(mapState, mapDispatch)(Home);
