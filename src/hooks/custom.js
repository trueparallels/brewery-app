import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import reducer from '../reducer';

export function useBreweryApi(perPage, initialState) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreDataToLoad, setHasMoreDataToLoad] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { filter, page, data } = state;

  const setData = (data) => {
    dispatch({type: 'UPDATE_DATA', payload: { data: data }});
  }

  useEffect(() => {
    const API_URL_TEMPLATE = `https://api.openbrewerydb.org/breweries?by_state=${filter}&sort=name&per_page=${perPage}&page=${page}`
    setIsLoading(true);
    setHasMoreDataToLoad(true);

    const fetchBreweryData = async () => {
      const breweryData = await axios.get(API_URL_TEMPLATE, {
        crossdomain: true
      });

      if (breweryData.data.length) {
        setData(data.concat(breweryData.data));

        if (breweryData.data.length < perPage) {
          setHasMoreDataToLoad(false);
        }
      } else {
        setData(breweryData.data);
      }
    }

    fetchBreweryData();
    setIsLoading(false);
  }, [page, filter]);

  return [{state, isLoading, hasMoreDataToLoad}, dispatch];
};