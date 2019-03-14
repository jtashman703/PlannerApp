import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SignInForm extends Component {

  constructor() {
		super()
		this.state = {
      email: '',
      password: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.email, this.state.password)
		this.setState({
			redirectTo: '/dashboard/home'
		})
	}
  
  render() {
    if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
    return (
      <div className="col right-side">
        <h1 className="signup-title">Or, Sign In</h1>
        <p className="rightBy-line">Your events are waiting!</p>
        <form className="rightForm">
        <input name="email" autoComplete="false" required type="text" placeholder="Email" 
            value={this.state.email}
					  onChange={this.handleChange} />
        <input name="password" autoComplete="false" required type="password" placeholder="Password" 
            value={this.state.firstName}
					  onChange={this.handleChange} />
        <button className="signin-btn" onClick={this.handleSubmit}>SIGN IN</button>
        </form>
        <span>
        <p className="goog-para">Or, Sign in with Google.</p>
        </span>
        <a href="/auth/google">
          <button className="goog-btn">Google +</button>
        </a>
      </div>
    )
  }
}

export default SignInForm;
