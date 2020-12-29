//@flow
import React from "react";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import user from "./components/Nav/Nav";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import EditProfile from "./components/EditProfile";
import "./AppStyles.css";
import "./AppStyles.module.css";
import Memebater from "./components/Memebater";
import { Meme } from "./components/Meme";

export default function App() {
  return (
      <Router>
        <Switch>
          <Route path="/profile">
            <Nav color="dark" />
            <EditProfile primary={true} />
          </Route>
          <Route path="/login">
            <Nav />
            <Login />
          </Route>
          <Route path="/">
            <Nav />
            <Home />
            <Memebater />
            <Meme />
          </Route>
        </Switch>
      </Router>
  );
}
