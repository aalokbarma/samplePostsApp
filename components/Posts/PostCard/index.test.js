import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PostCard from './index';

describe('Post Card', () => {
  it('post card renders with mock redux store', () => {
    const initialState = {
      someValue: 'Mocked Value',
    };
    const mockStore = configureStore([]);
    const store = mockStore(initialState);

    const props = {
        item: {
            title: "abc",
            body: "asn"
        }
    }

    const { getByText } = render(
      <Provider store={store}>
        <PostCard item = {props} />
      </Provider>
    );
  });
  
});
