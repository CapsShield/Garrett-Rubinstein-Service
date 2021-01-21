import React from 'react';
import styled from 'styled-components';

const FilterDropdown = (props) => {
  return (
    <DropdownMenu>
      <DropdownTitle>{props.title}</DropdownTitle>
      <DropdownContent>hi</DropdownContent>
    </DropdownMenu>
  );
};

const DropdownMenu = styled.div`
  position: relative;
  text-transform: uppercase;
  font-size: 10px;
  color: #4582a5;
  padding-right: 10px;
  border-left: 1px solid #2a475e;
  &:hover {
    background-color: #c6d4df;
  }
`;
const DropdownTitle = styled.div`
  background-image: url(assets/btn_arrow_down_padded.png);
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: right;
  cursor: pointer;
  padding: 10px 20px 10px 10px;
  ${DropdownMenu}:hover & {
    background-image: url(assets/btn_arrow_down_padded_black.png);
  }
`;
const DropdownContent = styled.div`
  position: absolute;
  visibility: hidden;
  background-color: #c6d4df;
  padding: 10px;
  color: #556772;
  line-height: 20px;
  z-index: 10;
  ${DropdownMenu}:hover & {
    visibility: visible;
  }
`;

export default FilterDropdown;