import React from 'react';
import styled from 'styled-components';
import TwoPointSlider from './TwoPointSlider.jsx';
import allFilters from '../allFilters.js';

const rangeFilter = allFilters.playtime.find(filter => filter.value === 'range');
const noFilter = allFilters.playtime.find(filter => filter.value === 'no-min');

const PlaytimeSlider = ({min, setMin, max, setMax, setFilters}) => {
  const setRangeFilter = () => {
    setFilters((filters) => {
      filters.playtime = (Number(min) === 0 && Number(max) === 100) ? noFilter : rangeFilter;
      return Object.assign({}, filters);
    });
  };

  return (
    <PlaytimeSliderContainer>
      <SliderText><b>{Number(min) === 0 ? 'No minimum' : `${min} hour(s)`}</b> to <b>{Number(max) === 100 ? 'No maximum' : `${max} hour(s)`}</b></SliderText>
      <TwoPointSlider min={min} setMin={setMin} max={max} setMax={setMax} changeHandler={setRangeFilter}/>
    </PlaytimeSliderContainer>
  );
};

const PlaytimeSliderContainer = styled.div``;
const SliderText = styled.div`
  color: #556772;
  font-size: 12px;
  line-height: 20px;
  margin: 0px 5px;
`;


export default PlaytimeSlider;

