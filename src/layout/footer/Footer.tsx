import React from 'react';
import styled from "styled-components";
import {Icon} from "icon/Icon";
import {FlexWrapper} from 'components/FlexWrapper';
import { Container } from 'components/Container';


const footerData = [
  {iconId: "logo", href: "ssss"},
  {iconId: "logo", href: "ssss"},
  {iconId: "logo", href: "ssss"},
  {iconId: "logo", href: "ssss"},

];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction={'column'} align={'center'}>
          <Name>Pavel Ruban</Name>
          <SocialList>
            <SocialItem>
              {footerData.map((f, index) => {
                return (
                  <SocialLink key={index}>
                    <Icon iconId={f.iconId}/>
                  </SocialLink>
                )
              })}
            </SocialItem>
          </SocialList>
          <Copyright>Like me on LinkedIn, Instagram, Behance, Dribble </Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``
const Name = styled.span``
const SocialList = styled.ul``
const SocialItem = styled.li``
const SocialLink = styled.a``
const Copyright = styled.small``