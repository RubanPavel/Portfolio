import React from "react";
import styled from "styled-components";
import {FlexWrapper, SectionTitle} from "components";
import {Skill} from "./skill/Skill";
import {Container} from "components/Container";

const skillsArr = [
  {title: "Adobe Photoshop", iconId: "skill", grade: 'grade'},
  {title: "Adobe Photoshop", iconId: "skill", grade: 'grade'},
  {title: "Adobe Photoshop", iconId: "skill", grade: 'grade'},
  {title: "Adobe Photoshop", iconId: "skill", grade: 'grade'},
  {title: "Adobe Photoshop", iconId: "skill", grade: 'grade'},
  {title: "Adobe Photoshop", iconId: "skill", grade: 'grade'},
  {title: "Adobe Photoshop", iconId: "skill", grade: 'grade'},
  {title: "Adobe Photoshop", iconId: "skill", grade: 'grade'}
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
                title={s.title}
                iconId={s.iconId}
                grade={s.grade}
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
  padding-bottom: 60px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
`;
