import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';

import { getRegions, presentableStateName } from '../utils';

const Filters = (props) => {
  const { dispatch, defaultState } = props;
  const regions = getRegions();

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleChange = (event) => {
    dispatch({ type: 'STATE_FILTER_CHANGE', payload: { filter: event.target.value } });
  };

  return (
    <div className="filters">
      <h5>Filters</h5>

      <div className="input-field">
        <select className="states" onChange={handleChange} defaultValue={defaultState}>
          {regions.map(item => (
            <option key={item} value={item}>
              {presentableStateName(item)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

Filters.propTypes = {
  dispatch: PropTypes.func.isRequired,
  defaultState: PropTypes.string.isRequired,
};

export default Filters;
