import React from "react";
import styled from "styled-components";
import {Menu} from "components/menu/Menu";
import {Container} from "components/Container";
import {FlexWrapper} from "components";

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
        <FlexWrapper align={'center'} justify={'space-between'}>
          <Menu menuArr={menuArr}/>
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
`;
