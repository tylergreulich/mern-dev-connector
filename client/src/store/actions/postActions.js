import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  GET_ERRORS,
  DELETE_POST
} from './types';
import axios from 'axios';

export const addPost = postData => dispatch => {
  axios
    .post('api/posts', postData)
    .then(res => dispatch({ type: ADD_POST, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get('/api/posts')
    .then(res => dispatch({ type: GET_POSTS, payload: res.data }))
    .catch(err => dispatch({ type: GET_POSTS, payload: null }));
};

export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res => dispatch({ type: GET_POST, payload: res.data }))
    .catch(err => dispatch({ type: GET_POST, payload: null }));
};

export const deletePost = id => dispatch => {
  axios
    .delete(`http://localhost:5000/api/posts/${id}`)
    .then(res => dispatch({ type: DELETE_POST, payload: id }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const addLike = id => dispatch => {
  axios
    .post(`http://localhost:5000/api/posts/like/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const removeLike = id => dispatch => {
  axios
    .post(`http://localhost:5000/api/posts/unlike/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const addComment = (postId, newComment) => dispatch => {
  axios
    .post(`/api/posts/comment/${postId}`, newComment)
    .then(res => dispatch({ type: GET_POST, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};
