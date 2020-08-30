import {
  LOGIN_SUBMIT,
  LOGIN_INPUT_CHANGE,
  REGISTRATION_SUBMIT,
  REGISTRATION_INPUT_CHANGE,
  GET_CHAPTER,
  GET_CHAPTER_SUCCESS,
  GET_CHAPTER_ERROR,
  GET_NEXT,
  GET_STORYTELLING_SUCCESS,
  GET_STORYTELLING_ERROR,
  OPEN_MENU,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_ERROR
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
  place: [],
  chapter: {},
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
    situationCounter: 1,
    //characterCounter : 1, Pour quand il y aura un charactere
  },
  /*game: {
    chapterId: 1,
    storytellingId: 1,
    questionId: 1,
    situationId: 1,
  },*/
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
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
      console.log("reducer:", action.payload[0]);
      const payload = action.payload[0];
      return {
        ...state,
        place: [
          {
            placeId: payload["place.id"],
            placeName: payload["place.name"],
            placePicture: payload["place.picture"]
          }
        ],
        chapter: [
          {
            chapterId: payload["chapter.id"]
          }
        ]
      };

      case GET_CHAPTER_ERROR:
        return {
          ...state,
        };

    case GET_STORYTELLING_SUCCESS:
      return {
        ...state,
        storytelling: action.payload
      };
   
      case GET_STORYTELLING_ERROR:
        return {
          ...state,
        };

    case GET_NEXT:
      return {
        ...state,
         counter:
        setCompter(state)
        
      };

    case GET_QUESTION_SUCCESS:
      return {
        ...state,
        question: action.payload
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

let setCompter = (state) => {
  //console.log("coucou");
  console.log("chapitreC : ", state.counter.chapterCounter);
  console.log("chapterC : ", state.counter.chapterCounter);
  console.log("storyC : " ,state.counter.storyCounter);
  console.log("questionC : ", state.counter.questionCounter);
  console.log("characterCounter : ", state.counter.characterCounter);
  if (state.counter.storyCounter <= state.storytelling.length) {
    //console.log("1");
    state.counter.chapterCounter= state.counter.chapterCounter;
    state.counter.questionCounter= state.counter.questionCounter;
    state.counter.storyCounter++;
    state.counter.situationCounter = state.counter.situationCounter;
  }else if (state.counter.questionCounter <= state.question.length) {
    //console.log("2");
    state.counter.chapterCounter=state.counter.chapterCounter;
    state.counter.questionCounter++;
    state.counter.storyCounter=state.counter.storyCounter;
    state.counter.situationCounter = state.counter.situationCounter;
  }else{
    //console.log("3");
    state.counter.chapterCounter++;
    state.counter.situationCounter++;
    let i;
    let j;
    for (i=state.question.length; i>=1; i--){ // moche
      state.counter.questionCounter--;
    }
    for (j=state.storytelling.length; j>=1; j--){ // moche
      state.counter.storyCounter--;
    }
  }
  //console.log("fin");
  return state.counter;
};

