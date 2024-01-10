import React from 'react';
import imgSprite from '../assets/img/img-sprite.svg'

type propsIcon = {
  id: string
  width?: string
  height?: string
  viewBox?: string
  fill?: string
}
export const Icon = (props: propsIcon) => {
  return (
    <svg width={props.width || "100px"} height={props.height || "100px"} viewBox={props.viewBox || "0 0 1024 1024"}
         fill={props.fill || 'none'}
         xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${imgSprite}#${props.id}`}/>
    </svg>
  );
};

