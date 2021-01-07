import React from "react";
import ReactDOM from "react-dom";
import {Auth0Provider} from "@auth0/auth0-react"
import App from "./App";

ReactDOM.render(
    <Auth0Provider
      domain="dev-p5tvvska.us.auth0.com"
      clientId="W2BRBhJLb19kRyibIw5wW7G4qp7IrTPi"
      redirectUri={"/"}>
      <App />
    </Auth0Provider>,
    document.getElementById("root")
  );