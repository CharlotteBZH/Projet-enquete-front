import { connect } from 'react-redux';
import Alias from '../components/Alias';
import {
    loginInputChange,
    loginSubmit, logout,
} from "../store/action";

const mapState = (state) => ({
    mail: state.user.mail,
    pwd: state.user.pwd,
    isLogged: state.user.isLogged,
    pseudo: state.user.pseudo,
    disconnected: state.disconnected
});

const mapDispatch = (dispatch) => ({
    onInputChange: (changedData) => {
        dispatch(loginInputChange(changedData));
    },
    onFormLogin: () => {
        dispatch(loginSubmit());
    },
    handleLogout: () => {
        console.log('logout');
        dispatch(logout());
    },


});

export default connect(mapState, mapDispatch)(Alias);
