import React, {useState} from 'react';
import {CarouselProvider, Dot, Slide, Slider} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'layout/sections/works/carousel/slyleCarousel.css'
import {Arrow} from "layout/sections/works/carousel/Arrow";
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
  return (
    <CarouselProvider
      naturalSlideWidth={1000}
      naturalSlideHeight={800}
      totalSlides={4}

      interval={9000}
      isPlaying={false}

      dragEnabled={true}
      infinite={true}
      isIntrinsicHeight={true}

    >
      <Slider className="slide-box">

        {props.images.map((i, index) => (

          <Slide className="slide" key={index} index={index}>
            <div style={{position: 'relative'}}>
              <img className={'backgroundImage'} src={i.img} alt=""/>
              <Arrow/>
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