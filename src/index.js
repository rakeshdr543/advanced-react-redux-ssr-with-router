import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import App from './App';

import configureStore from './store/configureStore';

const store = configureStore( window.REDUX_STATE || {} );

const AppBundle = (
<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
</BrowserRouter>
);

window.onload = () => {
    ReactDOM.hydrate(
        AppBundle,
        document.getElementById('root')
    );
};