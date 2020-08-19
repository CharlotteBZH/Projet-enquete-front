import { connect } from 'react-redux';
import Connexion from "../components/Connexion"

const mapState=(state)=>({
    mail : state.user.mail,
    pwd: state.user.pdw,
});

const mapDispatch ;

export default connect(mapState, mapDispatch)(Connexion);



