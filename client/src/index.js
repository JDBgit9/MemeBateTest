import React from "react";
import ReactDOM from "react-dom";
import {Auth0Provider} from "@auth0/auth0-react"
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './custom.scss';
ReactDOM.render(<App />, document.getElementById('root'))



ReactDOM.render(
  <Auth0Provider
    domain="dev-p5tvvska.us.auth0.com"
    clientId="W2BRBhJLb19kRyibIw5wW7G4qp7IrTPi"
    redirectUri={"http://localhost:3000"}>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);



registerServiceWorker();

