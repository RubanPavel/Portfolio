import React from 'react';
import imgMy from '../../../assets/img/0b0.jpg'
import {Container} from "components/Container";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {LanguageSwitch} from "layout/sections/main/button/LanguageSwitch";
import {Theme} from "styles/Theme";
import Typewriter from 'typewriter-effect';


export const Main = () => {
  const {t} = useTranslation();
  return (
    <StyledMain id={'home'}>
      <Container style={{padding: '0 50px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <MainWrapper>
          <p>Hello</p>
          <Name>I'm {t('nameMane')}</Name>
          <Title>
            <Typewriter
              options={{
                strings: [`${t('titleMainF')}<br/>${t('titleMainT')}`],
                autoStart: true,
                loop: true
              }}
            />
          </Title>

        </MainWrapper>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '45%'
        }}>
          <Photo src={imgMy} alt=""/>
          <LanguageSwitch/>
        </div>

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
    margin: 60px 0 20px 0;
 
    flex-direction: column;
    /*justify-content: space-around;*/
    align-items: flex-start;
    flex-wrap: wrap;

    @media ${Theme.media.tablet} {
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
    border-radius: 25px;
`
const Name = styled.h2`
    font-size: 48px;
    font-weight: 500;

    @media ${Theme.media.tablet} {
        width: auto;
    }
`
const Title = styled.h1`
    height: 50px;
    padding-top: 10px;
    font-size: 18px;
    font-weight: 400;

    @media ${Theme.media.tablet} {
        padding-top: 5px;
    }

`
