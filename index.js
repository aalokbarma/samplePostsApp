/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './redux/store';

// here we are wrapping the whole app into a provider so we can access the store data throughout the app
const ReduxApp = () => {
    return(
    <Provider store = {store}>
        <App />
    </Provider>
    )
}

AppRegistry.registerComponent(appName, () => ReduxApp);
