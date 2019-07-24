export default function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        likes: action.payload.data.data.count
      };
      
    default:
      return state;
  }
};