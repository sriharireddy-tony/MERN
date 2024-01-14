/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Route } from "react-router-dom";

export const ProtectRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} {...rest} />;
        // if (!auth)
        //   return (
        //     <Redirect to={{ path: "/", state: { from: props.location } }} />
        //   );
      }}
    />
  );
};
