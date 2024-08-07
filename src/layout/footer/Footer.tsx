import React from 'react';
import styled from "styled-components";
import {Icon} from "icon/Icon";
import {FlexWrapper} from 'components/FlexWrapper';
import {Container} from 'components/Container';
import {Theme} from "styles/Theme";
import Typewriter from "typewriter-effect";
import {t} from "i18next";


const footerData = [
  {
    iconId: "LI_Logo",
    href: "https://github.com/RubanPavel",
    height: "50px",
    width: "50px",
    viewBox: "0 0 32 32",
    fill: "#666666"
  },
  {
    iconId: "GH_Logo",
    href: "https://github.com/RubanPavel",
    height: "50px",
    width: "50px",
    viewBox: "0 0 1920 1920",
    fill: "#666666"
  },


  {
    iconId: "TG_Logo",
    href: "https://github.com/RubanPavel",
    height: "50px",
    width: "50px",
    viewBox: "0 0 24 24",
    fill: "#666666"
  }


];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction={'column'} align={'center'}>
          <Name>
          <Typewriter
              options={{
                strings: [t('nameFooter')],
                autoStart: true,
                loop: true
              }}
          />
        </Name>
          <SocialList>
            {footerData.map((f, index) => {
              return (
                <SocialItem key={index}>
                  <SocialLink target="_blank" href={f.href}>
                    <Icon {...f} iconId={f.iconId}/>
                  </SocialLink>
                </SocialItem>
              )
            })}
          </SocialList>
          <Copyright>Satisfied with me? Please contact me</Copyright>
          <Copyright>© 2023 Pavel Ruban, All Rights Reserved. </Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${Theme.colors.secondaryBg};
  padding: 40px 0;
  
`
const Name = styled.span`
  text-align: center;
  font-size: 34px;
  font-weight: 500;
  margin-bottom: 20px;

`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
  
  @media ${Theme.media.mobile} {
    svg{
      transform: scale(.8);
    }
    gap: 10px;
  }
`
const SocialItem = styled.li`
  display: flex;

  justify-content: center;
  align-items: center;
`
const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  height: 70px;
  width: 70px;

  &:hover {
    transform: translateY(-4px);
    color: black;
  }

  

`
const Copyright = styled.small`
  padding: 10px 0;
  color: #828282;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`