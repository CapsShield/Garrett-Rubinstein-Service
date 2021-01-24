import React from 'react';
import styled from 'styled-components';
import allFilters from '../allFilters.js';

const openFilters = {};
for (var key in allFilters) {
  openFilters[key] = allFilters[key].filter(type => type.hideActive === true)[0];
}

const ActiveFilters = (props) => {
  const revertFilter = (filterType) => {
    props.setFilters(filters => {
      filters[filterType] = openFilters[filterType];
      return Object.assign({}, filters);
    });
  };
  const handleClick = (e) => {
    revertFilter(e.target.getAttribute('data-type'));
  };

  return (
    <ActiveFilterContainer>
      <ActiveFilterTitle>Filters</ActiveFilterTitle>
      {Object.keys(props.filters).map(filterType => {
        const filter = props.filters[filterType];
        return filter.hideActive ? null : (<FilterBox key={filter.id} data-type={filterType} onClick={handleClick}>
          {filter.activeLabelFunction ? filter.activeLabelFunction(...(filter.activeLabelArgsProps.map(prop => props[prop]))) : (filter.activeLabel ? filter.activeLabel : filter.label)}
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