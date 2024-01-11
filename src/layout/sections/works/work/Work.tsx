import React from "react";
import styled from "styled-components";

type WorkProps = {
  title: string;
  text: string;
  scr: string;
  hrefOne: string;
  hrefTwo: string;
};

export const Work = (props: WorkProps) => {
  return (
    <StyledWork>
      <ImageWork src={props.scr} alt={""} />
      <TitleWork>{props.title}</TitleWork>
      <TextWork>{props.text}</TextWork>
      <LinkWork href={props.hrefOne}>demo</LinkWork>
      <LinkWork href={props.hrefTwo}>come</LinkWork>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: aquamarine;
  max-width: 540px;
  width: 100%;
`;
const ImageWork = styled.img`
  width: 100%;
  object-fit: cover;
`;
const LinkWork = styled.a``;
const TextWork = styled.p``;
const TitleWork = styled.h2``;
