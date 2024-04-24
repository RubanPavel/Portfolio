import React from "react";
import styled from "styled-components";
import {Menu} from "layout/header/menu/Menu";
import {Container} from "components/Container";
import {FlexWrapper} from "components";
import {Theme} from "styles/Theme";
import {MobileMenu} from "layout/header/menu/MobileMenu";
import {useTranslation} from "react-i18next";


export const Header = () => {
    const {t} = useTranslation();
    const menuArr = [
        {href: "home", title: t('menuHome')},
        {href: "aboutMe", title: t('menuAbout')},
        {href: "skills", title: t('menuSkills')},
        {href: "works", title: t('menuWorks')},
        {href: "contacts", title: t('menuContacts')}
    ];
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} direction={"column"}>
                    <Menu menuArr={menuArr}/>
                    <MobileMenu menuArr={menuArr}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  padding-top: 20px;
  /* height: 80px;*/
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${Theme.colors.primaryBg};


  @media ${Theme.media.tablet} {
    padding: 0;
  }
`;
