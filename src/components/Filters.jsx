import React, { useState, useEffect } from 'react';
import M from 'materialize-css';

import { getRegions, presentableStateName } from '../utils';

const Filters = (props) => {
  const { dispatch } = props;
  const regions = getRegions();
  const [selectedState, setSelectedState] = useState('south_carolina');

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleChange = (event) => {
    dispatch({type: 'STATE_FILTER_CHANGE', payload: { filter: event.target.value }})
  };

  return (
    <div className="filters">
      <h5>Filters</h5>

      <div className="input-field">  
        <select
          className="states"
          onChange={handleChange}
          defaultValue={selectedState}>
          {
            regions.map((item) => (
              <option key={item} value={item}>{ presentableStateName(item) }</option>
            ))
          }
        </select>
      </div>
    </div>
  );
};

export default Filters;