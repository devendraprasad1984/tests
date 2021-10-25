import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./header";
import SignUp from "./signup";
import Welcome from "./welcome";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk'
import reducers from './redux/reducers'

const initStore = {}
const store = createStore(reducers, initStore, applyMiddleware(reduxThunk))

const ClientApp = props => {
    return <div>
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Route path={'/'} exact component={Welcome}/>
                <Route path={'/signup'} component={SignUp}/>
            </BrowserRouter>
        </Provider>
    </div>
}
export default ClientApp