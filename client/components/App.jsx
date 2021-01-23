import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ReviewList from './Reviewlist.jsx';
import SummaryBar from './SummaryBar.jsx';
import FilterBar from './FilterBar.jsx';
import FilterInfo from './FilterInfo.jsx';
import allFilters from '../allFilters.js';

const defaultFilters = {};
for (var key in allFilters) {
  defaultFilters[key] = allFilters[key].filter(type => type.default === true)[0];
}

const App = (props) => {
  var [reviews, setReviews] = useState([]);
  var [overallSummary, setOverallSummary] = useState([0, 1]);
  var [recentSummary, setRecentSummary] = useState([0, 1]);
  var [page, setPage] = useState(1);
  var [total, setTotal] = useState(1);
  var [filters, setFilters] = useState(defaultFilters);
  var [filteredSummary, setFilteredSummary] = useState([0, 1]);

  const getApiFilters = () => {
    return {
      reviewType: filters.reviewType.value,
      purchaseType: filters.purchaseType.value,
      language: filters.language.value,
      dateRange: filters.dateRange.value,
      playtime: filters.playtime.value
    };
  };

  const addQueryParams = (url, params) => url + Object.keys(params).map((paramKey, i) => `${i === 0 ? '?' : '&' }${paramKey}=${params[paramKey]}`).join('');

  const fetchFirstPage = (cb = () => {}) => {
    fetch(addQueryParams(`/api/games/${props.gameId || 1}/reviews/0`, getApiFilters()))
      .then(response => response.json())
      .then(parsed => cb(parsed))
      .catch(err => console.error(err));
  };

  const fetchPage = (newPage) => {
    fetch(addQueryParams(`/api/games/${props.gameId || 1}/reviews/${newPage - 1}`, getApiFilters()))
      .then(response => response.json())
      .then(parsed => {
        setReviews(parsed.rows);
        setTotal(parsed.count);
        setPage(newPage);
      })
      .catch(err => console.error(err));
  };

  const fetchSummary = () => {
    fetch(addQueryParams(`/api/games/${props.gameId || 1}/summary`, getApiFilters()))
      .then(response => response.json())
      .then(parsed => {
        setOverallSummary(parsed.overall);
        setRecentSummary(parsed.recent);
        setFilteredSummary(parsed.filtered);
      })
      .catch(err => console.error(err));
  };

  const fetchFilterSummary = () => {
    fetch(addQueryParams(`/api/games/${props.gameId || 1}/summary/filterOnly`, getApiFilters()))
      .then(response => response.json())
      .then(parsed => {
        setFilteredSummary(parsed.filtered);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    //fetch page 0 of reviews
    fetchFirstPage(parsed => {
      setReviews(parsed.rows);
      setTotal(parsed.count);
    });

    fetchSummary();
  }, []);

  useEffect(() => {
    fetchFirstPage(parsed => {
      setReviews(parsed.rows);
      setTotal(parsed.count);
      setPage(1);
    });
    fetchFilterSummary();
  }, [filters]);


  return (
    <div>
      <GlobalStyle />
      <GridContainer>
        <AppContainer>
          <AppHeader>customer reviews</AppHeader>
          <SummaryBar overallSummary={overallSummary} recentSummary={recentSummary} />
          <FilterBar positive={overallSummary[0]} allReviews={overallSummary[1]} filters={filters} setFilters={setFilters}/>
          <FilterInfo filters={filters} setFilters={setFilters} filterSummary={filteredSummary}/>
          <ReviewList reviews={reviews} page={page} fetchPage={fetchPage} total={total} />
        </AppContainer>
      </GridContainer>
    </div>
  );
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    background-color: #1b2938;
    color: #c6d4df;
    font-family: Arial, sans-serif;
  }
`;
const AppHeader = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  letter-spacing: 2px;
  padding-top: 2px;
  padding-bottom: 4px;
  margin: 0px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 940px 1fr;
  border-top: 1px #000 solid;
`;
const AppContainer = styled.div`
  grid-column: 2;
`;

export default App;