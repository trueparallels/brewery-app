import React, { useEffect } from 'react';
import M from 'materialize-css';

import { getRegions, presentableStateName } from '../utils';

const Filters = (props) => {
  const regions = getRegions();

  useEffect(() => {
    M.AutoInit();
  }, [])

  return (
    <div className="filters">
      <h5>Filters</h5>

      <div className="input-field">  
        <select className="states">
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