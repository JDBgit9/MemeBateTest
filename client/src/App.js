//@flow
import React from "react";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import user from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import EditProfile from "./components/EditProfile";
import "./AppStyles.css";
import "./AppStyles.module.css";
import Memebater from "./components/Memebater";
import  Meme  from "./components/Meme";
import Slider from "./components/Slider";
import { Media } from "./components/Media";

export default function App() {
  return (
      <Router>
        <Switch>
          <Route path="/profile">
            <Nav color="dark" />
            <EditProfile primary={true} />
          </Route>
          <Route path="/">
            <Nav />
            <Home />
            {/* <Slider /> */}
            <Memebater />
            <Meme />
          </Route>
        </Switch>
      </Router>
  );
}
