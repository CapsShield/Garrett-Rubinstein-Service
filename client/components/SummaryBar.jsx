import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  background-color: #2a475e;
  width: 940px;
  height: 63px;
  box-shadow: 0 0 5px #000;
  display: grid;
  grid-template-columns: 605px 1fr;
  border-bottom: 1px #000 solid;
`;
const OverallSummary = styled.div`
  grid-column: 1;
  padding: 10px;
`;
const RecentSummary = styled.div`
  grid-column: 2;
  padding: 10px;
  box-shadow: 0 0 5px #000;
  background-color: rgba(148, 217, 255, 0.2) ;
`;
const SummaryDetails = styled.div`
  display: flex
`;
const SummaryTitle = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
  color: #e5e5e5;
  height: 22px;
`;
const SummaryScore = styled.div`
  color: ${props => {
    if (props.score === 'positive') {
      return '#66C0F4';
    } else if (props.score === 'mixed') {
      return '#a8926a';
    } else {
      return '#c35c2c';
    }
  }};
  font-size: 17px;
  font-weight: bold;
  text-shadow: 1px 1px rgba( 0, 0, 0, 0.2 );;
  line-height: 11px;
`;
const SummaryReviewCount = styled.div`
  color: #8ba6b6;
  font-size: 12px;
  margin-left: 2px;
`;
const SummaryTooltip = styled.div`
  height: 14px;
  width: 12px;
  margin-left: 2px;
  background-image: url('assets/icon_questionmark.png');
  background-repeat: no-repeat;
`;
const SummaryBar = (props) => {
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

  var overallScore = summary2score(props.overallSummary);
  var recentScore = summary2score(props.recentSummary);

  return (
    <SummaryContainer>
      <OverallSummary>
        <SummaryTitle>Overall Reviews:</SummaryTitle>
        <SummaryDetails>
          <SummaryScore score={overallScore.category}>{overallScore.text}</SummaryScore>
          <SummaryReviewCount>{`(${props.overallSummary[1]} review${props.overallSummary !== 1 ? 's' : null})`}</SummaryReviewCount>
          <SummaryTooltip></SummaryTooltip>
        </SummaryDetails>
      </OverallSummary>
      <RecentSummary>
        <SummaryTitle>Recent Reviews:</SummaryTitle>
        <SummaryDetails>
          <SummaryScore score={recentScore.category}>{recentScore.text}</SummaryScore>
          <SummaryReviewCount>{`(${props.recentSummary[1]} review${props.recentSummary !== 1 ? 's' : null})`}</SummaryReviewCount>
          <SummaryTooltip></SummaryTooltip>
        </SummaryDetails>
      </RecentSummary>
    </SummaryContainer>
  );
};

export default SummaryBar;