//import { GET_RECIPES } from "../action";

const initialState = {
  user: {
    pseudo: "mypseudo",
    mail: "mymail@gmail.com",
    pwd: 1234,
  },
  connected: {
    connected: false,
  },
  game: {
    tagName: "toto",
    narration: "Hello World",
    question: "tu penses que... ?",
  },
};

export default (state = initialState, action = {}) => {
  console.log("coucou");
  //   switch (action.type) {
  //     case GET_RECIPES:
  //       return {
  //         ...state,
  //         loading: true
  //       };
  //     default:
  //       return state;
  //   }
};
