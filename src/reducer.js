export default function reducer(state, action) {
  switch (action.type) {
    case 'STATE_FILTER_CHANGE':
      return {
        ...state,
        filter: action.payload.filter,
        page: 1,
        data: []
      };
    case 'LOAD_MORE':
      return {
        ...state,
        page: state.page + 1
      };
    case 'UPDATE_DATA':
      const { data } = action.payload;
      return {
        ...state,
        data: data
      };
    default:
      return state;
  }
};