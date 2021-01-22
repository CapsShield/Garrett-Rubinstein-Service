import React from 'react';
import styled from 'styled-components';

const summary2score = (summary) => {
  var [pos, total] = summary;
  var ratio = pos / total;
  var score = {};
  if ((total >= 100) && (ratio >= 0.95)) {
    score.text = 'Overwhelmingly Positive';
  } else if ((total >= 25) && (ratio >= 0.85)) {
    score.text = 'Very Positive';
  } else if (ratio >= 0.8) {
    score.text = 'Positive';
  } else if (ratio >= 0.7) {
    score.text = 'Mostly Positive';
  } else if (ratio >= 0.4) {
    score.text = 'Mixed';
  } else if (ratio >= 0.2) {
    score.text = 'Mostly Negative';
  } else if (total >= 100) {
    score.text = 'Overwhelmingly Negative';
  } else if (total >= 25) {
    score.text = 'Very Negative';
  } else {
    score.text = 'Negative';
  }
  if (ratio >= 0.7) {
    score.category = 'positive';
  } else if (ratio >= 0.4) {
    score.category = 'mixed';
  } else {
    score.category = 'negative';
  }

  return score;
};

const FilterResults = (props) => {
  var score = summary2score(props.filterSummary);
  return (
    <FilterResultsContainer>
      <FilterResultsText>
        Showing <b>{props.filterSummary[1]}</b> reviews that match the filters above ( <FilterResultsScore score={score.category}>{score.text}</FilterResultsScore> )
      </FilterResultsText>
    </FilterResultsContainer>
  );
};


const FilterResultsContainer = styled.div`
  padding-top: 10px;
  height: 32px;
`;
const FilterResultsText = styled.span`
  font-size: 15px;
`;
const FilterResultsScore = styled.span`
  font-weight: bold;
  color: ${props => {
    if (props.score === 'positive') {
      return '#66C0F4;';
    }
    if (props.score === 'mixed') {
      return '#a8926a;';
    }
    return '#c35c2c;';
  }}
`;

export default FilterResults;