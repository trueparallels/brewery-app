import React from 'react';

const Loading = (props) => {
  return (
    <div className="loading-wrapper">
      <h4 className="loading-header">
        <span>Loading...</span>
        <span className="spinning-hourglass">⏳</span></h4>
    </div>
  );
};

export default Loading;