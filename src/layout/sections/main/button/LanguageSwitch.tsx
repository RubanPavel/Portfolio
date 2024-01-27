import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import styled from "styled-components";
import {theme} from "styles/Theme";

export const LanguageSwitch = () => {
  const {i18n} = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
    setActiveLanguage(lng);
  };

  return (
    <LangBox>
      <LangButtonRu onClick={() => changeLanguage('ru')} activeLanguage={activeLanguage}>
        RU
      </LangButtonRu>
      <span>|</span>
      <LangButtonEn onClick={() => changeLanguage('en')} activeLanguage={activeLanguage}>
        ENG
      </LangButtonEn>
    </LangBox>
  );
}

const LangBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  width: 65px;
  font-size: 16px;
  font-weight: 500;

  @media ${theme.media.tablet}{
    padding-top: 10px;
  }
  
  /* transform: rotate(-90deg);*/
  /*position: fixed;
  top: 30%;
  left: 85%;*/
`;

const LangButtonRu = styled.div<{ activeLanguage: string }>`
  cursor: pointer;
  color: ${(props) => (props.activeLanguage === 'ru' ? '#000000' : '#828282')};
`;

const LangButtonEn = styled.div<{ activeLanguage: string }>`
  cursor: pointer;
  color: ${(props) => (props.activeLanguage === 'en' ? '#000000' : '#828282')};
`;
