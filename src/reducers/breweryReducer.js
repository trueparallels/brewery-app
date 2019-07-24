export default function reducer(state, action) {
  const { data } = action.payload;

  switch (action.type) {
    case 'STATE_FILTER_CHANGE':
      return {
        ...state,
        filter: action.payload.filter,
        page: 1,
        data: [],
      };
    case 'LOAD_MORE':
      return {
        ...state,
        page: state.page + 1,
      };
    case 'UPDATE_DATA':
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
}
