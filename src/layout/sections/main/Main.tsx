import {FlexWrapper} from 'components/FlexWrapper';
import React from 'react';
import imgMy from '../../../assets/img/0b0.jpg'
import {Container} from "components/Container";
import styled from "styled-components";


export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper width={'102.8%'} margin={'0 0 20px 0'} direction={'row'} justify={'space-between'} align={'center'}>
          <Name>Pavel <br/> Ruban</Name>
          <Title>a Web Dew <br/> 24 years old, Minsk </Title>
          <Lang>RU | ENG</Lang>
        </FlexWrapper>
        <Photo src={imgMy} alt=""/>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
`

const Photo = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`
const Name = styled.h2`
  font-size: 47.339px;
  font-weight: 500;
`
const Title = styled.h1`
  padding-top: 60px;
  font-size: 18px;
  font-weight: 400;
`
const Lang = styled.h2`

  transform: rotate(-90deg);
  color: #828282;
  font-size: 16px;
  font-weight: 400;

`