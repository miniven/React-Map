import axios from 'axios';

const API_TOKEN = 'xoxp-228578268661-277959589909-352112584933-7f059ddd83fadb8a31176a46d8c15344';

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