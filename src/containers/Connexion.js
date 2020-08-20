import { connect } from 'react-redux';
import Connexion from "../components/Connexion"

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
    }
});


export default connect(mapState, mapDispatch)(Connexion);

