import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    nameMane: 'Pavel Ruban',
                    nameFooter: '{../Pavel_Ruban/*}',
                    titleMainF: 'a Web Developer',
                    titleMainT: ' 24 years old, Minsk',

                    menuHome : 'Home',
                    menuAbout : 'About me',
                    menuSkills : 'Skills',
                    menuWorks : 'Works',
                    menuContacts : 'Contacts',

                    AboutTitle2: "I'm studying at courses \"Front-end dev\" in IT-Incubator.",
                    AboutTitle31: 'Ready to implement excellent projects',
                    AboutTitle32: 'with wonderful people.'


                },
            },
            ru: {
                translation: {
                    nameMane: 'Павел Рубан',
                    nameFooter: '{../Павел_Рубан/*}',
                    titleMainF: 'Веб-разработчик',
                    titleMainT: ' 24 года, Минск',

                    menuHome : 'Главная',
                    menuAbout : 'Обо мне',
                    menuSkills : 'Навыки',
                    menuWorks : 'Работы',
                    menuContacts : 'Контакты',

                    AboutTitle31: 'Готов реализовать отличные проекты',
                    AboutTitle32: 'с замечательными людьми.'
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
