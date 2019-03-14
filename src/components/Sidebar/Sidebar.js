//sets up the reusable Sidebar component
import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav">
        <a href="/dashboard/home"><i className="fas fa-home icon-home"></i><span className="title">HOME</span></a><hr />
        <a href="/dashboard/create"><i className="fas fa-plus icon-plus"></i><span className="title">CREATE</span></a><hr />
        <a href="/dashboard/friends"><i className="fas fa-user-friends icon-friends"></i><span className="title">FRIENDS</span></a><hr />
        <a href="/dashboard/calendar"><i className="far fa-calendar-alt icon-cal"></i><span className="title">CALENDAR</span></a><hr />
      </div>
    );
  }
}

export default Sidebar;
