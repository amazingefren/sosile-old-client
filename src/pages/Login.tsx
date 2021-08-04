import React from "react";
// import { useDispatch } from "react-redux";
import {LoginComponents} from '../components'

const Login = () => {
  // const dispatch = useDispatch();
  
  return (
    <div>
      <h1>login</h1>
      <LoginComponents.LoginForm/>
    </div>
  );
};

export default Login;
