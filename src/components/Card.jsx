import React from 'react';
import { toTitleCase } from '../utils';

import LocationMap from './LocationMap';

const Card = (props) => {
  const { location } = props;

  return (
    <li className="brewery">
      <div className="card hoverable">
        <h4 className="brewery-name">{location.name}</h4>
        <div className="brewery-basic-info">
          <div className="brewery-location">
            <i className="material-icons">place</i>
            <span>{`${location.city}, ${location.state}`}</span>
          </div>
          <div className="brewery-type">
            <i className="material-icons">local_activity</i>
            <span>{ toTitleCase(location.brewery_type) }</span>
          </div>
        </div>
        <div className="brewery-additional-data">
          <div className="data-left">
            <div className="brewery-address">
              <div className="address-wrapper">
                <p>{ location.street }</p>
                <p>{ `${location.city}, ${location.state}  ${location.postal_code}` }</p>
                <p>{ location.phone }</p>
                <p><a href={location.website_url}>{location.website_url}</a></p>
              </div>
            </div>
          </div>
          <div className="data-right">
            {
              location.latitude && location.longitude &&
                (<LocationMap latitude={location.latitude} longitude={location.longitude} />)
            }
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;