import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "components";
import { SectionTitle } from "components";
import { Work } from "./work/Work";

const worksArr = [
  {
    hrefOne: "Home",
    title: "Home",
    hrefTwo: "Home",
    scr: "Home",
    text: "Home",
  },
  {
    hrefOne: "Home",
    title: "Home",
    hrefTwo: "Home",
    scr: "Home",
    text: "Home",
  },
  {
    hrefOne: "Home",
    title: "Home",
    hrefTwo: "Home",
    scr: "Home",
    text: "Home",
  },
];
export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle> My skills</SectionTitle>
      <FlexWrapper justify={"space-between"}>
        {worksArr.map((w, index) => {
          return (
            <Work
              key={index}
              title={w.title}
              hrefOne={w.hrefOne}
              hrefTwo={w.hrefTwo}
              scr={w.scr}
              text={w.text}
            />
          );
        })}
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
`;
