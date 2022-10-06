import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";

const ListContainer = styled.div`
  padding: 0 25px;
  height: 50px;
`;

const ListTitle = styled.h2`
  font-size: 30px;
  margin: 15px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
`;

function List() {
  const todos = useSelector((state) => state.todos);

  return (
    <ListContainer>
      <ListTitle>Working</ListTitle>
      <ListWrapper>
        {todos.map(
          (todo) =>
            !todo.isDone && (
              <Todo
                key={todo.id}
                title={todo.title}
                body={todo.body}
                isDone={todo.isDone}
                id={todo.id}
              />
            )
        )}
      </ListWrapper>
      <ListTitle>Done!</ListTitle>
      <ListWrapper>
        {todos.map(
          (todo) =>
            todo.isDone && (
              <Todo
                key={todo.id}
                title={todo.title}
                body={todo.body}
                isDone={todo.isDone}
                id={todo.id}
              />
            )
        )}
      </ListWrapper>
    </ListContainer>
  );
}

export default List;
