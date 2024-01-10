import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Menu} from '../../components/menu/menu';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <Menu/>
    </StyledHeader>
  );
};


const StyledHeader = styled.header`
  background-color: burlywood;
  display: flex;
  justify-content: space-between;
`
