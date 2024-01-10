import React from 'react';
import styled from "styled-components";
import imgMy from '../../../assets/img/PHSQUAT108953028.jpg'

export const Main = () => {
  return (
    <StyledMain>

      <span>Pavel Ruban</span>
      <span>web Dew</span>
      <span>24 years old, Minsk</span>
      <span></span>
      <Photo src={imgMy} alt=''/>

    </StyledMain>
  );
};

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`
const Photo = styled.img`
  width: 944px;
  height: 387px;
  object-fit: cover;
`