import { connect } from 'react-redux';
import Registration from "../components/Registration"
import {
    registrationInputChange ,
    registrationSubmit
} from "../store/action";

const mapState=(state)=>({
    pseudo: state.user.pseudo,
    mail: state.user.mail,
    pwd: state.user.pdw,
});

const mapDispatch = (dispatch) => ({
    onInputChange: (changedData) => {
      dispatch(registrationInputChange(changedData));
    },
    onFormRegistration: () => {
      dispatch(registrationSubmit());
    },
});

export default connect(mapState, mapDispatch)(Registration);