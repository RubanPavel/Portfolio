import React from "react";
import styled from "styled-components";

type menuProps = {
  menuArr: Array<{ href: string; title: string }>;
};

export const Menu = (props: menuProps) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuArr.map((m, index) => {
          return (
            <li key={index}>
              <a href={m.href}>{m.title}</a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;
