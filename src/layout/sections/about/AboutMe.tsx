import {FlexWrapper} from "components/FlexWrapper";
import {SectionTitle} from "components/SectionTitle";
import React from "react";
import styled from "styled-components";
import {Container} from "components/Container";
import {useTranslation} from "react-i18next";


export const AboutMe = () => {
    const {t} = useTranslation();
    return (
        <StyledAboutMe id={"aboutMe"}>
            <Container>
                <SectionTitle>{t('menuAbout')}</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <TitleAbout>
                        {t('AboutTitle11')}<br/>{t('AboutTitle12')}
                    </TitleAbout>
                    <TitleAbout>
                        {t('AboutTitle2')}
                    </TitleAbout>
                    <TitleAbout>
                        {t('AboutTitle31')}<br/>{t('AboutTitle32')}
                    </TitleAbout>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`

`;

const TitleAbout = styled.h2`
  text-align: center;
  font-size: 18px;
  font-weight: 400;

  &:nth-of-type(even) {
    padding: 50px 0;
  }
`;
