import React, { useEffect } from "react";
// import { useSelector, RootStateOrAny } from "react-redux";
import { Link } from "react-router-dom";
// import { assign } from "../redux/reducers/user.reducer";

const Home = () => {
  // const user = useSelector((state: RootStateOrAny) => state.user);
  // const dispatch = useDispatch();
  useEffect(()=>{
    // dispatch(assign({ userId: "hi", username: "hi"}));
  })
  return (
    <div>
      <Link to ="/login">Login</Link>
    </div>
  );
};

export default Home;
