import React, { Component } from 'react';
import './FriendCard.css';

const FriendCard = props => (
  <div className="container friends-container">
    <div className="row">
      <div className="col">
        <div className="profile-icon"><i className="fas fa-user-circle"></i></div>
        <div className='friend-info'>
          <h5 className='friend-name'>
            {props.friend.firstName} {props.friend.lastName}
          </h5>
          <h6 className="user-email">               
            {props.friend.local.email}</h6>
        </div>
      </div>
    </div>
  </div>
);
export default FriendCard;
