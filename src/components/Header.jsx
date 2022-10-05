import React from "react";
import styled from "styled-components";

const TodoHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  border: 1px solid gray;
`;

const Span = styled.div`
  font-size: 20px;
`;

function Header() {
  return (
    <TodoHeader>
      <Span>My Todo List</Span>
      <Span>React-redux</Span>
    </TodoHeader>
  );
}

export default Header;
