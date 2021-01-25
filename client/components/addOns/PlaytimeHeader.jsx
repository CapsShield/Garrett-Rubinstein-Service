import React from 'react';
import styled from 'styled-components';

const PlaytimeHeader = () => {
  return (
    <HeaderContainer>
      <VaporLabs>
        <VaporLabsImg src="assets/steam_labs_logo.svg"/>
        <VaporLabsText>Brought to you by Vapor Labs</VaporLabsText>
      </VaporLabs>
      <HeaderText>Filter reviews by the user's playtime when the review was written:</HeaderText>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 300px;
  font-size: 12px;
  border-bottom: 1px solid #4582a5;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;
const VaporLabs = styled.div`
  display: flex;
  cursor: pointer;
`;
const VaporLabsImg = styled.img`
  height: 32px;
  margin-right: 5px;
`;
const VaporLabsText = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #19c0d0;
  line-height: 15px;
  ${VaporLabs}:hover & {
    color: #fff;
  }
`;
const HeaderText = styled.div`
  margin-top: 5px;
  color: #556772;
`;


export default PlaytimeHeader;