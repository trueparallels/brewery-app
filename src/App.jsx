import React from 'react';

import { useBreweryApi } from './hooks/custom';
import './styles/_base.scss';

import Card from './components/Card';
import Filters from './components/Filters';
import Loading from './components/Loading';

const App = (props) => {
  const PER_PAGE = 50;
  const [{data, page, isLoading, hasMoreDataToLoad}, setPage] = useBreweryApi(PER_PAGE);

  return (
    <div className="app">
      <div className="title-wrapper">
        <h2 className="app-title">Breweries 🍻</h2>
      </div>
      <Filters />
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