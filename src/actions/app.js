import axios from 'axios';

export function fetch() {
  return function (dispatch) {
    axios.get('https://cnodejs.org/api/v1/topics')
      .then(({data}) => {
        dispatch({
          type: 'app_fetch',
          payload: {
            loading: false,
            list: data.data,
            loadmore: false,
          }
        })
      })
      .catch(err => console.error(err));
  }
}
export function loadmore(page) {
  return function (dispatch) {
    dispatch({
      type: 'app_load_more_start',
      payload: {
        loadmore: true,
      }
    });
    axios.get('https://cnodejs.org/api/v1/topics?page=' + page)
      .then(({data}) => {
        dispatch({
          type: 'app_load_more',
          payload: {
            loading: false,
            list: data.data,
            page: page,
            loadmore: false,
          }
        })
      })
      .catch(err => console.error(err));
  }
}