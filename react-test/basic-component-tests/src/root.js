import React from 'react';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reduxPromise from 'redux-promise' //this and redux-thunk are middlewares that tells redux for async operations
import reducers from 'redux/reducers'

const Root = (props) => {
    const {initStoreState} = props
    const store = createStore(reducers, initStoreState || {}, applyMiddleware(reduxPromise));
    return <Provider store={store}>
        {props.children}
    </Provider>
}
export default Root
