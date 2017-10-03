// import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import todoApp from './reducers';

const store = createStore(todoApp, compose(window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root'),
);
