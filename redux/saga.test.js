import { ERROR, POSTS_LIST, SET_POSTS_DATA } from './constants';
import { expectSaga } from 'redux-saga-test-plan';
import axios from 'axios';
import { SagaData } from './saga';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('API Saga', () => {
  it('fetches data successfully', () => {
    const responseData = { id: 1, title: 'Sample Post' };

    axios.get.mockResolvedValue({ data: responseData });

    return expectSaga(SagaData)
      .put({ type: SET_POSTS_DATA, payload: responseData})
      .dispatch({ type: POSTS_LIST })
      .run();
  });

  it('handles data fetching failure', () => {
    const error = new Error('Something went wrong!');

    axios.get.mockRejectedValue(error);

    return expectSaga(SagaData)
      .put({ type: ERROR, error })
      .dispatch({ type: POSTS_LIST })
      .run();
  });
});