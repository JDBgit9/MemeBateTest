import React from "react";
import ReactDOM from "react-dom";
import {Auth0Provider} from "@auth0/auth0-react"
import App from "./App";

ReactDOM.render(
    <Auth0Provider
      domain="dev-g2wsfaf4.us.auth0.com"
      clientId="oRh7HMEEqUvhjrFJUXadh9aXrCiQ64oh"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>,
    document.getElementById("root")
  );