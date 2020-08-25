// import axios from 'axios';
// import { GET_CHAPTER } from '../action';

// const nextMiddleware = (store) => (next) => (action) => {
//   next(action);
//   switch (action.type) {
//     case GET_CHAPTER:
//         axios({
//             method: 'get',
//             url: 'http://localhost:3001/play/chapter/:chapterId'
//         })
//             .then((res) => {
//                 console.log(res.data);
//                 // store.dispatch(******(res.data));
//             })
//             .catch((err) => {
//                 console.log(err);
//                 // store.dispatch(********('Impossible de récupérer les chapitres...'))
//             })
//       break;
//     default:
//       return;
//   }
// };

// export default nextMiddleware;
