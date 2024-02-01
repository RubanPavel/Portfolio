import {SectionTitle} from "components/SectionTitle";
import React, {ElementRef, useRef} from "react";
import styled from "styled-components";
import {Container} from "components/Container";
import {theme} from "styles/Theme";
import emailjs from '@emailjs/browser';
import {useTranslation} from "react-i18next";

export const Contact = () => {

    const {t} = useTranslation();

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs.sendForm('service_mxj8r2j', 'template_1zy61ok', form.current, 'IfZzPryCO8Lhxecfa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
            <StyledContact id={'contacts'}>
                <Container>
                    <SectionTitle>{t('menuContacts')}</SectionTitle>
                    <ContactText>Want to know more or just chat? <br/> You are welcome!</ContactText>
                    <FormContact>
                        <Field required name="name" placeholder={"Name:"}/>
                        <Field required name="email" placeholder={"Email:"}/>
                        <Field required name="message"  placeholder={"Message:"} as={"textarea"}/>
                        <Button type={"submit"}>Send message</Button>
                    </FormContact>
                </Container>
            </StyledContact>
        </form>
    );
};

const StyledContact = styled.section`

`;
const FormContact = styled.div`
  max-width: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 0 auto;

  textarea {
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

  &::placeholder {
    color: #666666;

  }
`;
const ContactText = styled.h2`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin-top: -20px;
  margin-bottom: 40px;
`
const Button = styled.button`
  width: 180px;
  height: 42px;
  background-color: ${theme.colors.font};
  border-radius: 25px;


  color: #FFF;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  transition: 0.5s;

  &:hover {
    transform: scale(1.025);
    animation: ease;
    opacity: 0.8;
  }

  &:active {
    background: black;
    opacity: 0.5;
  }
`;
