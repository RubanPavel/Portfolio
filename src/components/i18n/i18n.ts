import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nameMane: 'Pavel Ruban',
          titleMainF: 'a Web Developer',
          titleMainT: ' 24 years old, Minsk'
        },
      },
      ru: {
        translation: {
          nameMane: 'Павел Рубан',
          titleMainF: 'Веб-разработчик',
          titleMainT: ' 24 года, Минск'
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
