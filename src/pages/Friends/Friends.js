import React, { Component } from 'react';
import NavbarDash from '../../components/NavbarDash';
import Sidebar from '../../components/Sidebar';
import FriendCard from '../../components/FriendCard';
import Footer from '../../components/Footer';
import API from '../../utils/API';
import './Friends.css';

class Friends extends Component {
  state = {
    friends: [],
    firstName: '',
    lastName: '',
    local: {
      email: ''
    }
  };

  componentDidMount() {
    this.loadFriends();
  }

  loadFriends = () => {
    API.getAllUsers()
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data,
          firstName: '',
          lastName: '',
          local: {
            email: ''
          }
        })
      })
      .catch(err => console.log(err));
  };

  render() {
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
              <div className="col-12 friend-container">
                <h1 className="friend-heading">FRIENDS</h1>
                <hr />
                {this.state.friends.map(friend => {
                  return (
                    <FriendCard key={friend._id.toString()}
                      friend={friend}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Friends;
