import React, { Component } from 'react';
import Modal from '../../components/SignIn/Modal';
import NavbarSignin from '../../components/NavbarSignin';
import Footer from '../../components/Footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Signin.css';

class Signin extends Component {
  state = {
    mounted: false,
  };

  // when component mounts, change state
  componentDidMount() {
    this.setState({ mounted: true });
  }
  // when someone submits, set state back to false
  handleSubmit(e) {
    this.setState({ mounted: false });
    e.preventDefault();
  }

  render() {
    let child;

    if (this.state.mounted) {
      child = <Modal _login={this.props._login} _googleSignin={this.props._googleSignin} onSubmit={this.handleSubmit} />;
    }
    return (
      <div className="App Site bg-img">
        <div className="Site-Content">
          <NavbarSignin />
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {child}
          </ReactCSSTransitionGroup>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signin;
