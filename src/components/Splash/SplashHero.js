import React from 'react';

export const SplashHero = props => (
  <div className="jumbotron text-center jumbotron-fluid hero-img">
    <div className="container">
      <h1 className="display-4">PLAN YOUR EVENT TODAY</h1>
      <p className="lead">Plan, invite, vote and schedule your event today.</p>
      <div className="form-row align-items-center input-style">
        <div className="col-auto">
          <a href="/signin">
            <button type="submit" className="btn btn-outline mb-2 hero-btn">
              GET STARTED
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);
