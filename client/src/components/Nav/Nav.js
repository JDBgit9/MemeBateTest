import React from "react";
import "./Nav.css";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Nav({color=""}) {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top py-3 ${color}`}
      id="mainNav"
    >
      <div className="container">
      {/* <label class="rq0escxv a8c37x1j a5nuqjux l9j0dhe7 k4urcfbm">
        <div class="ijkhr0an pnx7fd3z sgqwj88q hzruof5a pmk7jnqg rnx8an3s fcg2cn6m">
          <i class="hu5pjgll m6k467ps sp_j-o8QPZPfDc sx_a42500"></i>
          </div><input type="search" dir="ltr" aria-autocomplete="list" aria-expanded="false" aria-label="" role="combobox" placeholder="Search Memebate" autocomplete="off" spellcheck="false" value="" class="oajrlxb2 rq0escxv f1sip0of hidtqoto lzcic4wl hzawbc8m ijkhr0an nlq1og4t sgqwj88q b3i9ofy5 oo9gr5id b1f16np4 hdh3q7d8 dwo3fsh8 qu0x051f esr5mh6w e9989ue4 r7d6kgcz br7hx15l h2jyy9rg n3ddgdk9 owxd89k7 ihxqhq3m jq4qci2q 
          k4urcfbm iu8raji3 qypqp5cg l60d2q6s hv4rvrfc hwnh5xvq dati1w0a o1lsuvei o6r2urh6 rmlgq0sb aj8hi1zk r4fl40cc kd8v7px7 m07ooulj mzan44vs"></input></label> */}
        <a className="navbar-brand js-scroll-trigger" href="#page-top"></a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto my-2 my-lg-0">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/">
                Home
              </Link>
            </li>
            {isAuthenticated ? (
              <li className="nav-item" onClick={() => logout({returnTo: window.location.origin  })}>
                Logout
              </li>
            ) : (
              <li className="nav-item" onClick={() => loginWithRedirect()}>
                Login
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/about">
                About Us
              </Link>
            </li>
            {isAuthenticated &&  <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/profile">
                {user.email}
              </Link>
            </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;