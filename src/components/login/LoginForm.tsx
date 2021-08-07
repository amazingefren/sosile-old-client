import { LOGIN_MUTATION } from "../../api/user.service";
import React, { FormEvent, useState } from "react";
import { Redirect } from "react-router-dom";
import { useMutation } from "urql";
// import { useDispatch } from "react-redux";

const LoginForm = () => {
  // const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });

  const [freeze, setFreeze] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const [_loginResult, login] = useMutation(LOGIN_MUTATION);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!freeze) {
      console.log(payload);
      setFreeze(true);
      await login({ input: payload }).then((result) => {
        console.log(result);
        if (result.data.login){
          return setRedirect(true)
        } else {
          setFreeze(false) 
          return setPayload({password: "", username: payload.username})
        }
      });

      // setTimeout(() => {
      //   // fake async needs timeout
      //   setPayload({ username: "", password: "" });
      //   setFreeze(false);
      //   setRedirect(true);
      // }, 1000);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={payload.username}
            disabled={freeze}
            onChange={(event) =>
              // Regex Verify
              setPayload({ ...payload, username: event.target.value })
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
              // Regex Verify
              setPayload({ ...payload, password: e.target.value })
            }
          />
          <br />
          <input type="submit" value="Login" />
        </label>
      </form>
      {redirect && <Redirect to="/home" />}
    </div>
  );
};

export default LoginForm;
