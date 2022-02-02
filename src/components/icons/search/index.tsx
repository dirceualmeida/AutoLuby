import React, { CSSProperties } from 'react';

interface SearchIconProps { 
  width: string;
  height: string;
  style?: CSSProperties;
}
const SearchIcon: React.FC<SearchIconProps> = ({width, height, style }) => { 
    return ( 
      <svg width={width} height={height}  style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#3C3C3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.5 17.5L13.875 13.875" stroke="#3C3C3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
     );
} 

export default SearchIcon;