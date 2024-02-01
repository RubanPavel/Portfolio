import React from "react";
import styled from "styled-components";
import {SectionTitle} from "components";
import {Container} from "components/Container";
import img1 from "assets/img/Rectangle 14.jpg";
import img2 from "assets/img/Rectangle 16.png";
import {CarouselImg} from "layout/sections/works/carousel/Carousel";
import {useTranslation} from "react-i18next";

const imagesWorks = [
    {
        img: img1,
        title: 'ToDoList1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aperiam beatae eius eos fugiat fugit hic illo nobis nostrum tempora!'
    }, {
        img: img2,
        title: 'ToDoList2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aperiam beatae eius eos fugiat fugit hic illo nobis nostrum tempora!'
    }, {
        img: img1,
        title: 'ToDoList3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aperiam beatae eius eos fugiat fugit hic illo nobis nostrum tempora!'
    }, {
        img: img1,
        title: 'ToDoList4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aperiam beatae eius eos fugiat fugit hic illo nobis nostrum tempora!'
    }, {
        img: img1,
        title: 'ToDoList5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aperiam beatae eius eos fugiat fugit hic illo nobis nostrum tempora!'
    }, {
        img: img1,
        title: 'ToDoList6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aperiam beatae eius eos fugiat fugit hic illo nobis nostrum tempora!'
    }
];
export const Works = () => {
    const {t} = useTranslation();
    return (
        <StyledWorks id={'works'}>
            <Container>
                <SectionTitle>{t('menuWorks')}</SectionTitle>
                <CarouselImg images={imagesWorks}/>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  /*min-height: 100vh;*/
`;

/*const WorksBox = styled.div`
  margin: 0 auto;
  width: 100%;
`;*/

