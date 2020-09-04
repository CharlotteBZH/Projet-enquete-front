import { connect } from 'react-redux';
import Registration from "../components/Registration"
import {
  registrationInputChange,
  registrationSubmit,
  openMenu,
  onMute,
} from "../store/action";

const mapState = (state) => ({
  pseudo: state.user.pseudo,
  mail: state.user.mail,
  checkMail: state.user.checkMail,
  pwd: state.user.pwd,
  checkPwd: state.user.checkPwd,
  open: state.open,
  mute: state.mute,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (changedData) => {
    dispatch(registrationInputChange(changedData));
  },
  onFormRegistration: () => {
    dispatch(registrationSubmit());
  },
  onOpenMenu: () => {
    dispatch(openMenu());
  },
  onClickMute: () => {
    dispatch(onMute());
  },
});

export default connect(mapState, mapDispatch)(Registration);