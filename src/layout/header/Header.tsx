import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const menuArr = [
  { href: "", title: "Home" },
  { href: "", title: "Home" },
  { href: "", title: "Home" },
];
export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuArr={menuArr} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: burlywood;
  display: flex;
  justify-content: space-between;
`;
