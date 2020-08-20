import { LOGIN_SUBMIT, LOGIN_INPUT_CHANGE } from "../action";

const initialState = {
  user: {
    pseudo: "mypseudo",
    mail: "mymail@gmail.com",
    pwd: 1234,
  },
  connected: {
    connected: false,
  },
  loading: false,
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
      default:
      return state;
     }
};
