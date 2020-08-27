import {
  LOGIN_SUBMIT,
  LOGIN_INPUT_CHANGE,
  REGISTRATION_SUBMIT,
  REGISTRATION_INPUT_CHANGE,
  GET_CHAPTER,
  GET_NEXT,
  GET_CHAPTER_SUCCES,
  GET_CHAPTER_ERROR,
  OPEN_MENU,
} from "../action";

const initialState = {
  user: [
    {
      id: "",
      pseudo: "",
      mail: "",
      checkMail: "",
      pwd: "",
      checkPwd: "",
    },
  ],
  character: [
    {
      id: "",
      name: "jules",
      picture: "",
      is_gulty: "",
      is_suspect: "",
      alibi: "",
    },
  ],
  place: [
    {
      id: "",
      name: "",
      picture: "",
    },
  ],
  chapter: {
    id: "",
    name: "",
  },
  question: [
    {
      id: "",
      description: "",
      answer: "",
    },
  ],
  storytelling: [
    {
      id: "",
      sentence: "",
    },
  ],
  isLogged: false,
  connected: false,
  loading: false,
  open: false,
  //logged: false,
  counter: {
    chapterCounter: 1,
    storyCounter: 1,
    questionCounter: 1,
  },
  game: {
    tagName: "toto",
    narration: "Hello World",
    question: "tu penses que Bidule à tuer machin.. ?",
    chapterId: 1,
    storytellingId: 1,
    questionId: 1,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        open: !state.open,
      };
    case GET_CHAPTER_SUCCES:
      return {
        ...state,
        //situation: action.payload,
      };
    case GET_CHAPTER_ERROR:
      return {
        ...state,
        //situation: action.payload,
      };
    case GET_NEXT:
      return {
        ...state,
        // counter: state.counter
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

export const compareStoryCounterWithStoryLength = () => {
  if (state.counter.storyCounter <= state.storytelling.length) {
     state.counter.storytelling++;
  }
  return "";
};
