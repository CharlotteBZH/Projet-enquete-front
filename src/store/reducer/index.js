import {
  LOGIN_SUBMIT,
  LOGIN_INPUT_CHANGE,
  LOGIN_SUCCESS, LOGIN_ERROR,
  LOGOUT_SUCCESS,
  REGISTRATION_SUBMIT,
  REGISTRATION_INPUT_CHANGE,
  REGISTRATION_SUCCESS, REGISTRATION_ERROR,
  GET_CHAPTER,
  GET_CHAPTER_SUCCESS,
  GET_CHAPTER_ERROR,
  GET_NEXT,
  GET_STORYTELLING_SUCCESS,
  GET_STORYTELLING_ERROR,
  OPEN_MENU,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_ERROR,
  TOGGLE_QUESTION_RESPONSE,
  ON_MUTE,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_ERROR
} from "../action";

const initialState = {
  user:
  {
    id: "",
    pseudo: '',
    mail: '',
    checkMail: "",
    pwd: '',
    checkPwd: "",
    isLogged: false,
    error: ''
  },

  character: [],
  hide: false,
  place: {},
  chapter: {},
  question: [],
  storytelling: [
    {
      id: "",
      sentence: "",
    },
  ],

  mute: false,
  loading: false,
  open: false,
  disconnected: false,


  counter: {
    chapterCounter: 1,
    storyCounter: 1,
    questionCounter: 1,
    situationCounter: 1,
    characterCounter: 1,
    shouldDisplayQuestion: false,
    shouldDisplayChapter: true
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_MUTE:
      return {
        ...state,
        mute: !state.mute,
      };

    case TOGGLE_QUESTION_RESPONSE:
      return {
        ...state,
        hide: !state.hide,
      };

    case OPEN_MENU:
      return {
        ...state,
        open: !state.open,
      };

    case GET_CHAPTER:
      return {
        ...state,
      };
    case GET_CHAPTER_SUCCESS:
      //console.log("reducer:", action.payload[0]);
      let payload = action.payload[0];
      return {
        ...state,
        open: false,
        place: {
          placeId: payload["place.id"],
          placeName: payload["place.name"],
          placePicture: payload["place.picture"],
        },
        chapter: [
          {
            chapterId: payload["chapter.id"],
          },
        ],
      };

    case GET_CHAPTER_ERROR:
      return {
        ...state,
      };

    case GET_STORYTELLING_SUCCESS:
      return {
        ...state,
        storytelling: action.payload,
      };

    case GET_STORYTELLING_ERROR:
      return {
        ...state,
      };

    case GET_NEXT:
      return {
        ...state,
        hide: true,
        counter: {
          ...state.counter,
          ...setCompter(state)
        },
      };

    case GET_CHARACTER_SUCCESS:
      console.log("toto : ", action.payload);
      return {
        ...state,
        character: [
          ...action.payload
        ],
      };
    case GET_CHARACTER_ERROR:
      return {
        ...state,
      };

    case GET_QUESTION_SUCCESS:
      return {
        ...state,
        question: action.payload,
        hide: !state.hide,
      };
    case GET_QUESTION_ERROR:
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
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
          isLogged: true,
        },
        disconnected: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        pwd: '',
        error: action.payload,
        pseudo: '',
        user: {},
        isLogged: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        disconnected: true,
        user: {}
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
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
          isLogged: true,
        },
        disconnected: false,
      };
    case REGISTRATION_ERROR:
      return {
        ...state,
        pwd: '',
        error: action.payload,
        pseudo: '',
        user: {},
        isLogged: false,
        disconnected: true,
      };

    default:
      return state;
  }
};

let setCompter = (oldState) => {
  const state = { ...oldState };
  console.log("question : ", state.question);

  if (state.counter.chapterCounter !== 18) {
    state.counter.shouldDisplayChapter = true;
    if (state.counter.storyCounter < state.storytelling.length) {
      //alert("story incrementation")
      state.counter.storyCounter++;
      state.counter.shouldDisplayQuestion = false;
      // Vérifier si storyCounter === longueur tableau - 1 && questions.length 
    } else if ((state.counter.storyCounter === state.storytelling.length) && (state.question.length) && !state.counter.shouldDisplayQuestion) {
      state.counter.shouldDisplayQuestion = true
    }

    else if (state.counter.questionCounter < state.question.length) {
      //alert("question incrementation")
      state.counter.questionCounter++;
      //Vérifier si arrivé au bout des questions || (pas de question && aubout des story
    } else if (state.counter.questionCounter === state.question.length ||
      (state.question.length === 0 && state.counter.storyCounter === state.storytelling.length)) {
      state.counter.shouldDisplayQuestion = false;

      //alert("chapter incrementation")
      state.counter.chapterCounter++;
      state.counter.situationCounter++;
      state.counter.questionCounter = 1;
      state.counter.storyCounter = 1;
    }

    console.log("chapterSortie : ", state.counter.chapterCounter);
    console.log("storySortie : ", state.counter.storyCounter);
    console.log("QuestionSortie : ", state.counter.questionCounter);
    return state.counter;

  } else {
    state.counter.shouldDisplayChapter = false;
    return state.counter;
  }
};