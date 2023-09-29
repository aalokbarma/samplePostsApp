import {takeEvery, put, call} from 'redux-saga/effects';
import { POSTS_LIST, SET_POSTS_DATA, ERROR } from './constants';
import axios from 'axios';

// The * mark next to function used to handle async data or make the function iterable and to be executed
function* postsList(): Generator {
  try{
  // As we used * mark in the function so it catch the data asynchronously using this 'yield' keyword
  const response: any = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts")
 
  // the following line will convert fetched data into json format.
  // Again as it returns promise, so we use 'yield' keyword.
  // following 'put' statement do whatever we put inside this method will connect with our reducer
    yield put({ type: SET_POSTS_DATA, payload: response.data });
  } 
  catch(error){
    yield put({type: ERROR, error})
  }
}
export function* SagaData() {
  yield takeEvery(POSTS_LIST, postsList);
}

