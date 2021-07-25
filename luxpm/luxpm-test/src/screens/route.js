import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Splash from "./splash";
import Login from "./login";
import SignUp from "./signup";
import Nav from "../common/nav";

const Routes = props => {
    return (
        <div>
            <div id='mainLeftDiv' className='row xtop'>
                <Nav to='/' name='Home'/>
            </div>
            <div>
                <Switch>
                    <Route exact path="/"><Splash/></Route>
                    <Route path='/login'><Login/></Route>
                    <Route path='/signup'><SignUp/></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Routes
