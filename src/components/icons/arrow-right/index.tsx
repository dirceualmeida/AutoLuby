import React, { CSSProperties } from 'react';

interface ArrowRightIconProps {
  width: string;
  height: string;
  style?: CSSProperties;
}

const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({width, height, style, ...rest}) => { 
    return ( 
      <svg width={width} height={height} style={style} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <path d="M3.75 9H14.25" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 3.75L14.25 9L9 14.25" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
     );
} 

export default ArrowRightIcon;