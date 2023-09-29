import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import {SagaData}  from './saga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Redux Store', () => {
  let store;
  beforeEach(() => {
    store = mockStore(rootReducer);
    sagaMiddleware.run(SagaData);
  });

  it('should handle POSTS_LIST action', () => {
    const expectedActions = [
      { type: 'POSTS_LIST', payload: 'test' },
    ];

    store.dispatch({ type: 'POSTS_LIST', payload: 'test' });
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('should handle UPDATE_POST action', () => {
    const expectedActions = [
      { type: 'UPDATE_POST', payload: 'test' },
    ];

    store.dispatch({ type: 'UPDATE_POST', payload: 'test' });
    expect(store.getActions()).toEqual(expectedActions);
  });
});
