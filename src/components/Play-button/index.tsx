import Image from "next/image";
import buttonBg from "../../asset/button-bg.png";

type Props = {
  text?: string;
  isButtonPurple?: boolean;
};

export const PlayButton = (props: Props) => {
  const handleColor = () => {
    if (!props.isButtonPurple) {
      return (
        <div
          className="md:w-full h-[103px] flex 
      justify-center 
      items-center
      "
        >
          <button
            className="bg-[#C9FF46] pl-8 pr-8 pt-3 pb-3 relative 
          play-button min-w-[230px] md:h-[50px]"
          >
            <h1
              className="font-gmv-din-pro-medium font-bold 
          text-black text-xl button-text relative"
            >
              {props.text ? props.text : "KHÁM PHÁ NGAY"}
            </h1>

            <div
              id="top-left-line"
              className="trans-line absolute left-0 
        -translate-x-[120%] top-[15%] 
        block mx-auto 
        lg:w-[230px] 
        h-[2px]
        md:w-[150px] w-[100px]"
            ></div>
            <div
              id="bot-left-line"
              className="trans-line absolute left-0 
        -translate-x-[120%] top-[85%] block 
        mx-auto lg:w-[180px] w-[100px] h-[2px] "
            ></div>
            <div
              id="top-right-line"
              className="trans-line absolute 
          right-0 translate-x-[120%] 
          top-[15%] 
          block 
          mx-auto 
          lg:w-[230px] md:w-[150px] w-[100px]
          h-[2px]"
            ></div>
            <div
              id="bot-right-line"
              className="trans-line 
        absolute right-0 
        translate-x-[120%] 
        top-[85%] block 
        mx-auto lg:w-[180px] w-[100px]
        h-[2px]"
            ></div>
            <div
              className="absolute 
          right-0 w-3 h-2 
          translate-x-[600%] 
          -translate-y-1/2 
          bullet-right 
          bg-vGreen 
          top-1/2 b
          g-vGreen"
            ></div>
            <div
              className="absolute left-0 
          w-3 h-2 
          -translate-x-[600%] 
          -translate-y-1/2 
          bullet-left  
          top-1/2 bg-vGreen"
            ></div>
          </button>
        </div>
      );
    } else {
      return (
        <div
        className="md:w-full h-[103px] flex 
      justify-center 
      items-center
      "
      >
        <button
          className="bg-[#8C4AED] pl-8 pr-8 pt-3 pb-3 relative 
          play-button-pb min-w-[230px] md:h-[50px]"
        >
          <h1
            className="font-gmv-din-pro-medium font-bold 
          text-xl button-text-pb relative"
          >
            {props.text ? props.text : "KHÁM PHÁ NGAY"}
          </h1>
  
          <div
            id="top-left-line"
            className="trans-line-pb absolute left-0 
        -translate-x-[120%] top-[15%] 
        block mx-auto 
        lg:w-[230px] 
        h-[2px]
        md:w-[150px] w-[100px]"
          ></div>
          <div
            id="bot-left-line"
            className="trans-line-pb absolute left-0 
        -translate-x-[120%] top-[85%] block 
        mx-auto lg:w-[180px] w-[100px] h-[2px] "
          ></div>
          <div
            id="top-right-line"
            className="trans-line-pb absolute 
          right-0 translate-x-[120%] 
          top-[15%] 
          block 
          mx-auto 
          lg:w-[230px] md:w-[150px] w-[100px]
          h-[2px]"
          ></div>
          <div
            id="bot-right-line"
            className="trans-line-pb 
        absolute right-0 
        translate-x-[120%] 
        top-[85%] block 
        mx-auto lg:w-[180px] w-[100px]
        h-[2px]"
          ></div>
          <div
            className="absolute 
          right-0 w-3 h-2 
          translate-x-[600%] 
          -translate-y-1/2 
          bullet-right 
          top-1/2 bg-[#8C4AED]"
          ></div>
          <div
            className="absolute left-0 
          w-3 h-2 
          -translate-x-[600%] 
          -translate-y-1/2 
          bullet-left  
          top-1/2 bg-[#8C4AED]"
          ></div>
        </button>
      </div>
      )
    }
  };

  return handleColor();
};
