import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "./WebMBimg.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Media } from "../Media";
import Memebater from "../Memebater";
import Slider from "../Slider";

function Home() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  return (
    <>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <img src={logo} />
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 font-weight-light mb-5">
                A fun digital debate platform without all the fuss.
              </p>
              <a
                className="btn btn-primary btn-xl js-scroll-trigger"
                href="#about"
              >
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="page-section bg-primary" id="about">
        <div className="container">
          <div
            style={{
              width: "100%",
              height: "50rem",
              textAlign: "center",
            }}
            className="row justify-content-center"
          >
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">Freedom of Speech</h2>
              <hr className="divider light my-4" />
              <h3 className="text-white-50 mb-4">
                Memebate is an application designed to preserve the right to
                speak freely online without censorship or bias.
                <br></br>
                <br></br>
                As a debater you will create an account and then state your case
                through a myriad of topics while holding yourself and others
                accountable through source reporting, points, acquiring
                memebaters, and winning debates.
              </h3>
              <a
                className="btn btn-light btn-xl js-scroll-trigger"
                href="#services"
              >
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-pink lighten-4" id="services">
        <div className="container">
          <h2 className="text-center mt-0">How do I start?</h2>
          <hr className="divider my-4" />
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                <h3 className="h4 mb-2">Memebaters</h3>
                <p className="text-muted mb-0">
                  As a memebater you get to engage in the debates by posting
                  likes, dislikes, memes, gifs, and emojis in the comment
                  section. Memebaters are most important because they are the
                  judges of each of the debates on this platform. So be nice you
                  never kow you'll meet. You must sign up to become a memebater.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                <h3 className="h4 mb-2">Debaters</h3>
                <p className="text-muted mb-0">
                  Debaters simply create an account and then record an audio or
                  video media link (anonymous, or non-anonymous) to their
                  profile page of their favorite topic and then watch the fun
                  memebating begin to unfold.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                <h3 className="h4 mb-2">Want to respond?</h3>
                <p className="text-muted mb-0">
                  If you want to join an open discussion simply add a media
                  video or audio (anonymous or non-anonymous) link with oral
                  response to the conversation or just send memes. That's always
                  fun.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                <h3 className="h4 mb-2">Thank you</h3>
                <p className="text-muted mb-0">
                  We hope that this will be a step in a direction of bringing
                  humanity together through harmony, understanding, and honest
                  communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
              {isAuthenticated && <Media />}
            </div>
          </div>
          {isAuthenticated && <Memebater />}
        </div>
  

      <section className="page-section2 text-white">
        <div className="container text-center">
          <h2 className="mb-4">Free To Join</h2>
          {/* <a
            className="btn btn-light btn-xl"
            href="https://startbootstrap.com/theme/creative/"
          > */}

          <Link className="btn btn-light btn-xl" to="/Login">
            Sign up now!
          </Link>

          {/* </a> */}
        </div>
      </section>

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Stay In Touch!</h2>
              <hr className="divider my-4" />
              <p className="text-muted mb-5">
                Want to advertise your business on this site? Give us a call or
                send us an email and we will get back to you as soon as
                possible!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div>+1 (917) 263-5300</div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
              <a className="d-block" href="mailto:contact@yourwebsite.com">
                contact@memebate.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-5">
        <div className="container">
          <div className="small text-center text-white">
            Copyright © 2020 - MemeBate App is currently a UCF online coding
            Bootcamp project. All Rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
