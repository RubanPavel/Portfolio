import React from "react";
import styled from "styled-components";
import {SectionTitle} from "components";
import {Container} from "components/Container";
import {SlideShow} from "layout/sections/works/slideShow/SlideShow";
import img1 from "assets/img/Rectangle 14.jpg";
import img2 from "assets/img/Rectangle 16.png";

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
    img: img2,
    title: 'ToDoList4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aperiam beatae eius eos fugiat fugit hic illo nobis nostrum tempora!'
  }
];
export const Works = () => {
  return (
    <StyledWorks>

      <Container>
        <SectionTitle>My Works</SectionTitle>
        <SlideShow images={imagesWorks}/>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  /*min-height: 100vh;*/
`;
