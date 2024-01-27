import React from "react";
import styled from "styled-components";
import {theme} from "styles/Theme";


export type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export const Hamburger = (props: Props) => (
  <StyledHamburger open={props.open} onClick={() => props.setOpen(!props.open)}>
    <div/>
    <div/>
    <div/>
  </StyledHamburger>
);

const StyledHamburger = styled.button<{ open: boolean }>`
  position: fixed;
  right: 15px;
  top: 15px;
  width: 40px;
  height: 32px;
  padding: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;

  @media ${theme.media.tabletMin} {
    display: none;
  }
 
  div {
    position: relative;
    width: 31.5px;
    height: 3px;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: ${theme.colors.font};

    :first-child {
      transform: ${({open}) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({open}) => (open ? "0" : "1")};
      transform: ${({open}) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({open}) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

