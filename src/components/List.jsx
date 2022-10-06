import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  padding: 0 25px;
  height: 50px;
`;

const ListTitle = styled.h2``;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

function List() {
  return (
    <ListContainer>
      <ListTitle></ListTitle>
      <ListWrapper></ListWrapper>
    </ListContainer>
  );
}

export default List;
