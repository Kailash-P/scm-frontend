import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './admin/views/user/Login'
import Home from './baseComponents/views/Home';
import UserPrivateRoute from './admin/helper/user/UserPrivateRoute';

function Routes() {
    return (
       <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/signIn" />
                </Route>
                <Route exact path="/signIn" component= {Login} />
                <UserPrivateRoute exact path="/home" component= {Home} />
                <Route exact path="/signOut" component= {Login} />
            </Switch>
       </BrowserRouter>
    )
}


export default Routes;