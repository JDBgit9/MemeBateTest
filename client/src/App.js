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
// import React, { Component } from 'react';
import userFlatFeed from "./components/Memebate"

import {
  StreamApp,
  StatusUpdateForm,
  FlatFeed,
  NotificationDropdown,
  Activity,
  LikeButton,
  CommentField,
  CommentList,
  CommentItem,
  InfiniteScrollPaginator,
} from "react-activity-feed";
import "react-activity-feed/dist/index.es.css";

const apiKey = 'h8mj85cvam2q';
const appId = '103679';
const token =
  'pcekttsymy7znf3pm9t5qwdcp2gzcsrhmhx8katk6wmwygakhxgyyykxsz252dqg';
var stream = require("getstream");
// Instantiate a new client (server side)
// const userFlatFeed = stream.connect(
//   "h8mj85cvam2q",
//   "pcekttsymy7znf3pm9t5qwdcp2gzcsrhmhx8katk6wmwygakhxgyyykxsz252dqg",
//   "103679"
// );
// // Instantiate a new client (client side)
// let userToken = userFlatFeed.createUserToken(
//   "pcekttsymy7znf3pm9t5qwdcp2gzcsrhmhx8katk6wmwygakhxgyyykxsz252dqg"
// );

export default function App() {
  return (

      <Router>
        {/* <Nav /> */}
        {/* <h1>Hello</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
        {/* </div> */}
      </Router>
  );
}
