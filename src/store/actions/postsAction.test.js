import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from 'redux-thunk';

import * as actions from "./postsAction";
import * as types from "./types";
import * as mocks from '../../services/mocks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  it('should get Posts', () => {
    fetchMock.getOnce('/posts', {
      headers: { 'content-type': 'application/json' }
    });

    const store = mockStore();
    const expectedAction = { type: types.GET_POSTS, posts: mocks.posts };

    return store.dispatch(actions.getPosts()).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });

  it('should get a Post by ID', async () => {
    fetchMock.getOnce(`/posts`, {
      headers: { 'content-type': 'application/json' }
    });

    const store = mockStore();
    const expectedAction = { type: types.GET_POST_BY_ID, post: mocks.post };

    return store.dispatch(actions.getPostById(2)).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });

  it('should delete a Post', async () => {
    fetchMock.delete(`/posts`, {
      headers: { 'content-type': 'application/json' }
    });

    const store = mockStore();
    const expectedAction = { type: types.DELETE_POSTS, posts: mocks.posts, id: 2 };

    return store.dispatch(actions.deletePosts(mocks.posts, 2)).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
});