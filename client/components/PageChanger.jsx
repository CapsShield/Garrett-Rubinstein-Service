import React from 'react';
import styled from 'styled-components';

const PageChanger = ({page, changePage, total}) => {
  var lastPage = Math.ceil(total / 10);
  return (
    <PageContainer>
      {page === 1 ? null : <Prev onClick={() => changePage(page - 1)}>&lt;</Prev>}
      <Current>{page}/{lastPage}</Current>
      {page === lastPage ? null : <Next onClick={() => changePage(page + 1)}>&gt;</Next>}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
  background: inherit;
  color: inherit;
  border: none;
`;
const Prev = styled(Button)`
  grid-column: 1;
  justify-self: end;
`;
const Next = styled(Button)`
  grid-column: 3;
`;

export default PageChanger;