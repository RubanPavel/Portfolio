import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {Theme} from "styles/Theme";

type ProjectPropsType = {
  image: string
  title: string
  tags: Array<string>
  text: string

}

export const Work: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <FlexWrapper direction={'column'}>
        <StyledProjectImg src={props.image}/>
        <StyledContent>
          <Title>{props.title}</Title>
          <StyledTags>{props.tags.map((item, index) => {
            return <Tags key={index}>
              {item}
            </Tags>
          })}
          </StyledTags>
          <Text>{props.text}</Text>
          <BoxButton>
            <ButtonLink href="https://soundcloud.com/discover"><span>View Live</span></ButtonLink>
            <ButtonLink href="https://soundcloud.com/discover"><span>Github Repo</span></ButtonLink>
          </BoxButton>
        </StyledContent>

      </FlexWrapper>
    </StyledProject>
  );
};

const StyledProject = styled.div`
    background-color: white;
    position: relative;
    max-width: 490px;
    width: 100%;
    min-height: 600px;
    box-shadow: 2px 2px 32px 0 rgba(40, 38, 44, 0.15);
    border-radius: 6px;

    @media ${Theme.media.desktop} {
        max-width: 500px;
        min-height: unset;
    }

    @media ${Theme.media.mobile} {
        max-width: 384px;
        min-height: unset;
    }
`

const StyledProjectImg = styled.img`
    width: 100%;
    height: 300px;
    padding: 20px 20px 0 20px;
    object-fit: cover;

    @media ${Theme.media.mobile} {
        height: unset;
        padding: unset;
    }
`

const Title = styled.h3``

const StyledContent = styled.div`
    padding: 10px 20px 32px 26px;

    @media ${Theme.media.mobile} {
        padding: 16px 12px 20px 18px;
    }
`

const StyledTags = styled.div`
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    margin: 10px 0 0;
`

const Tags = styled.span`
    color: ${Theme.colors.font};
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color:  ${Theme.colors.secondaryBg};
`

const Text = styled.p`
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.64px;
`

const BoxButton = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const ButtonLink = styled.a`
    margin: 0 10px;
    display: inline-block;
    padding: 13px 20px;
    color: black;
    text-decoration: none;
    position: relative;
    background: transparent;
    border: 1px solid #373737;
    font: 12px/1.2 "Oswald", sans-serif;
    letter-spacing: 0.4em;
    text-align: center;
    text-indent: 2px;
    text-transform: uppercase;
    transition: color 0.1s linear 0.05s;

    &:before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background: #e1e1e1;
        z-index: 1;
        opacity: 0;
        transition: height 0.2s ease, top 0.2s ease;
    }

    &:after {
        transition: border 0.1s linear 0.05s;
    }

    &:hover {
        color: black;
        transition: color 0.1s linear 0s;

        &:before {
            top: 0;
            height: 100%;
            opacity: 1;
            transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0s;
        }

        &:after {

            border-color: #373737;
            transition: border 0.1s linear 0s;
        }

        > span {
            position: relative;
            z-index: 2;
        }
    }`