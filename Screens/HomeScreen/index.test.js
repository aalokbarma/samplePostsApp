import * as React from 'react';
import HomeScreen from ".";
import {render} from '@testing-library/react-native';

const screenProps = {
    navigation: jest.fn(),
}

const renderComponent = (props) => render(<HomeScreen {...screenProps} />)

jest.mock(
    'react-native-vector-icons/MaterialCommunityIcons',
    () => 'MockedMaterialCommunityIcons',
  );
jest.mock(
    'react-native-vector-icons/Foundation',
    () => 'MockedFoundation',
  );

jest.mock('axios')


  describe('renderHomeScreen' , () => {
    it('should render Home Screen main component' , () => {
        const {getByTestId} = renderComponent();
        expect(getByTestId('HomeScreenContainer')).toBeDefined();
    })
    // it('should render Home Screen refresh Icon' , () => {
    //     const {getByTestId} = renderComponent();
    //     expect(getByTestId('HomeScreenRefreshButton')).toBeDefined();
    //     fireEvent.press(getByTestId('HomeScreenRefreshButton'))
    // })
})