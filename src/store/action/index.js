
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';


export const changeField = (payload) => ({
    type: CHANGE_FIELD,
    payload
  });

export const login = (payload) => ({
    type: LOGIN,
    payload
  });

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});