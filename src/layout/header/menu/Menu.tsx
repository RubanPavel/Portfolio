import React from "react";
import styled from "styled-components";
import {theme} from "styles/Theme";
import {Icon} from "icon/Icon";

type menuProps = {
  menuArr: Array<{ href: string; title: string }>;
};

export const Menu = (props: menuProps) => {
  return (
    <>
      <StyledMenu>
        <ul>
          {props.menuArr.map((m, index) => {
            return (
              <ListItem key={index}>
                <Link href={m.href}>{m.title}</Link>
              </ListItem>
            );
          })}
        </ul>
      </StyledMenu>
      <StyledBox>
      <Icon iconId={'menuBottom'} width={"950"} height={"2"} viewBox={"0 0 950 2"}/>
      </StyledBox>
    </>

  );
};

const StyledMenu = styled.nav`
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

const StyledBox = styled.div`
  @media ${theme.media.tablet} {
    display: none;
  }
`


const ListItem = styled.li`
  color: ${theme.colors.font};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

`
const Link = styled.a``