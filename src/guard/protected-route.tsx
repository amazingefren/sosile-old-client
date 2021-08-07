import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import {  useQuery } from "urql";

// TODO: better error handling 

const ProtectedRoute = ({ component, ...args }: RouteProps) => {
  const [result, _reexecute] = useQuery({query: `query {isAuth}`})
  const {data, error} = result;
  return (
    <div>
      {data?.isAuth && <Route component={component} {...args} />}
      {error?.message?.toLowerCase().includes('access denied!') && <Redirect to="/login" />}
    </div>
  );
};

export default ProtectedRoute;
