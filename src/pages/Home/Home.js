import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import ModalInfo from '../../components/EventModal/Modal';
import NavbarDash from '../../components/NavbarDash';
import Sidebar from '../../components/Sidebar';
import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';
import './Home.css';
import API from '../../utils/API';

class Home extends Component {
  state = {
    // set the initial state based on the event model
    events: [],
    name: '',
    category: '',
    organizer: '',
    attendees: [],
    numAttendeesConfirmed: 0,
    eventDate: '',
    confirmed: false,
    open: false,
    selectedEvent: {
      name: '',
    },
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  showModal = event => {
    this.setState({ selectedEvent: event, open: true });
    // console.log(event);
  };

  // when component mounts, load all events and save them to this.state.events
  componentDidMount() {
    this.loadEvents();
  }

  // load all the events and set them to this.state.events
  loadEvents = () => {
    API.getAllEvents()
      .then(res => {
        this.setState({
          events: res.data,
          name: '',
          category: '',
          organizer: '',
          attendees: [],
          numAttendeesConfirmed: 0,
          eventDate: '',
          confirmed: false,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { open } = this.state;
    let navbar
    if (this.props.loggedIn) {
      console.log("rendering the logged in dash");
      navbar = <NavbarDash updateUser={this.props.updateUser} loggedIn={this.props.loggedIn} user={this.props.user} />
    } else {
      console.log("rendering the not logged in dash");
      navbar = <NavbarDash />
    }
    return (
      <div>
        {navbar}
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="col-sm-12 main-container">
              <h1 className="attend-heading">EVENTS CONFIRMED</h1>
              <hr />
              <div className="row">
              <div className="col-lg-12">
              {this.state.events.filter(event => event.confirmed).map(event => {
                return (
                  <EventCard
                    key={event._id}
                    id={event._id}
                    category={event.category}
                    date={event.scheduledDatetime}
                    event={event}
                    handleClick={this.showModal}
                  />
                );
              })}
              </div>
              </div>

              <h1 className="pend-heading">EVENTS NOT CONFIRMED</h1>
              <hr />
              <div className="row">
              <div className="col-lg-12">
              {this.state.events
                .filter(event => !event.confirmed)
                .map(event => {
                  return (
                    <EventCard
                      key={event._id}
                      category={event.category}
                      date={event.scheduledDatetime}
                      event={event}
                      handleClick={this.showModal}
                      //TODO - attendees confirmed
                      //TODO - attendees total
                    />
                  );
                })}
                </div>
                </div>
              
              <h1 className="create-heading">EVENTS I'VE CREATED</h1>
              <hr />
              <div className="row">
              <div className="col-lg-12">
              {this.state.events
                .filter(event => !event.confirmed)
                .map(event => {
                  return (
                    <EventCard
                      key={event._id}
                      category={event.category}
                      date={event.scheduledDatetime}
                      event={event}
                      handleClick={this.showModal}
                      //TODO - attendees confirmed
                      //TODO - attendees total
                    />
                  );
                })}
                </div>
                </div>
            </div>
          </div>
        </div>
        <Footer />
        <Modal open={open} onClose={this.onCloseModal} center>
          <ModalInfo event={this.state.selectedEvent} />
        </Modal>
      </div>
    );
  }
}

export default Home;
