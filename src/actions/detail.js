import axios from 'axios';

export function fetch(id) {
  return function (dispatch) {
    dispatch({
      type: 'detail_fetch_start',
      payload: {
        loading: true,
      }
    });
    axios.get('https://cnodejs.org/api/v1/topic/' + id)
      .then(({data}) => {
        dispatch({
          type: 'detail_fetch',
          payload: {
            topic: data.data,
            loading: false,
          }
        })
      })
      .catch(err => console.error(err));
  }
}