import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

const AddForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: #f9f5eb;
  border-radius: 10px;
  padding: 30px;
  margin: 20px 0px;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  border: none;
  gap: 10px;
`;

const AddInput = styled.input`
  border: none;
  height: 40px;
  width: 220px;
  border-radius: 10px;
  padding: 0 12px;
`;

const AddButton = styled.button`
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 140px;
  font-weight: bold;
  background-color: #607eaa;
  color: white;
  cursor: pointer;
`;

function Form() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = (e) => {
    const { title, body } = inputs;
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    dispatch(addTodo({ title, body }));
    setInputs({
      title: "",
      body: "",
    });
  };

  return (
    <AddForm onSubmit={onSubmit}>
      <InputGroup>
        <FormLabel>제목</FormLabel>
        <AddInput name="title" value={inputs.title} onChange={onChange} />
        <FormLabel>내용</FormLabel>
        <AddInput name="body" value={inputs.body} onChange={onChange} />
      </InputGroup>
      <AddButton type="submit">추가하기</AddButton>
    </AddForm>
  );
}

export default Form;
