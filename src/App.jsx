import React from 'react';

import { useBreweryApi } from './hooks/custom';
import './styles/_base.scss';

import Card from './components/Card';
import Filters from './components/Filters';
import Loading from './components/Loading';

const initialState = {
  filter: 'south_carolina',
  page: 1,
  data: [],
  perPage: 50,
};

const App = () => {
  const [{ state, isLoading, hasMoreDataToLoad }, dispatch] = useBreweryApi(initialState);
  const { data } = state;

  const handleLoadMore = (event) => {
    dispatch({ type: 'LOAD_MORE', payload: {} });
    event.preventDefault();
  };

  return (
    <div className="app">
      <div className="title-wrapper">
        <h2 className="app-title">
          Breweries
          <span role="img" aria-label="beers!">
            🍻
          </span>
        </h2>
      </div>
      <Filters dispatch={dispatch} defaultState={initialState.filter} />
      {isLoading || !data.length ? (
        <Loading />
      ) : (
        <div className="brewery-data">
          <ul className="brewery-list">
            {!!data.length
              && data.map(loc => <Card key={loc.id} breweryId={loc.id} location={loc} />)}
          </ul>
          <div className="load-more-wrapper">
            <button
              type="button"
              className={`btn-large waves-effect ${!hasMoreDataToLoad ? 'hide' : ''}`}
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
