import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/_base.scss';

import Card from './components/Card';
import Loading from './components/Loading';

const App = (props) => {
  const PER_PAGE = 50;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreDataToLoad, setHasMoreDataToLoad] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchBreweryData = async () => {
      const breweryData = await axios.get(`https://api.openbrewerydb.org/breweries?by_state=south_carolina&sort=name&per_page=${PER_PAGE}&page=${page}`, {
        crossdomain: true
      });

      if (breweryData.data.length) {
        setData(data.concat(breweryData.data));

        if (breweryData.data.length < PER_PAGE) {
          setHasMoreDataToLoad(false);
        }
      } else {
        setData(breweryData.data);
      }
    }

    fetchBreweryData();
    setIsLoading(false);
  }, [page]);

  return (
    <div className="app">
      <div className="title-wrapper">
        <h2 className="app-title">Breweries of South Carolina 🍻</h2>
      </div>
      { isLoading || !data.length ? (<Loading />) : 
        <div className="brewery-data">
          <ul className="brewery-list">
            { !!data.length &&
              data.map(loc => (
                <Card key={loc.id} location={loc} />
              ))
            }
          </ul>
          <div className="load-more-wrapper">
            <a 
              href="#"
              className={`btn-large waves-effect ${!hasMoreDataToLoad ? 'hide' : ''}`}
              onClick={() => setPage(page + 1)}>Load More</a>
          </div>
        </div>
      }
    </div>
  );
};

export default App;