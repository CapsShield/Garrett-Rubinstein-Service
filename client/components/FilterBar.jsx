import React from 'react';
import styled from 'styled-components';
import FilterDropdown from './FilterDropdown.jsx';
import DisplaySelector from './DisplaySelector.jsx';
import allFilters from '../allFilters.js';

const FilterBar = (props) => {
  var content = {
    reviewType: [
      {
        id: 'review-type-all',
        value: 'all',
        label: 'All',
        data: props.allReviews
      },
      {
        id: 'review-type-positive',
        value: 'positive',
        label: 'Positive',
        data: props.positive
      },
      {
        id: 'review-type-negative',
        value: 'negative',
        label: 'Negative',
        data: props.allReviews - props.positive
      }
    ],
    purchaseType: [
      {
        id: 'purchase-type-all',
        value: 'all',
        label: 'All'
      },
      {
        id: 'purchase-type-vapor',
        value: 'vapor',
        label: 'Vapor Purchasers',
        tooltip: 'These are reviews written by customers that purchased the game directly from Vapor.'
      },
      {
        id: 'purchase-type-other',
        value: 'other',
        label: 'Other',
        tooltip: 'These are reviews written by customers that did not purchase the game on Vapor. (This may include legitimate sources such as other digital stores, retail stores, testing purposes, or press review purposes. Or, from inappropriate sources such as copies given in exchange for reviews.)'
      }
    ],
    language: [
      {
        id: 'language-all',
        value: 'all',
        label: 'All Languages'
      },
      {
        id: 'language-user',
        value: 'user',
        label: 'Your Languages',
        tooltip: 'Your preferences are currently set to show content authored in these languages: English.\n\n Click \'customize\' below to modify your preferences.'
      }
    ],
    dateRange: [
      {
        id: 'date-range-lifetime',
        value: 'lifetime',
        label: 'Lifetime'
      },
      {
        id: 'date-range-include',
        value: 'include',
        label: 'Only Specific Range (Select on graph above)'
      },
      {
        id: 'date-range-exclude',
        value: 'exclude',
        label: 'Exclude Specific Range (Select on graph above)'
      }
    ],
    playtime: [
      {
        id: 'playtime-no-min',
        value: 'no-min',
        label: 'No Minimum',
      },
      {
        id: 'playtime-over-1-hr',
        value: 'over-1-hr',
        label: 'Over 1 hour'
      },
      {
        id: 'playtime-over-10-hrs',
        value: 'over-10-hrs',
        label: 'Over 10 hours'
      },
      {
        id: 'playtime-over-100-hrs',
        value: 'over-100-hrs',
        label: 'Over 100 hours'
      }
    ]
  };
  return (
    <FilterContainer>
      <FilterDropdown title="review type" content={content.reviewType}/>
      <FilterDropdown title="purchase type" content={content.purchaseType}/>
      <FilterDropdown title="language" content={content.language} default={1}/>
      <FilterDropdown title="date range" content={content.dateRange}/>
      <FilterDropdown title="playtime" content={content.playtime}/>
      <DisplaySelector />
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
  background-image: url(assets/review_graph_expander.png);
  background-position: 0px -12px;
  background-repeat: no-repeat;
  background-size: 14px 26px;
`;

export default FilterBar;