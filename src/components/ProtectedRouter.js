import { useSelector } from "react-redux";

import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRouter({ component: Component, ...restOfProps }) {
  const isAuthenticated = useSelector((state) => state.authReducer?.isLogin);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRouter;
