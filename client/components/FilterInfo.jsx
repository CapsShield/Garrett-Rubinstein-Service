import React from 'react';
import styled from 'styled-components';
import ActiveFilters from './ActiveFilters.jsx';
import FilterResults from './FilterResults.jsx';

const FilterInfo = (props) => {
  return (
    <FilterInfoContainer>
      {props.filters.length === 0 ? null : <ActiveFilters filters={props.filters}/>}
      <FilterResults filterSummary={props.filterSummary}/>
    </FilterInfoContainer>
  );
};

const FilterInfoContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px #000 solid;
  margin-bottom: 20px;
`;

export default FilterInfo;