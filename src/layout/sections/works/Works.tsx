import React, {useState} from 'react';
import {SectionTitle} from "components/SectionTitle";
import styled from "styled-components";
import {Container} from "components/Container";
import {FlexWrapper} from "components/FlexWrapper";

import {Theme} from "styles/Theme";
import {workProjects} from "layout/sections/works/WorkData";
import {Fade} from "react-awesome-reveal";
import {Work} from "layout/sections/works/work/Work";
import {useTranslation} from "react-i18next";


export const Works: React.FC = () => {
  const {t} = useTranslation();

  const [showAll, setShowAll] = useState(false);
  const defaultShow = 2;
  const showAllByDefault = workProjects.length <= defaultShow;

  const projectsToShow = (showAll || showAllByDefault) ? workProjects : workProjects.slice(0, defaultShow);

  return (
    <StyleWorksContent id={'works'}>
      <Container>
        <SectionTitle>{t('menuWorks')}</SectionTitle>

        <StyledContent>
          <Fade>
            {projectsToShow.map((p) => {
              return <Work image={p.src}
                           title={p.title}
                           tags={p.tags}
                           text={p.text}
              />
            })}
          </Fade>
        </StyledContent>
        <FlexWrapper justify={'center'}>
          {
            showAllByDefault ? null :
              <ButtonWork
                onClick={() => setShowAll(val => !val)}>{showAll ? t('hideWorks') : t('seeAllWorks')}</ButtonWork>
          }
        </FlexWrapper>
      </Container>
    </StyleWorksContent>
  );
};

const StyleWorksContent = styled.section`
    position: relative;
    padding-bottom: 140px;
    background-color: ${Theme.colors.primaryBg};
}

`

const StyledContent = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 36px;
    flex-wrap: wrap;
    row-gap: 43px;
    column-gap: 27px;

    @media ${Theme.media.desktop} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media ${Theme.media.mobile} {
        row-gap: 16px;
        column-gap: 0;
    }

}
`

const ButtonWork = styled.button`
    max-width: 300px;
    padding: 0 20px;
    height: 42px;
    background-color: ${Theme.colors.font};
    border-radius: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media ${Theme.media.mobile} {
        justify-content: center;
        align-items: center;
    }


    color: #FFF;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    transition: 0.5s;

    &:hover {
        animation: ease;
        opacity: 0.8;
    }

    &:active {
        background: black;
        opacity: 0.5;
    }
`