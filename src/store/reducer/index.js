import {
  LOGIN_SUBMIT,
  LOGIN_INPUT_CHANGE,
  REGISTRATION_SUBMIT,
  REGISTRATION_INPUT_CHANGE,
  GET_CHAPTER,
  GET_NEXT,
} from "../action";

const initialState = {
  user: {
    pseudo: "",
    mail: "",
    checkMail: "",
    pwd: "",
    checkPwd: "",
  },
  isLogged: false,
  connected: false,
  loading: false,
  //logged: false,
  game: {
    tagName: "toto",
    narration: "Hello World",
    question: "tu penses que Bidule à tuer machin.. ?",
    chapterId: 1,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_NEXT:
      return {
        ...state,
      };
    case GET_CHAPTER:
      return {
        ...state,
      };
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
    case REGISTRATION_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case REGISTRATION_INPUT_CHANGE:
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
