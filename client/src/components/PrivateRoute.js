import React from "react";
import { Route, Redirect } from "react-router-dom";

/*
  Private Route rules:
  1. It has the same API as <Route />.
  2. It renders a <Route /> and passes all the props through it.
  3. It checks if the user is authenticated. If they are, it renders the "component" prop. If not, it redirects the user to /login.
*/

// rest operator (looiks a lot like spread operator)
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage && window.localStorage.getItem("token");
  return (
    <Route {...rest} render={
      props => {
        if (token) {
          return <Component {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }
    } />
  )
};
