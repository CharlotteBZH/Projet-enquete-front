import axios from 'axios';
import {
    REGISTRATION_SUBMIT,
    registrationSuccess,
    RegistrationError,
    LOGIN_SUBMIT,
    LOGOUT, logoutSuccess,
    loginSuccess,
    loginError
} from '../action';

const authMiddleware = (store) => (next) => (action) => {

    next(action);
    switch (action.type) {
        case LOGIN_SUBMIT:
            const { user } = store.getState();
            axios({
                method: 'post',
                url: `http://localhost:3001/login`,
                data: user,
                withCredentials: true // pour que le serveur sache qui je suis grace à la session
            })
                .then((res) => {
                    store.dispatch(loginSuccess(res.data));

                })
                .catch((err) => {
                    console.error(err);
                    store.dispatch(loginError('Impossible de connecter cet utilisateur'));
                })
            break;
        case REGISTRATION_SUBMIT: {
            const { user } = store.getState();
            axios({
                method: 'post',
                url: 'http://localhost:3001/logon',
                data: user,
                withCredentials: true
            })
                .then((res) => {
                    console.log(res.data);
                    store.dispatch(registrationSuccess(res.data));
                })
                .catch((err) => {
                    console.error(err);
                })
            break;
        }
        case LOGOUT: {
            axios({
                method: 'post',
                url: 'http://localhost:3001/logout',
                withCredentials: true
            })
                .then((res) => {
                    console.log(res.data);
                    store.dispatch(logoutSuccess());
                })
                .catch((err) => {
                    console.error(err);
                })
            break;
        }

        default:
            return;
    }
};

export default authMiddleware;