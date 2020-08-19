import { connect } from 'react-redux';
import Home from '../components/Home';


const mapState=(state)=>({
    connected: state.connected,
});

const mapDispatch ;

export default connect(mapState, mapDispatch)(Home);