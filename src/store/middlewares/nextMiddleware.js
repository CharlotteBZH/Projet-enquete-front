import axios from 'axios';
import { GET_NEXT, getCharacterSuccess, getCharacterError, getChapterSuccess, getChapterError, getStorytellingSuccess, getStorytellingError, getQuestionSuccess, getQuestionError } from '../action';

const nextMiddleware = (store) => (next) => (action) => {

  const chapterId = store.getState().counter.chapterCounter + 1;
  const situationId = store.getState().counter.situationCounter + 1;
  const storyCounter = store.getState().counter.storyCounter;
  const storyLength = store.getState().storytelling.length;
  console.log('first time', storyCounter, storyLength)

  next(action);
  switch (action.type) {
    case GET_NEXT:

      if (!store.getState().counter.shouldDisplayQuestion && (storyCounter === storyLength)) {
        axios({
          method: 'get',
          url: `http://localhost:3001/play/situation/${chapterId}`
        })
          .then((res) => {
            // store.dispatch(getChapterSuccess(res.data));
            const chapter = res.data;

            axios({
              method: 'get',
              url: `http://localhost:3001/play/storytelling/${chapterId}`
            })
              .then((res) => {
                // store.dispatch(getStorytellingSuccess(res.data));
                const story = res.data;

                axios({
                  method: 'get',
                  url: `http://localhost:3001/play/character/${situationId}`
                })
                  .then((res) => {
                    const characters = res.data;

                    axios({
                      method: 'get',
                      url: `http://localhost:3001/play/question/${situationId}`
                    })
                      .then((res) => {
                        const questions = res.data;

                        store.dispatch(getQuestionSuccess(questions));
                        store.dispatch(getCharacterSuccess(characters));
                        store.dispatch(getStorytellingSuccess(story));
                        store.dispatch(getChapterSuccess(chapter));
                      })
                      .catch((err) => {
                        console.log(err)
                        store.dispatch(getQuestionError('Impossible de récupérer les questions...'))
                      })
                  })
                  .catch((err) => {
                    store.dispatch(getCharacterError('Impossible de récupérer les characters...'))
                  })

              })
              .catch((err) => {
                store.dispatch(getStorytellingError('Impossible de récupérer les story...'))
              })

          })
          .catch((err) => {
            store.dispatch(getChapterError('Impossible de récupérer les chapitres...'))
          })
      }

      break;
    default:
      return;
  }
};

export default nextMiddleware;