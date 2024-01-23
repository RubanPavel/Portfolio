import React, {useState} from 'react';
import {ButtonBack, ButtonNext, CarouselProvider, Dot, Slide, Slider} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'layout/sections/works/carousel/slyleCarousel.css'
import styled from "styled-components";
import {theme} from "styles/Theme";

type CarouselImgProps = {
  images: Array<{ img: string, title: string, description: string }>

}
export const CarouselImg = (props: CarouselImgProps) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (currentSlide: number) => {
    setCurrentSlide(currentSlide);
  };

  const handleArrowClick = (direction:string) => {
    // Обработка клика на стрелку
    if (direction === 'left') {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <CarouselProvider
      naturalSlideWidth={1000}
      naturalSlideHeight={800}
      totalSlides={4}

      interval={9000}
      isPlaying={false}

      dragEnabled={true}
     /* infinite={true}*/
      isIntrinsicHeight={true}

    >
      <Slider className="slide-box">

        {props.images.map((i, index) => (

          <Slide className="slide" key={index} index={index}>
            <div style={{position: 'relative'}}>
              <img className={'backgroundImage'} src={i.img} alt=""/>

              <ButtonBack onClick={()=>handleArrowClick('left')}  className="arrow prev">
              <span className="svg">
              <svg fill="black" version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg"
                   xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px"
                   viewBox="0 0 14 26" enableBackground="new 0 0 14 26" xmlSpace="preserve">
                <path d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z"/>
              </svg>
                 </span>
              </ButtonBack>

              <ButtonNext onClick={()=>handleArrowClick('right')} className="arrow next">
                <span className="svg">
            <svg fill="black" version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px"
                 viewBox="0 0 14 26" enableBackground="new 0 0 14 26"
                 xmlSpace="preserve">
              <path d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z"/>
            </svg>

          </span>
              </ButtonNext>
            </div>

            <div className="dotBox">
              {Array.from({length: props.images.length}).map((_, index) => (
                <Dot onClick={() => handleSlideChange(index)}
                     className={currentSlide === index ? 'indicatorActive' : 'indicator'} key={index}
                     slide={index}/>


              ))}
            </div>

            <TextBox>
              <Title>
                {i.title}
              </Title>
              <Description>
                {i.description}
              </Description>
            </TextBox>


            <ButtonLink href="https://soundcloud.com/discover">
              <span>View Live</span>
            </ButtonLink>
            <ButtonLink href="https://soundcloud.com/discover">
              <span>Github Repo</span>
            </ButtonLink>

          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

const Title = styled.h2`
  padding: 10px 0;
  color: ${theme.colors.font};
  font-size: 24px;
  font-weight: 500;
`
const Description = styled.h3`
  padding: 10px 0 10px 0;
  color: #373737;
  font-size: 16px;
  font-weight: 400;

`
const TextBox = styled.div`
  margin-bottom: 20px;
  text-align: center;
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
  }


`