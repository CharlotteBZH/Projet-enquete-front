export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';

export const CHECK_AUTH = 'CHECK_AUTH';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const REGISTRATION_INPUT_CHANGE = 'REGISTRATION_INPUT_CHANGE';
export const REGISTRATION_SUBMIT = 'REGISTRATION_SUBMIT';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';

export const GET_CHAPTER = 'GET_CHAPTER';
export const GET_CHAPTER_SUCCESS = 'GET_CHAPTER_SUCCES';
export const GET_CHAPTER_ERROR = 'GET_CHAPTER_ERROR';

export const GET_STORYTELLING_SUCCESS = 'GET_STORYTELLING_SUCCES';
export const GET_STORYTELLING_ERROR = 'GET_STORYTELLING_ERROR';

export const GET_NEXT = 'GET_NEXT';

export const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS';
export const GET_QUESTION_ERROR = 'GET_QUESTION_ERROR';


export const OPEN_MENU = 'OPEN_MENU';

export const TOGGLE_QUESTION_RESPONSE = 'TOGGLE_QUESTION_RESPONSE';






export const ON_MUTE = 'ON_MUTE';


export const onMute = () => ({
  type: ON_MUTE,
});


export const toggleQuestionResponse = () => ({
  type: TOGGLE_QUESTION_RESPONSE,
});


export const getStorytellingSuccess = (payload) => ({
  type: GET_STORYTELLING_SUCCESS,
  payload
});

export const getStorytellingError = (payload) => ({
  type: GET_STORYTELLING_ERROR,
  payload
});


export const openMenu = () => ({
  type: OPEN_MENU,
});




export const getChapter = () => ({
  type: GET_CHAPTER,
});

export const getChapterSuccess = (payload) => ({
  type: GET_CHAPTER_SUCCESS,
  payload
});

export const getChapterError = (payload) => ({
  type: GET_CHAPTER_ERROR,
  payload,
});


export const getNext = () => ({
  type: GET_NEXT,
});


export const getQuestionSuccess = (payload) => ({
  type: GET_QUESTION_SUCCESS,
  payload
});

export const getQuestionError = (payload) => ({
  type: GET_QUESTION_ERROR,
  payload,
});

export const checkAuth = () => ({
  type: CHECK_AUTH
});

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload
});

export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});

export const logout = () => ({
  type: LOGOUT
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});


export const registrationSubmit = () => ({
  type: REGISTRATION_SUBMIT,
});

export const registrationInputChange = (payload) => ({
  type: REGISTRATION_INPUT_CHANGE,
  payload,
});

export const registrationSuccess = (payload) => ({
  type: REGISTRATION_SUCCESS,
  payload
});

export const registrationError = (payload) => ({
  type: REGISTRATION_ERROR,
  payload
});