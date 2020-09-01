import { connect } from "react-redux";
import Menu from "../components/Menu";
import { openMenu, onMute } from '../store/action';

const mapState = (state) => ({
    open: state.open,
    mute: state.mute,
});

const mapDispatch = (dispatch) => ({
    onOpenMenu: () => {
        dispatch(openMenu());
    },
    onClickMute: () => {
        dispatch(onMute());
    },
});

export default connect(mapState, mapDispatch)(Menu);


