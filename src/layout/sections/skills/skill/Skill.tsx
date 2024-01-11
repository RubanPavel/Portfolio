import { Icon } from "icon/Icon";
import React from "react";
import styled from "styled-components";


type propsSkill = {
  iconId: string;
  title: string;
  grade: number;
};
export const Skill = (props: propsSkill) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId}></Icon>
      <SkillText>{props.title}</SkillText>
      <SkillGrade>{props.grade}</SkillGrade>
    </StyledSkill>
  );
};
const StyledSkill = styled.div`
  width: 33%;
`;

const SkillText = styled.p``;

const SkillGrade = styled.span``;
