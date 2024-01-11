import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <SectionTitle>About Me</SectionTitle>
      <FlexWrapper direction={"column"} align={"center"}>
        <TitleAbout>
          Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design
          and everything connected with it. I'm studying at courses "Web and
          mobile design interfaces" in IT-Academy. Ready to implement excellent
          projects with wonderful people.
        </TitleAbout>
      </FlexWrapper>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section``;
const TitleAbout = styled.h2``;
