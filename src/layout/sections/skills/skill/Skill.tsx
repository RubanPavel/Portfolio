import {Icon} from "icon/Icon";
import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "components";


type propsSkill = {
  iconId: string;
  title: string;
  grade: string;
  width?: string;
  height?: string;
  viewBox?: string;
};
export const Skill = (props: propsSkill) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={'column'} align={'center'} justify={'center'}>
        <Icon width={props.width} height={props.height} viewBox={props.viewBox} iconId={props.iconId}/>
        <SkillTitle>{props.title}</SkillTitle>
        <Icon width="166" height="30" viewBox="0 0 166 30" iconId={props.grade}/>
      </FlexWrapper>
    </StyledSkill>
  );
};
const StyledSkill = styled.div`
  width: 33%;
  padding: 50px 30px;
`;

const SkillTitle = styled.h3`
  padding: 20px 0 40px 0;
  text-align: center;
  color: #828282;
  font-size: 14px;
  font-weight: 400;
`;

