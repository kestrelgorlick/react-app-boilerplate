import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './components';
import Logout from './components/Logout';
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store} >
            <Router history={createBrowserHistory()}>
                <Routes />
            </Router>
        </Provider>
    );
};

ReactDom.render(<App />, document.getElementById('root'));