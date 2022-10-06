import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Layout from "../components/Layout";
import List from "../components/List";

function TodoList() {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
}

export default TodoList;
