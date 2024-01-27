import {FlexWrapper} from 'components/FlexWrapper';
import React from 'react';
import imgMy from '../../../assets/img/0b0.jpg'
import {Container} from "components/Container";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {LanguageSwitch} from "layout/sections/main/button/LanguageSwitch";


export const Main = () => {
  const {t} = useTranslation();
  return (
    <StyledMain>
      <Container>
          <FlexWrapper  margin={'0 0 20px 0'} direction={'row'} justify={'space-between'} align={'center'}>
            <Name>{t('nameMane')}</Name>
            <Title> {t('titleMainF')} <br/> {t('titleMainT')}  </Title>
            <LanguageSwitch/>
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

/*const MainBox = styled.div`
  width: 100%;
  position: relative;
`*/

const Photo = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`
const Name = styled.h2`
  width: 160px;
  font-size: 48px;
  font-weight: 500;
`
const Title = styled.h1`
  padding-top: 56px;
  font-size: 18px;
  font-weight: 400;
`
