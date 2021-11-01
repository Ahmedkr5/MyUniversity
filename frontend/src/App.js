
import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

      <Route path="/home" component={ Home } />
      <Route path="/university/:id"  />
      <Redirect to="/home" />

      </Switch>
    </Router>
  );
}
export default App;