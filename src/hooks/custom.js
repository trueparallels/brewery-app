import { useState, useEffect } from 'react';
import axios from 'axios';

export function useBreweryApi(perPage) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreDataToLoad, setHasMoreDataToLoad] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchBreweryData = async () => {
      const breweryData = await axios.get(`https://api.openbrewerydb.org/breweries?by_state=south_carolina&sort=name&per_page=${perPage}&page=${page}`, {
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
  }, [page]);

  return [{data, page, isLoading, hasMoreDataToLoad}, setPage];
};