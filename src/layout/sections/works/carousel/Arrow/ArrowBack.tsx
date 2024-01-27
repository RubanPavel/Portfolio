import React from 'react';
import {ButtonBack} from "pure-react-carousel";
import 'layout/sections/works/carousel/slyleCarousel.css'

type ArrowBackProps = {
  direction: 'left' ;
  onClick: (direction: 'left' ) => void;
}

export const ArrowBack = ({direction, onClick}:ArrowBackProps) => {
  return (
      <ButtonBack onClick={() => onClick(direction)} className="arrow back">
              <span className="svg">
              <svg fill="black" version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg"
                   xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px"
                   viewBox="0 0 14 26" enableBackground="new 0 0 14 26" xmlSpace="preserve"> <path
                d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z"/> </svg>
                 </span>
      </ButtonBack>
  );
};
