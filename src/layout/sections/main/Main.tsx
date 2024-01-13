import {FlexWrapper} from 'components/FlexWrapper';
import React from 'react';
import imgMy from '../../../assets/img/0b0.jpg'
import {Container} from "components/Container";
import styled from "styled-components";


export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper direction={'row'}>
          <Name>Pavel <br /> Ruban</Name>
          <Title>a Web Dew</Title>
          <Text>24 years old, Minsk</Text>
        </FlexWrapper>
        <Photo src={imgMy} alt=""/>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  /*flex-direction: column;*/
  align-items: center;

`
const Photo = styled.img`
  width: 944px;
  height: 387px;
  object-fit: cover;
`
const Name = styled.h2`

`
const Title = styled.h1`

`
const Text = styled.h2`

`