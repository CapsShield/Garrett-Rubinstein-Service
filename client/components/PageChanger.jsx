import React from 'react';
import styled from 'styled-components';

const PageChanger = ({page, fetchPage, total}) => {
  var lastPage = Math.ceil(total / 10);
  return (
    <PageContainer>
      {page === 1 ? null : <Prev onClick={() => fetchPage(page - 1)}>&lt;</Prev>}
      <Current>{page}/{lastPage}</Current>
      {page === lastPage ? null : <Next onClick={() => fetchPage(page + 1)}>&gt;</Next>}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 20px;
`;
const Current = styled.div`
  display: flex;
  grid-column: 2;
  justify-content: center;
`;
const Button = styled.button`
  display: flex;
  cursor: pointer;
  width: fit-content;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to bottom, rgb(47, 137, 188) 5%, rgb(23, 67, 92) 95%);
  color: rgb(164, 215, 245);
  border: none;
  border-radius: 2px;
  &:hover {
    background-image: linear-gradient( to bottom, rgba(102,192,244,1) 5%, rgba(47,137,188,1) 95%);
    color: #fff;
  }
`;
const Prev = styled(Button)`
  grid-column: 1;
  justify-self: end;
`;
const Next = styled(Button)`
  grid-column: 3;
`;

export default PageChanger;