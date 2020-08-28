export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';

export const GET_CHAPTER = 'GET_CHAPTER';
export const GET_CHAPTER_SUCCES = 'GET_CHAPTER_SUCCES';
export const GET_CHAPTER_ERROR = 'GET_CHAPTER_ERROR';

export const GET_STORYTELLING_SUCCES = 'GET_STORYTELLING_SUCCES';

export const GET_NEXT = 'GET_NEXT';
export const OPEN_MENU = 'OPEN_MENU';


export const REGISTRATION_INPUT_CHANGE = 'REGISTRATION_INPUT_CHANGE';
export const REGISTRATION_SUBMIT = 'REGISTRATION_SUBMIT';

export const getStorytellingSucces = (payload) => ({
  type: GET_STORYTELLING_SUCCES,
  payload
});

export const openMenu = () => ({
  type: OPEN_MENU,
});

export const getChapter = () => ({
  type: GET_CHAPTER,
});

export const getChapterSucces = (payload) => ({
  type: GET_CHAPTER_SUCCES,
  payload
});

export const getChapterError = (payload) => ({
  type: GET_CHAPTER_ERROR,
  payload,
});


export const getNext = () => ({
  type: GET_NEXT,
});


export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});

export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});


export const registrationSubmit = () => ({
  type: REGISTRATION_SUBMIT,
});

export const registrationInputChange = (payload) => ({
  type: REGISTRATION_INPUT_CHANGE,
  payload,
});