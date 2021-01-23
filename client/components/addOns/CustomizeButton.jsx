import React from 'react';
import styled from 'styled-components';

const CustomizeButton = () =>
  <Container>
    <CustomizeBtn>customize</CustomizeBtn>
  </Container>;

const Container = styled.div`
  padding: 0;
  margin: 0;
`;

const CustomizeBtn = styled.button`
  text-transform: uppercase;
  color: #67c1f5;
  font-size: 10px;
  background: rgba(0, 0, 0, 0.5);
  padding: 3px 5px;
  border: none;
  border-radius: 2px;
  margin-left: 5px;
`;

export default CustomizeButton;