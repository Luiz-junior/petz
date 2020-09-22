import {
  GET_POSTS,
  GET_POST_BY_ID,
  GET_POST_LIST_ID,
  DELETE_POSTS,
  ERROR
} from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  loading: true,
  deleted: false,
  error: ''
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.posts, loading: false }
    case GET_POST_BY_ID:
      return { ...state, post: action.post, loading: false }
    case GET_POST_LIST_ID:
      const p = [action.posts];
      return { ...state, posts: p.filter(p => p.id === parseInt(action.id)), loading: false }
    case DELETE_POSTS:
      return { ...state, posts: action.posts.filter(p => p.id !== action.id), deleted: true }
    case ERROR:
      return { ...state, error: action.errorStatus }
    default:
      return state;
  }
}

export default postsReducer