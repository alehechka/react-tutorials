import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated or if auth is not
// yet loaded
function PrivateRoute({ component: Component, children, ...rest }) {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <Route
      {...rest}
      render={props =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children || <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
