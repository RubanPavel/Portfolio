import React from 'react';
import imgMy from '../../../assets/img/0b0.jpg'
import {Container} from "components/Container";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {LanguageSwitch} from "layout/sections/main/button/LanguageSwitch";
import {theme} from "styles/Theme";
import Typewriter from 'typewriter-effect';


export const Main = () => {
  const {t} = useTranslation();
  return (
    <StyledMain id={'home'}>
      <Container>
          <MainWrapper>
            <Name>{t('nameMane')}</Name>
            <Title>
              <Typewriter
                options={{
                  strings: [`${t('titleMainF')}<br/>${t('titleMainT')}`],
                  autoStart: true,
                  loop: true
                }}
              />

            </Title>
            <LanguageSwitch/>
          </MainWrapper>
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

const MainWrapper = styled.div`
  display: flex;
  margin: 0 0 20px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  @media ${theme.media.tablet}{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
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

  @media ${theme.media.tablet}{
    width: auto;
  }
`
const Title = styled.h1`
  
  padding-top: 56px;
  font-size: 18px;
  font-weight: 400;
  
  @media ${theme.media.tablet}{
    padding-top: 5px;
  }
  
`
