import React from 'react';
import PropTypes from 'prop-types';

const Favorite = (props) => {
  const { isFavorite, clickHandler, likes } = props;

  return (
    <button className="favorite-button" type="button" onClick={clickHandler}>
      <span className="brewery-likes">{likes > 0 ? likes : '--'}</span>
      <span className={`favorite-marker ${isFavorite ? 'filled' : 'not-filled'}`}>
        <i className="material-icons favorite">{isFavorite ? 'favorite' : 'favorite_border'}</i>
      </span>
    </button>
  );
};

Favorite.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Favorite;
