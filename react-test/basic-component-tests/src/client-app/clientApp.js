import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./header";
import SignUp from "./signup";
import Welcome from "./welcome";


const ClientApp = props => {
    return <div>
        <BrowserRouter>
            <Header/>
            <Route path={'/'} exact component={Welcome}/>
            <Route path={'/signup'} component={SignUp}/>
        </BrowserRouter>
    </div>
}
export default ClientApp