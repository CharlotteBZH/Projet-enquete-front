import { connect } from 'react-redux';
import Connexion from "../components/Connexion"
import {
    loginInputChange,
    loginSubmit,
  } from "../store/action";


const mapState=(state)=>({
    mail : state.user.mail,
    pwd: state.user.pdw,
});


const mapDispatch = (dispatch) => ({
      onInputChange: (changedData) => {
        dispatch(loginInputChange(changedData));
      },
      onFormLogin: () => {
        dispatch(loginSubmit());
      },
});


export default connect(mapState, mapDispatch)(Connexion);
