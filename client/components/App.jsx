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
  var [initialCounts, setInitialCounts] = useState({
    positive: 0,
    vapor: 0,
    language: 0
  });
  var [sort, setSort] = useState('recent');
  var [minPlaytime, setMinPlaytime] = useState(0);
  var [maxPlaytime, setMaxPlaytime] = useState(100);

  const fetchInitialCounts = () => {
    fetch(`/api/games/${props.gameId || 1}/filterCounts`)
      .then(response => response.json())
      .then(parsed => {
        setInitialCounts({
          positive: parsed.positive,
          vapor: parsed.vapor,
          language: parsed.language
        });
      })
      .catch(err => console.error(err));
  };
  const getApiFilters = () => {
    return {
      reviewType: filters.reviewType.value,
      purchaseType: filters.purchaseType.value,
      language: filters.language.value,
      dateRange: filters.dateRange.value,
      playtime: filters.playtime.value
    };
  };

  const addQueryParams = (url, sort, params) => {
    var built = url + `?sort=${sort}` + Object.keys(params).map((paramKey, i) => `&${paramKey}=${params[paramKey]}`).join('');
    if (params.playtime === 'range') {
      built += minPlaytime > 0 ? `&rangeMin=${minPlaytime}` : '';
      built += maxPlaytime < 100 ? `&rangeMax=${maxPlaytime}` : '';
    }
    return built;
  };

  const fetchFirstPage = (cb = () => {}) => {
    fetch(addQueryParams(`/api/games/${props.gameId || 1}/reviews/0`, sort, getApiFilters()))
      .then(response => response.json())
      .then(parsed => cb(parsed))
      .catch(err => console.error(err));
  };

  const fetchPage = (newPage) => {
    fetch(addQueryParams(`/api/games/${props.gameId || 1}/reviews/${newPage - 1}`, sort, getApiFilters()))
      .then(response => response.json())
      .then(parsed => {
        setReviews(parsed.rows);
        setTotal(parsed.count);
        setPage(newPage);
      })
      .catch(err => console.error(err));
  };

  const fetchSummary = () => {
    fetch(addQueryParams(`/api/games/${props.gameId || 1}/summary`, sort, getApiFilters()))
      .then(response => response.json())
      .then(parsed => {
        setOverallSummary(parsed.overall);
        setRecentSummary(parsed.recent);
        setFilteredSummary(parsed.filtered);
      })
      .catch(err => console.error(err));
  };

  const fetchFilterSummary = () => {
    fetch(addQueryParams(`/api/games/${props.gameId || 1}/summary/filterOnly`, sort, getApiFilters()))
      .then(response => response.json())
      .then(parsed => {
        setFilteredSummary(parsed.filtered);
      })
      .catch(err => console.error(err));
  };

  const fetchForSort = () => {
    fetch(addQueryParams(`/api/games/${props.gameId || 1}/reviews/${page - 1}`, sort, getApiFilters()))
      .then(response => response.json())
      .then(parsed => setReviews(parsed.rows))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchFirstPage(parsed => {
      setReviews(parsed.rows);
      setTotal(parsed.count);
    });

    fetchSummary();

    fetchInitialCounts();
  }, []);

  useEffect(() => {
    var {value} = filters.playtime;
    if (value === 'no-min') {
      setMinPlaytime(0);
      setMaxPlaytime(100);
    } else if (value === 'over-1-hr') {
      setMinPlaytime(1);
      setMaxPlaytime(100);
    } else if (value === 'over-10-hrs') {
      setMinPlaytime(10);
      setMaxPlaytime(100);
    }

    fetchFirstPage(parsed => {
      setReviews(parsed.rows);
      setTotal(parsed.count);
      setPage(1);
    });
    fetchFilterSummary();
  }, [filters]);

  useEffect(() => {
    fetchForSort();
  }, [sort]);


  return (
    <div>
      <GlobalStyle />
      <GridContainer>
        <AppContainer>
          <AppHeader>customer reviews</AppHeader>
          <SummaryBar overallSummary={overallSummary} recentSummary={recentSummary} />
          <FilterBar positive={initialCounts.positive} vapor={initialCounts.vapor} language={initialCounts.language} allReviews={overallSummary[1]} filters={filters} setFilters={setFilters} sort={sort} setSort={setSort} minPlaytime={minPlaytime} setMinPlaytime={setMinPlaytime} maxPlaytime={maxPlaytime} setMaxPlaytime={setMaxPlaytime}/>
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