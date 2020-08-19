//import { GET_RECIPES } from "../action";


export const initialState = {
  user: {
    pseudo: "mypseudo",
    mail: "mymail@gmail.com",
    pwd: 1234
  },
  connected : false,
  game: {
    tagName: "toto",
    narration: "Hello World",
    question: "tu penses que... ?"
  },

};

// export default (state = initialState, action = {}) => {
//   switch (action.type) {
//     case GET_RECIPES:
//       return {
//         ...state,
//         loading: true
//       };
//     default:
//       return state;
//   }
// };


