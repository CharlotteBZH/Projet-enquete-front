import { connect } from 'react-redux';
import Log from "../components/Log"

const mapState=(state)=>({
    pseudo : state.user.pseudo,
    connected: state.connected,
});


const mapDispatch =null;

export default connect(mapState, mapDispatch)(Log);