import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TwoPointSlider = () => {
  var [minActive, setMinActive] = useState(false);
  var [maxActive, setMaxActive] = useState(false);
  var [min, setMin] = useState(0);
  var [max, setMax] = useState(100);

  useEffect(() => {
    if (minActive === true) {
      return;
    }
    console.log('new min: ', min);
  }, [minActive]);
  useEffect(() => {
    if (maxActive === true) {
      return;
    }
    console.log('new max: ', max);
  }, [maxActive]);

  return (
    <Container>
      <Track min={min} max={max} />
      <Slider type="range" id="slider-min" value={min} onChange={(e) => {
        setMinActive(true);
        setMin(Number(e.target.value) > Number(max) ? max : e.target.value);
      }} onMouseUp={() => setMinActive(false)} />
      <Slider type="range" id="slider-max" value={max} onChange={(e) => {
        setMaxActive(true);
        setMax(Number(e.target.value) < Number(min) ? min : e.target.value);
      }} onMouseUp={() => setMaxActive(false)} />
    </Container>
  );

};

const Container = styled.div`
  width: 300px;
  height: 24px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: #c6d4df;
`;
const Track = styled.div.attrs(props => ({
  style: {
    background: `linear-gradient(to right, #fff ${props.min}%, #4582a5 ${props.min}% ${props.max}%, #fff ${props.max}% 100%)`
  }
}))`
  width: 100%;
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
  }
  width: 100%;
  grid-column: 1;
  grid-row: 1;
`;

export default TwoPointSlider;