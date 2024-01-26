import React from "react";
import styled from "styled-components";
import {theme} from "styles/Theme";

type menuProps = {
  menuArr: Array<{ href: string; title: string }>;
};

export const MobileMenu = (props: menuProps) => {
  return (
    <StyledMobileMenu>
      <BurgerButton>
        <span></span>
      </BurgerButton>
      <ul>
        {props.menuArr.map((m, index) => {
          return (
            <ListItem key={index}>
              <Link href={m.href}>{m.title}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  width: 100%;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${theme.media.tablet} {
  display: none;
  }

`;

const BurgerButton = styled.button`
  position: fixed;
`


const ListItem = styled.li`
  color: ${theme.colors.font};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

`
const Link = styled.a``