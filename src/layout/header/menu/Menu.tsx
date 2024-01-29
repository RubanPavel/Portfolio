import React from "react";
import styled from "styled-components";
import {theme} from "styles/Theme";
import {Icon} from "icon/Icon";
import {Link} from "react-scroll";

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
                                <LinkMenu
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    to={m.href}>{m.title}
                                </LinkMenu>
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
  font-size: 20px;
  font-weight: 500;
  transition: 0.7s;


  &:hover {
    transform: scale(1.1);
  }


`
const LinkMenu = styled(Link)`
  color: #828282;

  &.active {
    color: ${theme.colors.font};
  }

  &:hover {
    color: ${theme.colors.font};
   }



`