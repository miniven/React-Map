import axios from 'axios';
import { API_TOKEN } from '../constants';

const fetchMiddleware = store => next => action => {
  if (action.type === 'FETCH_LIST') {
    axios.get(`https://slack.com/api/users.list?token=${API_TOKEN}`)
      .then(response => response.data.members)
      .then(members => {
        store.dispatch({ type: 'UPDATE_LIST', members });
      })
      .catch(err => console.error(err));
  }

  next(action);
};

export default fetchMiddleware;