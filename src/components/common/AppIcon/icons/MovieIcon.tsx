import { FunctionComponent } from 'react';
import { IconProps } from '../utils';

const MovieIcon: FunctionComponent<IconProps> = (props) => {
  return (
    <svg width="800px" height="800px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={48} height={48} fill="white" fillOpacity={0.01} />
      <path
        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
        fill="#2F88FF"
        stroke="#000000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <path
        d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z"
        fill="#43CCF8"
        stroke="white"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <path
        d="M24 36C25.6569 36 27 34.6569 27 33C27 31.3431 25.6569 30 24 30C22.3431 30 21 31.3431 21 33C21 34.6569 22.3431 36 24 36Z"
        fill="#43CCF8"
        stroke="white"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <path
        d="M15 27C16.6569 27 18 25.6569 18 24C18 22.3431 16.6569 21 15 21C13.3431 21 12 22.3431 12 24C12 25.6569 13.3431 27 15 27Z"
        fill="#43CCF8"
        stroke="white"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <path
        d="M33 27C34.6569 27 36 25.6569 36 24C36 22.3431 34.6569 21 33 21C31.3431 21 30 22.3431 30 24C30 25.6569 31.3431 27 33 27Z"
        fill="#43CCF8"
        stroke="white"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <path d="M24 44H44" stroke="#000000" strokeWidth={4} strokeLinecap="round" />
    </svg>
  );
};

export default MovieIcon;
