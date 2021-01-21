import React from 'react';
import styled from 'styled-components';
import FilterDropdown from './FilterDropdown.jsx';
import DisplaySelector from './DisplaySelector.jsx';

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
        label: 'Vapor Purchasers'
      },
      {
        id: 'purchase-type-other',
        value: 'other',
        label: 'Other'
      }
    ]
  };
  return (
    <FilterContainer>
      <FilterDropdown title="review type" content={content.reviewType} default={0}/>
      <FilterDropdown title="purchase type" content={content.purchaseType} default={0}/>
      <FilterDropdown title="language"/>
      <FilterDropdown title="date range"/>
      <FilterDropdown title="playtime"/>
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