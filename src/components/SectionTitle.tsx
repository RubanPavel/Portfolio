import styled from "styled-components";
import {theme} from "styles/Theme";

export const SectionTitle = styled.h2`
  margin-bottom: 80px;
  text-align: center;
  font-size: 34px;
  font-weight: 500;
  letter-spacing: 3px;

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 70px;
    height: 2px;
    background-color: ${theme.colors.font};

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;
  }
`;
