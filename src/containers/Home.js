import { connect } from "react-redux";
import Home from "../components/Home";
import { getChapter, openMenu } from "../store/action";

const mapState = (state) => ({
  open: state.open,
});

const mapDispatch = (dispatch) => ({
  onClickPlay: () => {
    dispatch(getChapter());
  },
  onOpenMenu: () => {
    dispatch(openMenu());
  },
});

export default connect(mapState, mapDispatch)(Home);
