import axios from 'axios';
import {  } from '../action';

const nextMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case toto:
        axios({
            method: 'get',
            url: 'http://localhost:3001/play/chapter/:chapterId'
        })
            .then((res) => {
                console.log(res.data);
                store.dispatch(getChapterSuccess(res.data));
            })
            .catch((err) => {
                console.log(err);
                store.dispatch(getChapterError('Impossible de récupérer les chapitres...'))
            })
      break;
    default:
      return;
  }
};

export default nextMiddleware;
