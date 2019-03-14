//sets up the reusable Navbar component
import React, { Component } from 'react';
// import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            My Plan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <span className="nav-byline">
                  Busy made simple
                </span>
              </li>
            </ul>
            <a className="nav-link" href="/signin">
              SIGN IN
            </a>
            <a href="/signin">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              GET STARTED
            </button>
            </a>
          </div>
      </nav>
    );
  }
}

export default Navbar;
