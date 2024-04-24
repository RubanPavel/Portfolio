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

                    menuHome: 'Home',
                    menuAbout: 'About me',
                    menuSkills: 'Skills',
                    menuWorks: 'Works',
                    menuContacts: 'Contacts',

                    skillsText:'I work in such programs as:',

                    AboutTitle11: ' Hi, I\'m Pavel – Web Developer from Minsk.',

                    AboutTitle12: 'I\'m interested in Web Dev and everything connected with\n' +
                        '                        it.',

                    AboutTitle2: "I'm studying at courses \"Front-end developer\" in IT-Incubator.",
                    AboutTitle31: 'Ready to implement excellent projects',
                    AboutTitle32: 'with wonderful people.',

                    contactText11:'Want to know more or just chat?',
                    contactText12:'You are welcome!',

                    placeholderFormName: 'Name:',
                    placeholderFormEmail: 'Email:',
                    placeholderFormMessage: 'Message:',

                    seeAllWorks: 'See all works',
                    hideWorks: 'Hide works',

                    sendMessage: 'Send message',

                },
            },
            ru: {
                translation: {
                    nameMane: 'Павел Рубан',
                    nameFooter: '{../Павел_Рубан/*}',
                    titleMainF: 'Веб-разработчик',
                    titleMainT: ' 24 года, Минск',

                    menuHome: 'Главная',
                    menuAbout: 'Обо мне',
                    menuSkills: 'Навыки',
                    menuWorks: 'Работы',
                    menuContacts: 'Контакты',

                    skillsText:'Я работаю в таких программах как:',

                    AboutTitle11: 'Привет, я Павел — веб-разработчик из Минска.',
                    AboutTitle12: 'Меня интересует веб-разработка и все, что с ней связано.',
                    AboutTitle2: "Я учусь на курсах \"Front-end разработчик\" в IT-Инкубаторе.",
                    AboutTitle31: 'Готов реализовать отличные проекты',
                    AboutTitle32: 'с замечательными людьми.',

                    contactText11:'Хотите узнать больше или просто пообщаться?',
                    contactText12:'Добро пожаловать!',

                    placeholderFormName: 'Имя:',
                    placeholderFormEmail: 'Почта:',
                    placeholderFormMessage: 'Сообщение:',

                    seeAllWorks: 'Посмотреть все работы',
                    hideWorks: 'Скрыть работы',

                    sendMessage: 'Отправить сообщение',

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
