import React from 'react';

const Favorite = (props) => {
  const { isFavorite, clickHandler, likes } = props;

  return (
    <a href="#" onClick={clickHandler}>
      <span className='brewery-likes'>{ likes > 0 ? likes : '--' }</span>
      <span className={`favorite-marker ${ isFavorite ? 'filled' : 'not-filled'}`}>
        <i className="material-icons favorite">{ isFavorite ? 'favorite' : 'favorite_border' }</i>
      </span>
    </a>
  );
};

export default Favorite;