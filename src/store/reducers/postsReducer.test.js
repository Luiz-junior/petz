import reducer from './postsReducer';
import { posts, post } from '../../services/mocks';
import * as types from '../actions/types';


describe('Posts reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      posts: [],
      post: {},
      loading: true,
      deleted: false,
      error: ''
    })
  });

  it('should handle GET_POSTS', () => {
    expect(
      reducer([], {
        type: types.GET_POSTS,
        posts,
      })
    ).toEqual({ posts, loading: false })
  });

  it('should handle GET_POST_BY_ID', () => {
    expect(
      reducer([], {
        type: types.GET_POST_BY_ID,
        post,
      })
    ).toEqual({ post, loading: false })
  });

  it('should handle DELETE_POSTS', () => {
    expect(
      reducer([], {
        type: types.DELETE_POSTS,
        posts,
      })
    ).toEqual({ posts, deleted: true })
  });
});