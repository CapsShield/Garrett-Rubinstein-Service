import React from 'react';
import styled from 'styled-components';

const ActiveFilters = ({ filters }) => {
  return (
    <ActiveFilterContainer>
      <ActiveFilterTitle>Filters</ActiveFilterTitle>
      {Object.keys(filters).map(filterType => {
        const filter = filters[filterType];
        return filter.hideActive ? null : (<FilterBox key={filter.id}>
          {filter.activeLabel ? filter.activeLabel : filter.label}
        </FilterBox>);
      })}
    </ActiveFilterContainer>
  );
};

const ActiveFilterContainer = styled.div`
  display: flex;
  height: 27px;
`;
const ActiveFilterTitle = styled.div`
  font-size: 15px;
  margin-right: 7px;
  padding-bottom: 5px;
`;
const FilterBox = styled.div`
  padding: 5px 25px 5px 5px;
  margin-right: 5px;
  border-radius: 2px;
  background-image: url(assets/deleteSearchTerm.png);
  cursor: pointer;
  background-position: right 5px center;
  background-repeat: no-repeat;
  background-color: rgba( 255, 255, 255, 0.2 );
  font-size: 12px;
  height: 24px;
`;

export default ActiveFilters;