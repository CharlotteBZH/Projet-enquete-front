import { connect } from "react-redux";
import App from "../components/App";
import { checkAuth } from '../store/action/index.js';

const mapState = (state) => ({
    isLogged: state.user.isLogged
});

const mapDispatch = (dispatch) => ({
    checkAuth: () => {
        dispatch(checkAuth()); // pour l'authentification
    }
});

export default connect(mapState, mapDispatch)(App);
