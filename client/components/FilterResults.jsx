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
const getPercent = (summary) => {
  return Math.floor((summary[0] / summary[1]) * 100);
};

const FilterResults = (props) => {
  var filterPercent = getPercent(props.filterSummary);
  var score = summary2score(props.filterSummary);
  return (
    <FilterResultsContainer>
      <FilterResultsText>
        Showing <b>{props.filterSummary[1]}</b> reviews that match the filters above ( <FilterResultsScore score={score.category}>
          {score.text}
          <TooltipText>{`${filterPercent}% of the ${props.filterSummary[1]} user reviews for this game are positive`}</TooltipText>
        </FilterResultsScore> )
      </FilterResultsText>
    </FilterResultsContainer>
  );
};


const FilterResultsContainer = styled.div`
  padding-top: 10px;
  height: 32px;
`;
const FilterResultsText = styled.div`
  font-size: 15px;
  display: inline-block;
`;
const FilterResultsScore = styled.div`
  display: inline-block;
  position: relative;
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
  cursor: help;
`;
const TooltipText = styled.div`
  position: absolute;
  bottom: 160%;
  width: 285px;
  color: rgb(52, 52, 54);
  font-size: 11px;
  padding: 3px 5px;
  border: 1px #fff none;
  border-radius: 3px;
  background-color: rgb(194, 194, 194);
  visibility: hidden;
  box-shadow: 0 0 5px #000;
  text-shadow: none;
  font-weight: 300;
  line-height: initial;
  ${FilterResultsScore}:hover & {
    visibility: visible;
  }
`;
export default FilterResults;