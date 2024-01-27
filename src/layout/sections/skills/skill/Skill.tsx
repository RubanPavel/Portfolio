import {Icon} from "icon/Icon";
import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "components";
import {theme} from "styles/Theme";


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
  //width: 33%;
  padding: 40px 15px;

  @media ${theme.media.tablet} {
    width: 33%;
    svg {
      transform: scale(.8);
    }
  }

  @media ${theme.media.mobile} {
    width: 50%;
    transform: scale(.9);
    padding: 10px 5px;
  }
`;

const SkillTitle = styled.h3`
  padding: 20px 0 20px 0;
  text-align: center;
  color: #828282;
  font-size: 14px;
  font-weight: 400;

  @media ${theme.media.tablet} {
    padding: 15px 0 15px 0;
  }

  @media ${theme.media.mobile} {
    padding: 15px 0 15px 0;
  }
`;

