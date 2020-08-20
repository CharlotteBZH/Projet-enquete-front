import { connect } from 'react-redux';
import Alias from '../components/Alias';

const mapState=(state)=>({
    pseudo:state.user.pseudo
});

const mapDispatch =null;

export default connect(mapState, mapDispatch)(Alias);
