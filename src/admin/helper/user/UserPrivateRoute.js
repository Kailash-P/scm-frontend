import React from "react";
import {Route, Redirect}  from "react-router-dom"
import {isAuthenticated} from "../../helper/user/userApiHelper"

const UserPrivateRoute = ({ component: Component, ...rest }) =>  {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated() ? (
            <Component {...props}/>  
          ) : (
            <Redirect
              to={{
                pathname: "/signIn",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  };

export default UserPrivateRoute;