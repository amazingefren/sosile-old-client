import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Welcome, Login } from "./pages";
import UserHome from './pages/user/Home'
import ProtectedRoute from './guard/protected-route'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/home" component={UserHome}/ >
        <Route path="*"><h1>ERROR</h1></Route>
      </Switch>
    </Router>
  );
};

export default App;
