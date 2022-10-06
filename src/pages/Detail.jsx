import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const DetailBox = styled.div`
  border: 1px solid rgb(238, 238, 238);
  width: 600px;
  height: 400px;
  border-radius: 5px;
  padding: 40px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const BackButton = styled(Button)`
  border: 1px solid rgb(186, 186, 186);
  width: 200px;
`;

const Body = styled.div`
  line-height: 50px;

  h2 {
    font-size: 40px;
  }

  div {
    font-size: 20px;
  }
`;

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const id = Number(location.pathname.slice(0 - 1));
  const todos = useSelector((state) => state.todos);
  const { title, body } = todos.find((todo) => todo.id === id);

  return (
    <Layout>
      <DetailBox>
        <Header>
          <span>ID: {id}</span>
          <BackButton onClick={() => navigate(-1)}>이전으로</BackButton>
        </Header>
        <Body>
          <h2>{title}</h2>
          <div>{body}</div>
        </Body>
      </DetailBox>
    </Layout>
  );
}

export default Detail;
