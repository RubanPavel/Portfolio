import React from 'react';
import {ButtonBack, ButtonNext} from "pure-react-carousel";
import 'layout/sections/works/slideShow/slylesSlider.css'
export const Arrow = () => {
  return (
    <>
      <ButtonBack  className="arrow prev">
              <span className="svg">
              <svg fill="black" version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg"
                   xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px"
                   viewBox="0 0 14 26" enableBackground="new 0 0 14 26" xmlSpace="preserve"> <path
                d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z"/> </svg>
                 </span>
      </ButtonBack>

      <ButtonNext className="arrow next">
                <span className="svg">
            <svg fill="black" version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px"
                 viewBox="0 0 14 26" enableBackground="new 0 0 14 26"
                 xmlSpace="preserve"> <path
              d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z"/> </svg>

          </span>
      </ButtonNext>
    </>
  );
};
