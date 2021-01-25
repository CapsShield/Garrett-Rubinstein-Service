import React from 'react';
import styled from 'styled-components';

const DateRangeExplainer = () => {
  return (
    <ExplainerContainer>
      <ExplainerText>To view reviews within a date range, please click and drag a selection on a graph above or click on a specific bar.</ExplainerText>
      <ExplainerButton>Show graph</ExplainerButton>
    </ExplainerContainer>
  );
};

export default DateRangeExplainer;

const ExplainerContainer = styled.div`
  white-space: normal;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #4582a5;
`;
const ExplainerText = styled.div`
  margin-bottom: 20px;
  font-size: 12px;
`;
const ExplainerButton = styled.button`
  border-radius: 2px;
  border: none;
  padding: 1px 6px;
  cursor: pointer;
  text-decoration: none;
  color: #A4D7F5;
  background: linear-gradient( to bottom, rgba(47,137,188,1) 5%, rgba(23,67,92,1) 95%);
  font-size: 12px;
  line-height: 20px;
  &:hover {
    color: #fff;
    background: linear-gradient( to bottom, rgba(102,192,244,1) 5%, rgba(47,137,188,1) 95%);
  }
`;