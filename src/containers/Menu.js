import { connect } from "react-redux";
import Menu from "../components/Menu";
import { openMenu } from '../store/action';

const mapState = (state) => ({
    open: state.open,
});

const mapDispatch = (dispatch) => ({
    onOpenMenu: () => {
        dispatch(openMenu());
    },
});

export default connect(mapState, mapDispatch)(Menu);


