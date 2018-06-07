import { GET_POST, GET_POSTS, ADD_POST, DELETE_POST } from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {};

    default:
      return state;
  }
}
