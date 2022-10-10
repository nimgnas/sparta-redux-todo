import React, { useEffect, useState } from "react";
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

const submitButton = styled.button`
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 140px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const AddButton = styled(submitButton)`
  background-color: #607eaa;
`;

const DisabledButton = styled(submitButton)`
  background-color: gray;
`;

function Form() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });
  const [nullCheck, setNullCheck] = useState(true);

  useEffect(() => {
    const onNullCheck = () => {
      const { title, body } = inputs;
      if (!title.trim() || !body.trim()) setNullCheck(true);
      else setNullCheck(false);
    };
    onNullCheck();
  }, [inputs, nullCheck]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = (e) => {
    const { title, body } = inputs;
    e.preventDefault();

    // nullcheck이 false인 경우에만 동작함
    // false인 경우 disabled의 버튼이 렌더링된다
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
      {nullCheck ? (
        <DisabledButton type="submit" disabled>
          추가하기
        </DisabledButton>
      ) : (
        <AddButton type="submit">추가하기</AddButton>
      )}
    </AddForm>
  );
}

export default Form;
