import React from 'react';

const EventInfo = props => (
  <div className="Input">
    <input
      id={props.name}
      autoComplete="false"
      required
      type={props.type}
      placeholder={props.placeholder}
    />
    <label for={props.name} />
  </div>
);

export default EventInfo;