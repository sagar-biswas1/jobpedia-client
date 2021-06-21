import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
function PrivateRoute({ children, ...rest }) {
  const userData = useSelector((state) => state.userData.userInfo);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userData.email || userData.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
