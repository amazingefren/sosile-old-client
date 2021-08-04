import React, { useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { Link } from "react-router-dom";
import { assign } from "../state/user";

const Home = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(assign({ userId: "hi", username: "hi", password: "hi" }));
  })
  return (
    <div>
      <Link to ="/login">Login</Link>
      {user.username}
    </div>
  );
};

export default Home;
