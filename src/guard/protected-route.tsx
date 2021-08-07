import React, { useState } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { gql } from "urql";

import client from "../auth/client";

const IS_AUTH = gql`
  query isAuth {
    isAuth
  }
`;

const getAuth = async (
  setAuth: React.Dispatch<React.SetStateAction<boolean>>,
  setBlock: React.Dispatch<React.SetStateAction<boolean>>
) => {
  console.log("setStates will be run twice: <React.StrictMode/>");
  await client
    .query(IS_AUTH)
    .toPromise()
    .then((res) => {
    console.log(res.data)
      // TODO: SERVER ERROR HANDLING
      // DO NOT REDIRECT IF NO DATA IS RECEIVED
      // THIS WILL CAUSE REDIRECT TO OCCUR
      // IF THE DATA REQUEST IS INTERRUPTED
      if (res.data?.isAuth) {
        setAuth(true);
      }
      else if (res.data?.isAuth == false) {
        setBlock(true)
      }
    });
};

const ProtectedRoute = ({ component, ...args }: RouteProps) => {
  const [isAuth, setAuth] = useState(false);
  const [block, setBlock] = useState(false);
  getAuth(setAuth, setBlock);
  return (
    <div>
      {isAuth && <Route component={component} {...args} />}
      {block && <Redirect to="/login" />}
    </div>
  );
};

export default ProtectedRoute;
