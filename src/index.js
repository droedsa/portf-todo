import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter} from "react-router-dom";
import ErrorBoundry from "./components/error-boundry/error-boundry";


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BrowserRouter >
                <App/>
            </BrowserRouter >
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);


