import React from "react";
import styled from "styled-components";
import {Menu} from "layout/header/menu/Menu";
import {Container} from "components/Container";
import {FlexWrapper} from "components";
import {Icon} from "icon/Icon";
import {theme} from "styles/Theme";

const menuArr = [
  {href: "https://www.onliner.by/", title: "Home"},
  {href: "https://www.onliner.by/", title: "About me"},
  {href: "https://www.onliner.by/", title: "Skills"},
  {href: "https://www.onliner.by/", title: "Works"},
  {href: "https://www.onliner.by/", title: "Contacts"}
];
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'} direction={"column"}>
          <Menu menuArr={menuArr}/>
          <Icon iconId={'menuBottom'} width={"950"} height={"2"} viewBox={"0 0 950 2"}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11000;
  background-color: ${theme.colors.primaryBg};
`;
