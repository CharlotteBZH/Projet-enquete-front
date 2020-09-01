import axios from 'axios';
import { GET_NEXT, getChapterSuccess, getChapterError, getStorytellingSuccess, getStorytellingError, getQuestionSuccess, getQuestionError } from '../action';

const nextMiddleware = (store) => (next) => (action) => {

  const chapterId = store.getState().counter.chapterCounter+1;
  const situationId = store.getState().counter.situationCounter;

  next(action);
  switch (action.type) {
    case GET_NEXT:
      console.log("chapter", chapterId);
      axios({
        method: 'get',
        url: `http://localhost:3001/play/situation/${chapterId}`
      })
        .then((res) => {
          store.dispatch(getChapterSuccess(res.data));


          axios({
            method: 'get',
            url: `http://localhost:3001/play/storytelling/${chapterId}`
          })
            .then((res) => {
              store.dispatch(getStorytellingSuccess(res.data));
            
              axios({
                method: 'get',
                url: `http://localhost:3001/play/question/${situationId}`
              })
                .then((res) => {
                  store.dispatch(getQuestionSuccess(res.data));
                })
                .catch((err) => {
                  store.dispatch(getQuestionError('Impossible de récupérer les questions...'))
                })
            
            })
            .catch((err) => {
              store.dispatch(getStorytellingError('Impossible de récupérer les story...'))
            })

        })
        .catch((err) => {
          store.dispatch(getChapterError('Impossible de récupérer les chapitres...'))
        })
      break;
    default:
      return;
  }
};

export default nextMiddleware;

