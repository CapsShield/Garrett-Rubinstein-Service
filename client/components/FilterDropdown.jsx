import React from 'react';
import styled from 'styled-components';

const FilterDropdown = (props) => {
  return (
    <DropdownMenu>{props.title}</DropdownMenu>
  );
};

const DropdownMenu = styled.div`
  text-transform: uppercase;
  font-size: 10px;
  color: #4582a5;
  padding: 10px 20px 10px 10px;
  cursor: pointer;
  background-image: url(assets/btn_arrow_down_padded.png);
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: right;
  border-left: 1px solid #2a475e;
  margin-right: 10px;
`;

export default FilterDropdown;