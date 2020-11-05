import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './App';

import counterReducer from './reducers/CounterReducer'

const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root')
);


