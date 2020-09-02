import React, { useState } from "react";
import "../../../baseComponents/css/loginStyle.css";
import { Redirect } from "react-router-dom";
import {
  signIn,
  isAuthenticated,
  authenticate,
} from "../../helper/user/userApiHelper";
import { Spinner } from "react-bootstrap";
import { info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { useDispatch, connect, useSelector, shallowEqual } from 'react-redux';
import { signInAction } from '../../../actions/authenticationActionTypes';

const SignIn = () => {
  const dispatch = useDispatch();

  const loggedInUser = useSelector(signInAction, shallowEqual);

  const [users, setUsers] = useState({
    email: "",
    password: "",
    loading: false,
    allowRedirect: false,
  });

  const { email, password, loading, allowRedirect } = users;
  const authenticatedUser = isAuthenticated();

  // this syntax is called event handler functions in javascript
  const handleChange = (property) => (event) => {
    setUsers({ ...users, [property]: event.target.value });
  };

  const performRedirect = () => {
    if (allowRedirect) {
      if (authenticatedUser != null) {
        return <Redirect to="/home" />;
      }
    }

    if (isAuthenticated()) {
      return <Redirect to="/home" />;
    }
  };

  const loadingMessageDialog = () => {
    return (
      loading && (
        <>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </>
      )
    );
  };

  const SignInUser = (event) => {
    event.preventDefault();
    setUsers({ ...users });

    if (!email) {
      info({
        title: "Sign In",
        delay: 2000,
        icon: "fa fa-envelope",
        text: "Please enter your email address.",
      });
      return false;
    } else if (!password) {
      info({
        title: "Sign In",
        delay: 2000,
        icon: "fa fa-key",
        text: "Please enter your password.",
      });
      return false;
    }

    if (email !== "" && password !== "") {

     
      const data = { email, password };
      dispatch(signInAction(data));
      debugger
      if(loggedInUser){
        console.log(loggedInUser);
      }

      // call the signup method written in the auth/helper and pass the params to it.
      // signIn({ email, password })
      //   .then((data) => {
      //     if (data.Message) {
      //       setUsers({ ...users, loading: false });
      //       info({
      //         title: data.Message,
      //         delay: 2000,
      //         icon: "fa fa-user",
      //         text: "Invalid credentials.",
      //       });
      //     } else {
      //       authenticate(data, () => {
      //         setUsers({
      //           ...users,
      //           email: "",
      //           password: "",
      //           loading: true,
      //           allowRedirect: true,
      //         });
      //       });
      //     }
      //   })
      //   .catch((err) => {
      //     console.log("Sign in failed.");
      //   });
    }
  };

  const signInForm = () => {
    return (
      <div className="childBody">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div
              className="card"
              style={{ marginTop: "200px", marginLeft: "700px" }}
            >
              <div className="card-header">
                <h3>Sign In</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                    <input
                      onChange={handleChange("email")}
                      value={email}
                      type="email"
                      className="form-control"
                      required
                      placeholder="Enter you email address"
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-key"></i>
                      </span>
                    </div>
                    <input
                      onChange={handleChange("password")}
                      value={password}
                      type="password"
                      className="form-control"
                      required
                      placeholder="Enter you password"
                    />
                  </div>
                  <div className="row align-items-center remember">
                    <input type="checkbox" />
                    Remember Me
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      onClick={SignInUser}
                      className="btn float-right login_btn"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?<a href="#!">Sign Up</a>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#!">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {loadingMessageDialog()}
      {signInForm()}
      {performRedirect()}
    </div>
  );
};

export default SignIn;
