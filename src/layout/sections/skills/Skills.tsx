import React from "react";
import styled from "styled-components";
import {FlexWrapper, SectionTitle} from "components";
import {Skill} from "./skill/Skill";
import {Container} from "components/Container";

const skillsArr = [
  {title: "Javascript", iconId: "JS_Logo", width: '100', height: '100', viewBox: '-1 -4 120 130', grade: 'grade'},
  {title: "Typescript", iconId: "TS_Logo", width: '100', height: '100', viewBox: '-1 -4 120 130', grade: 'grade'},
  {title: "Redux", iconId: "Redux_Logo", width: '100', height: '100', viewBox: '0 0 120 120', grade: 'grade'},
  {title: "Material UI", iconId: "MUI_Logo", width: '120', height: '100', viewBox: '0 0 300 200', grade: 'grade'},
  {title: "Figma", iconId: "Figma_Logo", width: '70', height: '100', viewBox: '0 0 59 100', grade: 'grade'},
  {title: "React", iconId: "React_Logo", width: '100', height: '100', viewBox: '0 0 114 101', grade: 'grade'},
  {title: "HTML", iconId: "HTML", width: '120', height: '100', viewBox: '0 0 120 120', grade: 'grade'},
  {title: "CSS", iconId: "CSS", width: '120', height: '100', viewBox: '0 0 120 120', grade: 'grade'},
  {title: "Git", iconId: "Git", width: '100', height: '100', viewBox: '10 8 80 85', grade: 'grade'},
  {title: "GitHub", iconId: "GitHub", width: '100', height: '100', viewBox: '0 -5 88 100', grade: 'grade'},
  {title: "NextJS", iconId: "NextJS", width: '140', height: '100', viewBox: '-30 -50 550 400', grade: 'grade'},
  {title: "Jira", iconId: "Jira", width: '100', height: '100', viewBox: '-20 -20 300 300', grade: 'grade'}
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
