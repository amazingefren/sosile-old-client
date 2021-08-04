import React, { FormEvent, useState } from "react";
import { Redirect } from "react-router-dom";
// import { useDispatch } from "react-redux";

const Login = () => {
  // const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });

  const [freeze, setFreeze] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!freeze) {
      console.log(payload);
      setFreeze(true);
      setTimeout(() => {
        // fake async needs timeout
        setPayload({ username: "", password: "" });
        setFreeze(false);
        setRedirect(true);
      }, 5000);
    }
  };

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={payload.username}
            disabled={freeze}
            onChange={(e) =>
              setPayload({ ...payload, username: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={payload.password}
            disabled={freeze}
            onChange={(e) =>
              setPayload({ ...payload, password: e.target.value })
            }
          />
          <br />
          <input type="submit" value="Login" />
        </label>
      </form>
      {redirect && <Redirect to="/" />}
    </div>
  );
};

export default Login;
