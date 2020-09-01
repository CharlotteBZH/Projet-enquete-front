/* on ne s'en sert plus, tout a été mis dans le reducer/index.js

import { LOGIN_SUCCESS, LOGIN_ERROR } from '../action/index.js';


const stateInitial = {
  mail: 'player@gmail.com',
  pwd: '1234',
  isLogged: false,
  pseudo: 'Player',
  error: '',
  user: {}
};

export default (state = stateInitial, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        mail: '',
        pwd: '',
        error: '',
        user: action.payload,
        pseudo: action.payload.pseudo // à vérifier car avant ct loggedmessage avec action.payload.username
      };
    case LOGIN_ERROR:
      return {
        ...state,
        password: '',
        error: action.payload,
        pseudo: '',
        user: {},
        isLogged: false
      };
    default:
      return state;
  }
};
*/