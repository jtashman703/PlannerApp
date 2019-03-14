import React, { Component } from 'react'
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

class Modal extends Component {

  render() {
    return(
      <div className="Modal">
        <div className="container modal-bg">
          <div className="row">
            <SignUpForm />
            <SignInForm _login={this.props._login} _googleSignin={this.props._googleSignin}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
