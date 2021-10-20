import React from 'react';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import asyncMiddleware from "./middlewares/async";
import reducers from 'redux/reducers'

const Root = (props) => {
    const {initStoreState} = props
    const store = createStore(
        reducers,
        initStoreState || {},
        applyMiddleware(asyncMiddleware)
    )
    return <Provider store={store}>
        {props.children}
    </Provider>
}
export default Root
