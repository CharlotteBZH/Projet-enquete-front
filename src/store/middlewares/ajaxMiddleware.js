import axios from 'axios';
//import { GET_RECIPES } from '../action';


// const ajaxMiddleware = (store) => (next) => (action) => {
//   next(action);
//   switch (action.type) {
//     case GET_RECIPES:
//       axios({
//         method: 'get',
//         url: 'http://localhost:3001/recipes'
//       })
//         .then((res) => {
//           console.log(res.data);
//           store.dispatch(getRecipesSuccess(res.data));
//         })
//         .catch((err) => {
//           console.log(err);
//           store.dispatch(getRecipesError("Impossible de récupérer les recettes..."))
//         })
//       break;
//     default:
//       return;

//   }
// };

export default ajaxMiddleware;