import React from "react";
import styled from "styled-components";

const TodoLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  padding: 10px 0px;
`;

function Layout({ children }) {
  return <TodoLayout>{children}</TodoLayout>;
}

export default Layout;
