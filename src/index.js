import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './components/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
ReactDOM.render(
    <Provider store={createStore( rootReducer, composeEnhancers(applyMiddleware()) )}>
         <App />
    </Provider>,
    document.querySelector("#root")
)