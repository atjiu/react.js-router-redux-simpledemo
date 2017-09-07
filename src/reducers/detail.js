export default (state = {
                  loading: true,
                  topic: {}
                }, action) => {
  switch (action.type) {
    case 'detail_fetch_start':
      return {
        ...state,
        loading: action.payload.loading,
      };
    case 'detail_fetch':
      return {
        ...state,
        loading: action.payload.loading,
        topic: action.payload.topic
      };
    default:
      return state;
  }
}