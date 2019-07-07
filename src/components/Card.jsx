import React from 'react';

const Card = (props) => {
  const { location } = props;

  return (
    <li className="brewery">
      <div className="card hoverable">
        <h4 className="brewery-name">{location.name}</h4>
        <div className="brewery-location">
          <i className="material-icons">place</i>
          <span>{`${location.city}, ${location.state}`}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;