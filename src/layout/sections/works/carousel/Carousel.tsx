import React, {useState} from 'react';
import {CarouselProvider, Dot, Slide, Slider} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'layout/sections/works/carousel/slyleCarousel.css'
import styled from "styled-components";
import {theme} from "styles/Theme";
import {ArrowBack} from "layout/sections/works/carousel/Arrow/ArrowBack";
import {ArrowNext} from "layout/sections/works/carousel/Arrow/ArrowNest.";

type CarouselImgProps = {
  images: Array<{ img: string, title: string, description: string }>

}
export const CarouselImg = (props: CarouselImgProps) => {

  const lengthArr = props.images.length

  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (currentSlide: number) => {
    setCurrentSlide(currentSlide);
  };

  const handleArrowClick = (direction: string) => {
    if (direction === 'left') {
      if (currentSlide === 0) {
        setCurrentSlide(lengthArr - 1);
      } else {
        setCurrentSlide(currentSlide - 1);
      }

    } else {
      if (currentSlide === lengthArr - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }

    }
  }

  /*  const handleArrowClick = (direction: string) => {
      const newSlide = direction === 'left'
        ? (currentSlide === 0 ? lengthArr - 1 : currentSlide - 1)
        : (currentSlide === lengthArr - 1 ? 0 : currentSlide + 1);

      setCurrentSlide(newSlide);
    };*/

  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={lengthArr}
      isIntrinsicHeight={true}

      interval={9000}
      isPlaying={true}

      infinite={true}

      lockOnWindowScroll={true}

    >
      <Slider className="slide-box">

        {props.images.map((i, index) => (

          <Slide className="slide" key={index} index={index}>
            <div style={{position: 'relative'}}>
              <img className={'backgroundImage'} src={i.img} alt=""/>

              <ArrowBack direction="left" onClick={handleArrowClick}/>
              <ArrowNext direction="right" onClick={handleArrowClick}/>

            </div>

            <div className="dotBox">
              {Array.from({length: lengthArr}).map((_, index) => (
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