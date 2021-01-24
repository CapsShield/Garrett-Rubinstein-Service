import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TwoPointSlider = ({min, setMin, max, setMax, changeHandler}) => {
  var [minActive, setMinActive] = useState(false);
  var [maxActive, setMaxActive] = useState(false);

  useEffect(() => {
    if (minActive === true) {
      return;
    }
    changeHandler();
  }, [minActive]);
  useEffect(() => {
    if (maxActive === true) {
      return;
    }
    changeHandler();
  }, [maxActive]);

  return (
    <Container>
      <Track min={min} max={max} />
      <Slider type="range" id="slider-max" value={max} onChange={(e) => {
        setMaxActive(true);
        setMax(Number(e.target.value) < Number(min) ? min : e.target.value);
      }} onMouseUp={() => setMaxActive(false)} />
      <Slider type="range" id="slider-min" value={min} onChange={(e) => {
        setMinActive(true);
        setMin(Number(e.target.value) > Number(max) ? max : e.target.value);
      }} onMouseUp={() => setMinActive(false)} />
    </Container>
  );

};

const Container = styled.div`
  width: 285px;
  height: 24px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: #c6d4df;
  margin-left: 7px;
`;
const Track = styled.div.attrs(props => ({
  style: {
    background: `linear-gradient(to right, #fff ${props.min}%, #4582a5 ${props.min}% ${props.max}%, #fff ${props.max}% 100%)`
  }
}))`
  width: 98%;
  height: 4px;
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  justify-self: center;
`;
const Slider = styled.input`
  -webkit-appearance: none;
  outline: none;
  background: transparent;
  pointer-events: none;

  &::-webkit-slider-thumb {
    pointer-events: auto;
    -webkit-appearance: none;
    background: #f6f6f6;
    height: 14px;
    width: 14px;
    border-radius: 7px;
    box-shadow: 0px 0px 4px 0px #000000;
    border: none;
    cursor: pointer;
  }
  width: 100%;
  grid-column: 1;
  grid-row: 1;
`;

export default TwoPointSlider;