import {Button} from "components/Button";
import {SectionTitle} from "components/SectionTitle";
import React from "react";
import styled from "styled-components";
import {Container} from "components/Container";
import {theme} from "styles/Theme";


export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <FormContact>
          <Field placeholder={"Name"}/>
          <Field placeholder={"Subject"}/>
          <Field placeholder={"Msg"} as={"textarea"}/>
          <Button type={"submit"}>Send MSG</Button>
        </FormContact>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  
`;
const FormContact = styled.section`
  max-width: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
  
  textarea{
    resize: none;
    height: 150px;
  }
`;
const Field = styled.input`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  background-color: ${theme.colors.primaryBg};
  border: 1px solid #666666;
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: ${theme.colors.font};
  
  &::placeholder{
    color: #666666;
    
  }
`;
