//sets up the reusable Navbar component
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class NavbarDash extends Component {

  constructor() {
    super()
    this.state = {
      redirectTo: null
    }
		this._logout = this._logout.bind(this)
  }

  _logout(event) {
    event.preventDefault();
    axios.post('/auth/logout').then(response => {
      console.log(response.data);
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          user: null
        })
        this.setState({
          redirectTo: '/'
        });
      }
    });
  }
  
  render() {
    let user
    let logout
    if (this.props.loggedIn) {
      user = this.props.user.firstName
      logout = <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this._logout}>LOG OUT</button>
    } else {
      user = "No User"
      logout = <button className="btn btn-outline-success my-2 my-sm-0" type="submit">LOG OUT</button>
    }
    if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
    return (
      <nav className="navbar navbar-expand-lg navDash">
          <a className="navbar-brand" href="/">
            My Plan
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <span className="nav-byline">
                  
                </span>
              </li>
            </ul>
            <span className="user-name">
              Welcome, {user}.
            </span>
            {logout}
          </div>

          {/* Mobile nav for smaller screens */}
          <div className="mobile-nav">
            <a href="/"><i className="fas fa-sign-out-alt logout-icon"></i></a>
          </div>
      </nav>
    );
  }
}

export default NavbarDash;

/* <span className="user-name">
  Welcome, propname.
</span> */
