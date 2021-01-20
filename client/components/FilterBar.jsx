import React from 'react';
import styled from 'styled-components';
import FilterDropdown from './FilterDropdown.jsx';

const FilterBar = (props) => {
  return (
    <FilterContainer>
      <FilterDropdown title="review type"></FilterDropdown>
      <FilterDropdown title="purchase type"></FilterDropdown>
      <FilterDropdown title="language"></FilterDropdown>
      <FilterDropdown title="date range"></FilterDropdown>
      <FilterDropdown title="playtime"></FilterDropdown>
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