import React from "react";
// import { useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { assign } from "../state/user";

const Home = () => {
  const user = useSelector((state: RootStateOrAny) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <div>
      SOSILE APP
      <br/>
      <button
        onClick={() => {
          dispatch(assign({ userId: "hi", username: "hi", password: "hi" }));
          console.log(user)
        }}
      >Hello: {user.userId}</button>
    </div>
  );
};

export default Home;
