import React, { CSSProperties } from 'react';

interface ArrowLeftIconProps { 
  width: string;
  height: string;
  style?: CSSProperties;
}

const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = ({width, height, style, ...rest}) => { 
    return ( 
      <svg width={width} height={height} style={style} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <path d="M14.25 9H3.75" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 14.25L3.75 9L9 3.75" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
     );
} 

export default ArrowLeftIcon;