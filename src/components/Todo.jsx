import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodo, toggleTodo } from "../redux/modules/todos";
import Button from "./Button";

const TodoContainer = styled.div`
  border: 4px solid #607eaa;
  padding: 12px 24px 24px;
  width: 340px;
  border-radius: 12px;
`;

const TextGroup = styled.div`
  line-height: 40px;
  h2 {
    font-size: 25px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const DeleteButton = styled(Button)`
  border: 1px solid tomato;
`;

const CompleteButton = styled(Button)`
  border: 1px solid #607eaa;
`;

const DetailLink = styled.span`
  cursor: pointer;
  color: #7272ec;
`;

function Todo({ id, title, body, isDone }) {
  console.log(isDone);
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTodo(id));
  };

  const onToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <TodoContainer>
      <DetailLink>자세히보기</DetailLink>
      <TextGroup>
        <h2>{title}</h2>
        <div>{body}</div>
      </TextGroup>
      <ButtonGroup>
        <DeleteButton onClick={onDelete}>삭제</DeleteButton>
        <CompleteButton onClick={onToggle}>
          {isDone ? "되돌리기" : "완료"}
        </CompleteButton>
      </ButtonGroup>
    </TodoContainer>
  );
}

export default Todo;
