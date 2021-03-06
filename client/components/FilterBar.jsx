import React from 'react';
import styled from 'styled-components';
import FilterDropdown from './FilterDropdown.jsx';
import DisplaySelector from './DisplaySelector.jsx';
import allFilters from '../allFilters.js';

import CustomizeButton from './CustomizeButton.jsx';
import DateRangeExplainer from './DateRangeExplainer.jsx';
import PlaytimeHeader from './PlaytimeHeader.jsx';
import PlaytimeSlider from './PlaytimeSlider.jsx';

import graphExpander from '../assets/review_graph_expander.png';

const FilterBar = (props) => {
  return (
    <FilterContainer>
      <FilterDropdown type="reviewType" title="review type" content={allFilters.reviewType} positive={props.positive} allReviews={props.allReviews} filters={props.filters} setFilters={props.setFilters}/>
      <FilterDropdown type="purchaseType" title="purchase type" content={allFilters.purchaseType} filters={props.filters} setFilters={props.setFilters} vapor={props.vapor} allReviews={props.allReviews}/>
      <FilterDropdown type="language" title="language" content={allFilters.language} filters={props.filters} setFilters={props.setFilters} language={props.language} allReviews={props.allReviews} postContent={<CustomizeButton />}/>
      <FilterDropdown type="dateRange" title="date range" content={allFilters.dateRange} filters={props.filters} setFilters={props.setFilters} preContent={<DateRangeExplainer />}/>
      <FilterDropdown type="playtime" title="playtime" content={allFilters.playtime} filters={props.filters} setFilters={props.setFilters} preContent={<PlaytimeHeader />} postContent={<PlaytimeSlider min={props.minPlaytime} setMin={props.setMinPlaytime} max={props.maxPlaytime} setMax={props.setMaxPlaytime} setFilters={props.setFilters}/>}/>
      <DisplaySelector sort={props.sort} setSort={props.setSort}/>
      <ShowGraph>
        <ShowGraphTitle>Show graph</ShowGraphTitle>
        <ExpandGraphIcon />
      </ShowGraph>
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
const ShowGraph = styled.div`
  padding: 1px;
  border: none;
  border-radius: 2px;
  background: rgba( 103, 193, 245, 0.2 );
  height: 23px;
  display: flex;
  justfy-self: flex-end;
  margin-left: auto;
  cursor: pointer;
  color: #67c1f5;
  &:hover {
    color: #fff;
    background: linear-gradient( -60deg, #417a9b 5%,#67c1f5 95%);
  }
`;
const ShowGraphTitle = styled.div`
  padding: 0px 5px;
  font-size: 12px;
  line-height: 20px;
`;
const ExpandGraphIcon = styled.div`
  width: 14px;
  height: 16px;
  margin-right: 7px;
  margin-top: 4px;
  background-image: url(${graphExpander});
  background-position: 0px -12px;
  background-repeat: no-repeat;
  background-size: 14px 26px;
`;

export default FilterBar;