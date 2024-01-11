import React from "react";
import styled from "styled-components";
import {Logo} from "components/logo/Logo";
import {Menu} from "components/menu/Menu";
import {Container} from "components/Container";
import {FlexWrapper} from "components";

const menuArr = [
  { href: "", title: "Home" },
  { href: "", title: "Home" },
  { href: "", title: "Home" },
];
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'}>
          <Logo/>
          <Menu menuArr={menuArr}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
