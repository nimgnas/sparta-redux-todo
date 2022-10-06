import React from "react";
import styled from "styled-components";

const TodoContainer = styled.div`
  border: 4px solid #607eaa;
  padding: 12px 24px 24px;
  width: 340px;
  border-radius: 12px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  height: 40px;
  width: 50%;
  cursor: pointer;
  background-color: inherit;
`;

function Todo() {
  return (
    <TodoContainer>
      <ButtonGroup>
        <Button></Button>
      </ButtonGroup>
    </TodoContainer>
  );
}

export default Todo;
