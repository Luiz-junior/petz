import api from "../../services/api";
import {
  GET_POSTS,
  GET_POST_BY_ID,
  GET_POST_LIST_ID,
  DELETE_POSTS,
  ERROR,
} from "./types";

export const getPosts = () => {
  return async (dispatch) => {
    const res = await api.get(`/posts?_page=1`);

    try {
      dispatch({ type: GET_POSTS, posts: res.data });
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: error });
    }
  };
};

export const getPostById = id => {
  return async (dispatch) => {
    const res = await api.get(`/posts/${id}`);

    try {
      dispatch({ type: GET_POST_BY_ID, post: res.data });
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: error });
    }
  };
};

export const getPostListId = id => {
  return async (dispatch) => {
    const res = await api.get(`/posts/${id}`);

    try {
      dispatch({ type: GET_POST_LIST_ID, posts: res.data, id });
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: error });
    }
  };
};

export const deletePosts = (posts, id) => {
  return async (dispatch) => {
    await api.delete(`/posts/${id}`);

    try {
      dispatch({ type: DELETE_POSTS, posts, id });
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: error });
    }
  };
};
