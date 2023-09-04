import * as React from 'react';
import PostScreen from ".";
import {render, fireEvent} from '@testing-library/react-native';

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