import React from 'react';
import { Lazy } from 'react-lazy';
import PropTypes from 'prop-types';

import { presentableBreweryName } from '../utils';

const encodeLocationForMapsRequest = (location) => {
  const { name, street, city, state, latitude, longitude } = location;

  if (street && street !== '') {
    return encodeURIComponent(`${presentableBreweryName(name)}, ${street}, ${city}, ${state}`);
  }
  
  if (latitude && longitude) {
    return encodeURIComponent(`${latitude},${longitude}`);
  }

  return null;
};

const LocationMap = (props) => {
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
  const { location } = props;
  const place = encodeLocationForMapsRequest(location);

  if (!place) {
    return (
      <div>
        <span>Sorry, no map available yet!</span>
      </div>
    );
  }

  const url = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${place}&zoom=18&maptype=roadmap`;

  return (
    <Lazy component="div">
      <iframe
        title="map"
        style={{ width: '100%', height: '300px'}}
        src={url}
        frameBorder="0"
        allowFullScreen></iframe>
    </Lazy>
  );
};

LocationMap.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string,
  }).isRequired,
}

export default LocationMap;