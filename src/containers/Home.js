import { connect } from 'react-redux';
import Home from '../components/Home';


const mapState=(state)=>({
    // connected: state.connected.connected,
});

const mapDispatch =null;

export default connect(mapState, mapDispatch)(Home);