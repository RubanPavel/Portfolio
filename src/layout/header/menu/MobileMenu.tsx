import {useOnClickOutside} from "hooks";
import React, {useRef, useState} from "react";
import styled from "styled-components";
import {theme} from "styles/Theme";
import { Hamburger } from "./Hamburger";

type menuProps = {
  menuArr: Array<{ href: string; title: string }>;
};


export const MobileMenu = (props: menuProps) => {

  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMobileMenu open={open}>
        <ul>
          {props.menuArr.map((m, index) => {
            return (
              <ListItem key={index}>
                <Link onClick={() => close()} href={m.href}>{m.title}</Link>
              </ListItem>
            );
          })}
        </ul>
      </StyledMobileMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

const StyledMobileMenu = styled.nav<{ open: boolean }>`
  overflow: hidden;
  
  top: 0;
  left: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: ${theme.colors.secondaryBg};
  z-index: 1;

  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({open}) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media ${theme.media.tablet} {
    width: 100%;
  
  }

  @media ${theme.media.tabletMin} {
    display: none;
  }
`;

const ListItem = styled.li`
  color: ${theme.colors.font};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

`
const Link = styled.a`
  padding: 0 2rem;
  font-size: 2rem;
  color: ${theme.colors.font};
  text-decoration: none;

  :hover {
    color: ${theme.colors.font};
    opacity: 0.7;
  }
`