import { Button } from "components/Button";
import { SectionTitle } from "components/SectionTitle";
import React from "react";
import styled from "styled-components";


export const Contact = () => {
  return (
    <StyledContact>
      <SectionTitle>Contact</SectionTitle>
      <FormContact>
        <Field placeholder={"name"}/>
        <Field placeholder={"subject"}/>
        <Field placeholder={"msg"} as={"textarea"}/>
        <Button type={"submit"}>Send MSG</Button>
      </FormContact>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  min-height: 50vh;
`;
const FormContact = styled.section`
  max-width: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 auto;
`;
const Field = styled.input``;
