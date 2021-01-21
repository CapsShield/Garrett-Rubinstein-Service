import React from 'react';
import styled from 'styled-components';
import FilterDropdown from './FilterDropdown.jsx';
import DisplaySelector from './DisplaySelector.jsx';

const FilterBar = (props) => {
  return (
    <FilterContainer>
      <FilterDropdown title="review type"/>
      <FilterDropdown title="purchase type"/>
      <FilterDropdown title="language"/>
      <FilterDropdown title="date range"/>
      <FilterDropdown title="playtime"/>
      <DisplaySelector />
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  width: 940px;
  height: 31px;
  margin-bottom: 30px;
  background-color: #1f2f42;
  display: flex;
`;

export default FilterBar;