import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReviewList from './Reviewlist.jsx';
import SummaryBar from './SummaryBar.jsx';
import FilterBar from './FilterBar.jsx';



const App = (props) => {
  var [reviews, setReviews] = useState([]);
  var [overallSummary, setOverallSummary] = useState([0, 1]);
  var [recentSummary, setRecentSummary] = useState([0, 1]);
  var [page, setPage] = useState(1);
  var [total, setTotal] = useState(1);
  useEffect(() => {
    //fetch page 0 of reviews
    fetch(`/api/games/${props.gameId || 1}/reviews/0`)
      .then(response => response.json())
      .then(parsed => {
        setReviews(parsed.rows);
        setTotal(parsed.count);
      })
      .catch(err => console.error(err));

    fetch(`/api/games/${props.gameId || 1}/summary`)
      .then(response => response.json())
      .then(parsed => {
        setOverallSummary(parsed.overall);
        setRecentSummary(parsed.recent);
      })
      .catch(err => console.error(err));
  }, []);

  const changePage = (newPage) => {
    fetch(`/api/games/${props.gameId || 1}/reviews/${newPage - 1}`)
      .then(response => response.json())
      .then(parsed => {
        setReviews(parsed.rows);
        setTotal(parsed.count);
        setPage(newPage);
      })
      .catch(err => console.error(err));
  };

  return (
    <GridContainer>
      <AppContainer>
        <AppHeader>customer reviews</AppHeader>
        <SummaryBar overallSummary={overallSummary} recentSummary={recentSummary} />
        <FilterBar positive={overallSummary[0]} allReviews={overallSummary[1]} />
        <ReviewList reviews={reviews} page={page} changePage={changePage} total={total}/>
      </AppContainer>
    </GridContainer>
  );
};

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
  grid-column-template: 1fr 940px 1fr;
  border-top: 1px #000 solid;
`;
const AppContainer = styled.div`
  grid-column: 2;
`;

export default App;