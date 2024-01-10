import React from 'react';
import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="">Home</a>
        </li>

        <li>
          <a href="">About me</a>
        </li>

        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Works</a>
        </li>
        <li>
          <a href="">Contacts</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul{
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
 
`
