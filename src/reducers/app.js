export default (state = {
                  loading: true,
                  list: [],
                  reload: true,
                  page: 1,
                }, action) => {
  switch (action.type) {
    case 'app_fetch':
      return {
        ...state,
        loading: action.payload.loading,
        list: state.list.concat(action.payload.list),
        loadmore: action.payload.loadmore,
      };
    case 'app_load_more_start':
      return {
        ...state,
        loadmore: action.payload.loadmore,
      };
    case 'app_load_more':
      return {
        ...state,
        loading: action.payload.loading,
        list: state.list.concat(action.payload.list),
        loadmore: action.payload.loadmore,
        page: action.payload.page,
      };
    default:
      return state;
  }
}