import { connect } from 'react-redux';
import Game from '../components/Game';


const mapState=(state)=>({
    game : state.game,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Game);


