import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import Root from "./root";
import {BrowserRouter, Route} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Root>
            <BrowserRouter>
                <Route path='/' component={App}/>
            </BrowserRouter>
        </Root>
    </React.StrictMode>,
    document.getElementById('root')
);
