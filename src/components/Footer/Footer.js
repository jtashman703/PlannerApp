//sets up the reusable Navbar component
import React, { Component } from 'react';
// import "./Navbar.css";
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='footer'>
          <div className='container text-container'>
            <span className='footer-byline'>
             
            </span>
            <span className='copyright'>
              
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
