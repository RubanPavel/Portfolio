import React from "react";
import styled from "styled-components";
import {SectionTitle} from "components";
import {Container} from "components/Container";
import {Example} from "layout/sections/works/slideShow/SlideShow";



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

      <Container>
        <SectionTitle>My Works</SectionTitle>
        <Example/>
      {/*  <FlexWrapper justify={"center"} align={'center'} direction={'column'}>
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
        </FlexWrapper>*/}
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
 /* min-height: 80vh;*/
`;
