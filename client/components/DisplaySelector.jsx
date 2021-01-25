import React from 'react';
import styled from 'styled-components';

const DisplaySelector = (props) => {
  return (
    <SelectorContainer>
      <span>Display as:</span>
      <Selector value={props.sort} onChange={(e) => props.setSort(e.target.value)}>
        <option value="summary">Summary</option>
        <option value="helpful">Most Helpful</option>
        <option value="recent">Recent</option>
        <option value="funny">Funny</option>
      </Selector>
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  border-left: 1px solid #2a475e;
  font-size: 10px;
  color: #4582a5;
  text-transform: uppercase;
  padding: 5px 10px;
  display: flex;
  align-items: center;
`;
const Selector = styled.select`
  margin-left: 5px;
  font-size: 12px;
  background: #4582a5;
  border: none;
  border-radius: 2px;
`;

export default DisplaySelector;