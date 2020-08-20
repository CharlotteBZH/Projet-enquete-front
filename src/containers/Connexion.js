import { connect } from 'react-redux';
import Connexion from "../components/Connexion"
import {
    login,
    changeField,
    loginSubmit,
  } from "../store/action";


const mapState=(state)=>({
    mail : state.user.mail,
    pwd: state.user.pdw,
});


const mapDispatch = (dispatch) => ({
    changeField: (value, name) => {
        const changeObject = {
          [name]: value
        };
        console.log(changeObject)
        dispatch(changeField(changeObject));
    
    }, 
    handleLogin: () => {
        console.log('login');
        dispatch(login());
    },
    onFormLogin: () => {
        console.log("Il ya eu submit !");
        dispatch(loginSubmit());
      },
});


export default connect(mapState, mapDispatch)(Connexion);

