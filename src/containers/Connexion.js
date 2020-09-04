import { connect } from 'react-redux';
import Connexion from "../components/Connexion"
import {
  loginInputChange,
  loginSubmit,
  openMenu,
  onMute,
} from "../store/action";


const mapState = (state) => ({
  mail: state.user.mail,
  pwd: state.user.pwd,
  isLogged: state.user.isLogged,
  pseudo: state.user.pseudo,
  open: state.open,
  mute: state.mute,
});


const mapDispatch = (dispatch) => ({
  onInputChange: (changedData) => {
    dispatch(loginInputChange(changedData));
  },
  onFormLogin: () => {
    dispatch(loginSubmit());
  },
  onOpenMenu: () => {
    dispatch(openMenu());
  },
  onClickMute: () => {
    dispatch(onMute());
  },
});


export default connect(mapState, mapDispatch)(Connexion);