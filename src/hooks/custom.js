import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import breweryReducer from '../reducers/breweryReducer';
import likesReducer from '../reducers/likesReducer';

export function useBreweryApi(initialState) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreDataToLoad, setHasMoreDataToLoad] = useState(true);
  const [state, dispatch] = useReducer(breweryReducer, initialState);
  const { filter, page, data, perPage } = state;

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

export function useLikesApi({ verb = 'get', breweryId }) {
  const [state, dispatch] = useReducer(likesReducer, { likes: 0 });
  const API_URL_TEMPLATE = `${process.env.LIKES_API_BASE_URL}/likes/${breweryId}`;

  const makeRequest = async () => {
    const likesData = await axios[verb](API_URL_TEMPLATE, {
      crossdomain: true
    });

    dispatch({ type: 'FETCH_SUCCESS', payload: { data: likesData}});
  };

  return [state, makeRequest];
}