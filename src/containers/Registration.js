import { connect } from 'react-redux';
import Registration from "../components/Registration"

const mapState=(state)=>({
    pseudo: state.user.pseudo,
    mail: state.user.mail,
    pwd: state.user.pdw,
});

const mapDispatch=null;

export default connect(mapState, mapDispatch)(Registration);