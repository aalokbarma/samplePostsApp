import {takeEvery, put} from 'redux-saga/effects';
import { POSTS_LIST, SET_POSTS_DATA } from './constants';

// The * mark next to function used to handle async data or make the function iterable and to be executed
function* postsList() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // As we used * mark in the function so it catch the data asynchronously using this 'yield' keyword
    let data = yield fetch(url);

    // the following line will convert fetched data into json format.
    // Again as it returns promise, so we use 'yield' keyword.
    data = yield data.json();
    // following 'put' statement do whatever we put inside this method will connect with our reducer
    yield put({type: SET_POSTS_DATA, payload: data})
  }
  function* SagaData() {
    yield takeEvery(POSTS_LIST, postsList);
  }

export default SagaData;