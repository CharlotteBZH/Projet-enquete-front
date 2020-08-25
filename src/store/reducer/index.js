import { LOGIN_SUBMIT, LOGIN_INPUT_CHANGE, REGISTRATION_SUBMIT, REGISTRATION_INPUT_CHANGE } from "../action";

const initialState = {
  user: {
    pseudo: "",
    mail: "",
    checkMail: "",
    pwd:"",
    checkPwd:"",
  },
  connected:  false,
  loading: false,
  //logged: false,
  game: {
    tagName: "toto",
    narration: "Hello World",
    question: "tu penses que... ?",
  },
};

export default (state = initialState, action = {}) => {
     switch (action.type) {
       case LOGIN_SUBMIT:
         return {
          ...state,
          loading: true,
        };
        case LOGIN_INPUT_CHANGE:
          return {
            ...state,
            user: {
              ...state.user,
              ...action.payload,
            },
          };
        case REGISTRATION_SUBMIT :
          return {
            ...state,
            loading: true,
          };
        case REGISTRATION_INPUT_CHANGE :
          return {
            ...state,
            user: {
              ...state.user,
              ...action.payload,
            },
          };    
              
      default:
      return state;
     }
};
