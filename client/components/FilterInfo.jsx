import React from 'react';
import styled from 'styled-components';
import ActiveFilters from './ActiveFilters.jsx';
import FilterResults from './FilterResults.jsx';

const FilterInfo = (props) => {
  return (
    <FilterInfoContainer>
      {Object.keys(props.filters)
        .map(type => props.filters[type])
        .filter(filter => !filter.hideActive)
        .length === 0 ? null : <ActiveFilters filters={props.filters} setFilters={props.setFilters} minPlaytime={props.minPlaytime} maxPlaytime={props.maxPlaytime}/>
      }
      {props.filters.reviewType.value !== 'all' ? null : <FilterResults filterSummary={props.filterSummary}/>}
    </FilterInfoContainer>
  );
};

const FilterInfoContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px #000 solid;
  margin-bottom: 20px;
`;

export default FilterInfo;