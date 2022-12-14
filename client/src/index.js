import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './app/store';

import GlobalStyles from './GlobalStyles';

import App from './app';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <GlobalStyles />
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
