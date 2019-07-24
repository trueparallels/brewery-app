import React from 'react';

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <h4 className="loading-header">
        <span>Loading...</span>
        <span role="img" aria-label="spinning hourglass" className="spinning-hourglass">⏳</span>
      </h4>
    </div>
  );
};

export default Loading;