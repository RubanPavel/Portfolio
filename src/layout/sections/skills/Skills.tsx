import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "components";
import { SectionTitle } from "components";
import { Skill } from "./skill/Skill";

const skillsArr = [
  { title: "ssss", iconId: "ssss", grade: 3 },
  { title: "ssss", iconId: "ssss", grade: 3 },
  { title: "ssss", iconId: "ssss", grade: 3 },
  { title: "ssss", iconId: "ssss", grade: 3 },
  { title: "ssss", iconId: "ssss", grade: 3 },
  { title: "ssss", iconId: "ssss", grade: 3 },
  { title: "ssss", iconId: "ssss", grade: 3 },
  { title: "ssss", iconId: "ssss", grade: 3 },
];

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle> My skills</SectionTitle>
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
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 100vh;
`;
