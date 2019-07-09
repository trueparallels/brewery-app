import React from 'react';

const LocationMap = (props) => {
  const API_KEY = '***REMOVED***';
  const { latitude, longitude } = props;

  const url = `https://www.google.com/maps/embed/v1/view?key=${API_KEY}&center=${latitude},${longitude}&zoom=18&maptype=roadmap`;

  return (
    <iframe 
      style={{ width: '100%', height: '300px'}}
      src={url}
      frameBorder="0"
      allowFullScreen></iframe>
  );
};

export default LocationMap;