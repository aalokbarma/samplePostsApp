import * as React from 'react';
import LoginScreen from ".";
import {render, fireEvent} from '@testing-library/react-native';

const screenProps = {
    navigation: {
        navigate: jest.fn(),
    },
}

const renderComponent = (props) => render(<LoginScreen {...screenProps} />)


  describe('renderLoginScreen' , () => {
    it('should render Login Screen main component' , () => {
        const {getByTestId} = renderComponent();
        expect(getByTestId('LoginScreenContainer')).toBeDefined();
    })
})