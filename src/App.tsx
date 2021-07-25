import React from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { assign } from "./state/user";

const App = () => {
  const user = useSelector((state: RootStateOrAny) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <div>
      SOSILE APP
      <div
        onClick={() => {
          dispatch(assign({ userId: "hi", username: "hi" }));
          console.log(user)
        }}
      > test state {user.userId}</div>
    </div>
  );
};

export default App;
