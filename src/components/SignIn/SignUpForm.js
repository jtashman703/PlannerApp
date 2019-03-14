import React, { Component } from 'react';
import AUTH from '../../utils/AUTH';
import { Redirect } from 'react-router-dom';

class SignUpForm extends Component {

  constructor() {
		super()
		this.state = {
      firstName: '',
      lastName: '',
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

  handleSubmit(event)   {
		event.preventDefault()
    // TODO - validate!
    console.log(this.state.email);
    console.log(this.state.password);
    AUTH.signUp({
      firstName: this.state.firstName, 
      lastName: this.state.lastName, 
      email: this.state.email, 
      password: this.state.password})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/signin'
					})
				} else {
					console.log('duplicate')
				}
			})
  }
  
  render() {
    if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
    return (
      <div className="col left-side">
        <h1 className="signup-title">Welcome</h1>
        <p className="leftBy-line">Register for an EventPlan account.</p>
          <form onSubmit={this.handleSubmit} className="ModalForm">
            <input name="firstName" autoComplete="false" required type="text" placeholder="First Name" 
            value={this.state.firstName}
					  onChange={this.handleChange} />
            <input name="lastName" autoComplete="false" required type="text" placeholder="Last Name" 
            value={this.state.lastName}
					  onChange={this.handleChange} />
            <input name="email" autoComplete="false" required type="text" placeholder="Email"
            value={this.state.email}
					  onChange={this.handleChange}/>
            <input name="password" autoComplete="false" required type="password" placeholder="Password"
            value={this.state.password}
					  onChange={this.handleChange} />
          <button className="signup-btn">SIGN UP</button>
          <p className="signin-para">By signing up, you agree to our terms.</p>
        </form>
      </div>
    )
  }
}

export default SignUpForm;
