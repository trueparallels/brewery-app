import React, { useState } from 'react';
import { toTitleCase, presentableBreweryName } from '../utils';

import LocationMap from './LocationMap';
import Favorite from './Favorite';

import { useLikesApi } from "../hooks/custom";

const Card = (props) => {
  const { location, breweryId } = props;
  const [showDetails, setShowDetails] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [likesState, makePutRequest] = useLikesApi({verb: 'put', breweryId: breweryId});

  const handleCardClick = (event) => {
    if (event.target.className.includes('favorite')) {
      return;
    }

    setShowDetails(!showDetails); 
  };

  const handleFavoriteClick = (event) => {
    event.preventDefault();

    if (!event.target.className.includes('favorite')) {
      return;
    }

    if (!isFavorite) {
      makePutRequest();
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  return (
    <li className="brewery">
      <div className="card hoverable" onClick={handleCardClick}>
        <div className="brewery-top">
          <h4 className="brewery-name">{presentableBreweryName(location.name)}</h4>
          <Favorite likes={likesState.likes} clickHandler={handleFavoriteClick} isFavorite={isFavorite} />
        </div>
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
        <div className={`brewery-additional-data ${showDetails ? '' : 'hide'}`}>
          <div className="data-left">
            <LocationMap location={location} />
          </div>
          <div className="data-right">
            <div className="brewery-address">
              <div className="address-wrapper">
                <p>{ location.street }</p>
                <p>{ `${location.city}, ${location.state}  ${location.postal_code}` }</p>
                <p>{ location.phone }</p>
                <p><a href={location.website_url}>{location.website_url}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;