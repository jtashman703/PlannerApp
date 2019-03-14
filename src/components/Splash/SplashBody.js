import React from 'react';

export const SplashBody = props => (
  <div className="container text-center info-container">

    <h2>MAKE IT EASIER ON YOURSELF</h2>
    <p className="by-line">Learn how EventPlan can work for you.</p>

    <div className="row content-rows">
      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
      <i className="far fa-calendar-alt fa-5x"></i>

        <h5>PLAN</h5>
        <h6>
          <i className="far fa-arrow-alt-circle-right" /> Start by planning an event.
        </h6>
        <p className="p-text">
          Sign up or sign in to your account. Navigate to the create event page and fill out the details for your outing. We provide all of the necessary details to make it as easy as possible.
        </p>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
      <i className="fas fa-users fa-5x"></i>

        <h5>INVITE</h5>
        <h6>
          <i className="far fa-arrow-alt-circle-right" /> Invite your friends.
        </h6>
        <p className="p-text">
          Once you set up the details to your event, start inviting friends! Each one of your invited friend will get a notification with all of the details you've set up. All they need to do is vote 
        </p>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
      <i className="fas fa-magic fa-5x"></i>

        <h5>VOTE / SCHEDULE</h5>
        <h6>
          <i className="far fa-arrow-alt-circle-right" /> Vote and schedule your event.
        </h6>
        <p className="p-text">
          All of the friends will vote on which date and time works best for them. Once your minimum is met, we automatically schedule the event and send all of invitees a notification!
        </p>
      </div>
    </div>
  </div>
);
