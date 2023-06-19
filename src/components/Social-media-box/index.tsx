import { useState } from 'react';

type Props = {
  iconPath: string;
  vbWidth: number;
  vbHeight: number;
  isFooter?: boolean;
};

export const SocialMediaBox = (props: Props) => {
  const [isHover, setHover] = useState(false);

  return (
    <>
      {props.isFooter ? (
        <div
          className={`group flex relative flex-row justify-center items-center 
    screen1ColumnBreak:w-[110px] w-[80px] 
    screen1ColumnBreak:h-[110px] h-[80px] m-2 border-[#8C4AED] border-[2px] 
    transition-all 
    ${isHover ? 'hover-animation-pb' : ''}`}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={(element) => {
            element.currentTarget.classList.remove('hover-animation-pb');
            setHover(false);
          }}
        >
          <svg
            stroke="currentColor"
            fill="#8C4AED"
            strokeWidth="0"
            viewBox={`0 0 ${props.vbWidth} ${props.vbHeight}`}
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={props.iconPath}></path>
          </svg>
          <div className="-z-10  w-[3px] h-[3px] bg-[#8C4AED] absolute top-0 right-0"></div>
          <div className="-z-10  block w-[3px] h-[3px] bg-[#8C4AED] absolute bottom-0 left-0"></div>
          <div
            className="-z-10 w-[30%] rotate-45 origin-left border-b-[1px] 
      border-b-[#8C4AED] 
      border-solid absolute top-0 left-0"
          ></div>
          <div
            className="-z-10 w-[30%] rotate-45 origin-right border-b-[1px] 
      border-b-[#8C4AED] 
      border-solid absolute bottom-0 right-0"
          ></div>
        </div>
      ) : (
        <div
          className={`group flex relative flex-row 
          justify-center items-center 
    w-[40px] h-[40px] border-white border-[1px] bg-cover
          ${isHover ? 'hover-animation' : ''}`}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={(element) => {
            element.currentTarget.classList.remove('hover-animation');
            setHover(false);
          }}
        >
          <svg
            stroke="currentColor"
            fill="white"
            strokeWidth="0"
            viewBox={`0 0 ${props.vbWidth} ${props.vbHeight}`}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={props.iconPath}></path>
          </svg>
          <div
            className="-z-10 block w-[3px] h-[3px] bg-white absolute 
          top-0 right-0 hover:hidden"
          ></div>
          <div className="-z-10 block w-[3px] h-[3px] bg-white absolute bottom-0 left-0"></div>
          <div
            className="w-[30%] rotate-45 origin-left border-b-[1px] 
      border-b-white 
      border-solid absolute top-0 left-0 -z-10"
          ></div>
          <div
            className="w-[30%] rotate-45 origin-right border-b-[1px] 
      border-b-white 
      border-solid absolute bottom-0 right-0 -z-10"
          ></div>
        </div>
      )}
    </>
  );
};
