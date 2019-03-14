import React, { Component } from 'react';
import NavbarDash from '../../components/NavbarDash';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
// import CreateForm from '../../components/Create/CreateForm';
import { Input, FormBtn } from '../../components/Create';

import './Create.css';

class Create extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      category: '',
      name: '',
      scheduledDatetime: '',
      location: '',
      address: '',
      numRequired: '',
      attendees: [],
      redirectTo: null
    };
  }

  // When component mounts, get eventType and friends from API
  // componentDidMount() {
  //get the events we let them select from
  //TODO
  // API.getEventTypes()
  //   .then(res => this.setState({ eventType: res.data.message }))
  //   .catch(err => console.log(err));
  //get their pre-loaded friends
  //   API.getAllUsers()
  //     .then(res => this.setState({ friends: res.data.message }))
  //     .catch(err => console.log(err));
  // }

  // Add attendee to array db
  // addAttendee = newAttendee => {
  //   this.setState.push({ attendees: [...this.state.attendees, newAttendee]})
  // };

  // let newAttendee = this.setState.push({ attendees: [...this.state.attendees, newAttendee]});

  //TODO: write handleInputChange function
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // TODO: write handleFormSubmit function
  // TODO: finish connecting the rest of the input fields from the create event form page
  handleFormSubmit = event => {
    console.log('user id: ' + this.props.user._id);
    event.preventDefault();

    const requiredAtt = parseInt((this.state.numRequired), 10);

    // Splitting returned attendees string into separate strings in a new array
    let newAttendees = this.state.attendees;
    let newAttendeeArray = newAttendees.split(/[ ,]+/);
    // if (newAttendees.indexOf(',') > -1) { 
    //   let newAttendeeArray = newAttendees.split(',');
    // } else {
    //   let newAttendeeArray = newAttendees.split(' ');
    // };

    // let newAttendeeArray = newAttendees.split(' ');
    // console.log(newAttendeeArray);
    // let finalAttendees = [];
    // finalAttendees.push(newAttendeeArray);

      API.createEvent({
        name: this.state.name,
        category: this.state.category,
        location: this.state.location,
        scheduledDatetime: this.state.scheduledDatetime,
        organizer: this.props.user._id,
        address: this.state.address,
        numRequired: requiredAtt,
        attendees: newAttendeeArray
      })
      .catch(err => console.log(err));
    this.setState({
      redirectTo: '/dashboard/home'
    })
  };

  render() {
    if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
    let navbar
    if (this.props.loggedIn) {
      console.log("rendering the logged in dash");
      navbar = <NavbarDash updateUser={this.props.updateUser} loggedIn={this.props.loggedIn} user={this.props.user} />
    } else {
      console.log("rendering the not logged in dash");
      navbar = <NavbarDash />
    }
    return (
      <div className="App Site">
        <div className="Site-Content">
          {navbar}
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar">
                <Sidebar />
              </div>
              <div className="col-12 create-container">
                <h1 className="created-heading">CREATE YOUR EVENT!</h1>
                <hr />
                <form>
                <label className="event-type">Event Category</label>
                  <div className="form-group">
                    <select value={this.state.category} onChange={this.handleInputChange} name='category' className='form-control' id='event-type'>
                      <option category="restaurants">Restaurants</option>
                      <option category="bars">Bars</option>
                      <option category="concerts">Concerts</option>
                      <option category="movies">Movies</option>
                    </select>
                  </div>
                <label className="event-name">Event Name</label>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Name Your Awesome Event" id="event-name"
                />
                <label className="event-date">Event Date ( MM/DD/YYYY )</label>
                <Input
                  type='date'
                  value={this.state.scheduledDatetime}
                  onChange={this.handleInputChange}
                  name="scheduledDatetime"
                  placeholder="When Is This Happening?" id="event-date"
                />
                <label className="event-location">Where's Your Event</label>
                <Input
                  value={this.state.location}
                  onChange={this.handleInputChange}
                  name="location"
                  placeholder="Where's This Going Down?" id="event-location"
                />
                <label className="event-address">Event Address</label>
                <Input
                  value={this.state.address}
                  onChange={this.handleInputChange}
                  name="address"
                  placeholder="Address of the Event" id="event-address"
                />
                <label className="friends-reqd">How Many People Do You Need?</label>
                  <div className="form-group">
                    <select value={this.state.numrequired} onChange={this.handleInputChange} name='numRequired' className='form-control' id='friends-reqd'>
                      <option numrequired="1">1</option>
                      <option numrequired="2">2</option>
                      <option numrequired="3">3</option>
                      <option numrequired="4">4</option>
                      <option numrequired="5">5</option>
                      <option numrequired="6">6</option>
                      <option numrequired="7">7</option>
                      <option numrequired="8">8</option>
                      <option numrequired="9">9</option>
                      <option numrequired="10">10</option>
                    </select>
                  </div>
                <label className="friends-reqd">Wanna Invite Some People?</label>
                <Input
                  value={this.state.attendees}
                  onChange={this.handleInputChange}
                  name="attendees"
                  id="add-friends"
                />
                <FormBtn
                  onClick={this.handleFormSubmit}
                >SUBMIT
                </FormBtn>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Create;

// () => this.state.addAttendee()

// Old input for number of friends required
/*<Input
    value={this.state.numRequired}
    onChange={this.handleInputChange}
    name="numRequired"
    placeholder="Enter Up To 10 People"
    id="friends-reqd"
  /> */

// Old input for the category
 /* <Input
    value={this.state.category}
    onChange={this.handleInputChange}
    name="category"
    placeholder="What Type of Event?" id="event-type"
  /> */


