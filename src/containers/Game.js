import { connect } from 'react-redux';
import Game from '../components/Game';


const mapState=(state)=>({
    tagName: state.game.tagName,
    narration: state.game.narration,
    question: state.game.question,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Game);


