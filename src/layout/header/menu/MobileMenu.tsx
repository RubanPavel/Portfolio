import {useOnClickOutside} from "hooks";
import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {theme} from "styles/Theme";
import {Hamburger} from "./Hamburger";

type menuProps = {
  menuArr: Array<{ href: string; title: string }>;
};


export const MobileMenu = (props: menuProps) => {

  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const close = () => {
    setOpen(false);
    document.body.classList.remove("scroll-blocked");
  };

  useOnClickOutside(node, close);
  const toggleMenu = () => {
    setOpen(!open);
    if (!open) {
      document.body.classList.add("scroll-blocked");
    } else {
      document.body.classList.remove("scroll-blocked");
    }
  };
  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // If scrolling down, hide the navbar
      setShow(false);
    } else {
      // If scrolling up, show the navbar
      setShow(true);
    }

    // Update the last scroll position
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <Menu ref={node} show={show}>
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
      <Hamburger open={open} setOpen={toggleMenu}/>
    </Menu>
  );
};

const Menu = styled.nav<{ show: boolean }>`
  display: ${(props) => (props.show ? "block" : "none")};
  background: ${theme.colors.secondaryBg};
  height: 60px;

  width: 100vw;
  border-bottom: 1px solid black;


  @media ${theme.media.tabletMin} {
    display: none;
    height: 0;
  }
`;

const StyledMobileMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: ${theme.colors.secondaryBg};
  opacity: 0.9;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

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


`
const Link = styled.a`
  font-size: 30px;
  color: ${theme.colors.font};
  font-weight: 500;
  line-height: 1.5;

  :hover {
    color: ${theme.colors.font};
    opacity: 0.7;
  }
`