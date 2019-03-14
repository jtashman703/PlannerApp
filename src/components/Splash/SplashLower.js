import React from 'react';

export const SplashLower = props => (
  <div className="container-fluid text-center body-lower">
    <h1 className="display-4">PLAN YOUR EVENT</h1>
    <div className="form-row align-items-center input-style">
      <div className="col-auto">
        <a href="/signin">
          <button type="submit" className="btn btn-outline mb-2 btn-lower">
            GET STARTED
          </button>
        </a>
      </div>
    </div>
  </div>
);
