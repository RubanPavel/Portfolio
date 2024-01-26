import React from "react";
import styled from "styled-components";
import {FlexWrapper, SectionTitle} from "components";
import {Skill} from "./skill/Skill";
import {Container} from "components/Container";

const skillsArr = [
  {title: "JAVASCRIPT", iconId: "JS_Logo", width: '100', height: '100', viewBox: '0 0 120 120', grade: 'grade'},
  {title: "Typescript", iconId: "TS_Logo", width: '100', height: '100', viewBox: '0 0 120 120', grade: 'grade'},
  {title: "REDUX", iconId: "Redux_Logo", width: '100', height: '100', viewBox: '0 0 120 120', grade: 'grade'},
  {title: "Figma", iconId: "Figma_Logo", width: '59', height: '90', viewBox: '0 0 59 90', grade: 'grade'},
  {title: "JAVASCRIPT", iconId: "JS_Logo", width: '100', height: '100', viewBox: '0 0 120 120', grade: 'grade'},
  {title: "Typescript", iconId: "TS_Logo", width: '100', height: '100', viewBox: '0 0 120 120', grade: 'grade'},
  {title: "REDUX", iconId: "Redux_Logo", width: '100', height: '100', viewBox: '0 0 120 120', grade: 'grade'},
  {title: "Figma", iconId: "Figma_Logo", width: '59', height: '90', viewBox: '0 0 59 90', grade: 'grade'}
];

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My skills</SectionTitle>
        <SectionText>I work in such programs as</SectionText>
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          {skillsArr.map((s, index) => {
            return (
              <Skill
                key={index}
                {...s}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 100vh;
`;

export const SectionText = styled.h3`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 10px;
`;
