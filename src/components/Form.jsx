import React from "react";
import styled from "styled-components";

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
  return (
    <AddForm>
      <InputGroup>
        <FormLabel>제목</FormLabel>
        <AddInput />
        <FormLabel>내용</FormLabel>
        <AddInput />
      </InputGroup>
      <AddButton type="submit">추가하기</AddButton>
    </AddForm>
  );
}

export default Form;
