import * as React from 'react';
import PostScreen from ".";
import {render, fireEvent} from '@testing-library/react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import configureStore from 'redux-mock-store';

const screenProps = {
    navigation: {
        goBack: jest.fn(),
    },
    route: {
        params: {
            postData: {
                userId: 1,
                id: 1,
                title: 'Aalok',
                body: "Barma"
            }
        }
    }
}

const renderComponent = (props) => render(<PostScreen {...screenProps} />)

jest.mock(
    'react-native-vector-icons/Entypo',
    () => 'MockedEntypo',
  );

  const itemProps = {
    reducer: {
        title: "abd",
        body: "asn",
    }
  }

  jest.mock('react-redux', () => ({
    useSelector: ((itemProps) => {
        return[
            [itemProps]
        ]
    }),
    useDispatch: jest.fn()
  }));
  


  describe('renderPostsScreen' , () => {
    it('should render Post Screen main component' , () => {
        const {getByTestId} = renderComponent();
        expect(getByTestId('PostScreenContainer')).toBeDefined();
    })
    it('should render navigate back to home screen' , () => {
        const goBack = jest.fn
        const {getByTestId} = renderComponent({navigation: {goBack}});
        expect(getByTestId('PostScreenBackButton')).toBeDefined();
        fireEvent.press(getByTestId('PostScreenBackButton'))
    })
})