import gekko from "../../asset/GEKK.png";
import oni from "../../asset/ONi.png";
import battlepass from "../../asset/battlepass.png";
import twoLady from "../../asset/2lady.png";
import Image from "next/image";

export const FourCardsLaptopView = () => {
  return (
    <div
      className="xl:w-[90%]   h-[50%] lg:flex flex-row  
      mt-5 justify-center items-center relative hidden
    "
    >
      {/* bg-[#271649] */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16px"
        height="425px"
        className="xl:block hidden"
      >
        <path
          fill-rule="evenodd"
          fill="rgb(197, 244, 85)"
          d="M15.735,0.466 L0.870,45.983 L0.870,353.452 L15.735,424.049 L15.735,0.466 Z"
          className=""
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10px"
        height="277px"
        className="xl:hidden block"
      >
        <path
          fill-rule="evenodd"
          fill="rgb(197, 244, 85)"
          d="M9.988,0.345 L0.287,30.053 L0.287,230.732 L9.988,276.809 L9.988,0.345 Z"
        />
      </svg>
      <div className="w-1/4 h-full bg-vGreen rounded-xl flex items-center justify-center">
        <div
          className="w-[97%] h-[98%] bg-[#271649] rounded-md flex items-center justify-center
        "
        >
          <div
            className="w-[98%] h-[98%] border border-[#C9FF46] rounded-md
            flex flex-col justify-center items-center
        "
          >
            <h1 className="font-tungsten xl:text-3xl text-2xl  ">GEKKO</h1>
            <h1
              className="font-gmv-din-pro-medium text-[#C9FF46] 
            xl:text-base text-sm xl:mb-6 mb-5"
            >
              ĐẶC VỤ MỚI
            </h1>
            <Image
              src={gekko.src}
              alt="gekko"
              width={1399}
              height={787}
              className="h-1/2"
            />
            <button
              className="xl:w-[10rem] w-[7rem]  xl:h-[3rem] h-[2.5rem]  
              pt-2 pb-2 xl:pl-4 xl:pr-4 pl-2 pr-2
            bg-[#7A44E6] 
            rounded-xl text-center font-gmv-din-pro-medium border-2 border-[#C9FF46]
            mt-7 text-xs xl:text-base "
            >
              TÌM HIỂU NGAY
            </button>
          </div>
        </div>
      </div>
      <div className="xl:w-[10px] xl:h-[311px] w-[5px] h-[200px]  bg-vGreen"></div>
      <div className="w-1/4 h-full bg-vGreen rounded-xl flex items-center justify-center">
        <div
          className="w-[97%] h-[98%] bg-[#271649] rounded-md flex items-center justify-center
        "
        >
          <div
            className="w-[98%] h-[98%] border border-[#C9FF46] rounded-md
            flex flex-col justify-center items-center
        "
          >
            <h1 className="font-tungsten xl:text-3xl text-2xl  font-semibold">
              ONI TRỞ LẠI
            </h1>
            <h1
              className="font-gmv-din-pro-medium text-[#C9FF46]
            text-center xl:text-base text-sm xl:mb-6 mb-5"
            >
              EMBRACE YOUR DEMONS
            </h1>
            <Image
              src={oni.src}
              alt="gekko"
              width={1399}
              height={787}
              className="h-1/2"
            />
            <button
              className="xl:w-[10rem] w-[7rem]  xl:h-[3rem] h-[2.5rem]  
              pt-2 pb-2 xl:pl-4 xl:pr-4 pl-2 pr-2
            bg-[#7A44E6] 
            rounded-xl text-center font-gmv-din-pro-medium border-2 border-[#C9FF46]
            mt-7 text-xs xl:text-base "
            >
              TÌM HIỂU NGAY
            </button>
          </div>
        </div>
      </div>
      <div className="xl:w-[10px] xl:h-[311px] w-[5px] h-[200px]  bg-vGreen"></div>
      <div className="w-1/4 h-full bg-vGreen rounded-xl flex items-center justify-center">
        <div
          className="w-[97%] h-[98%] bg-[#271649] rounded-md flex items-center justify-center
        "
        >
          <div
            className="w-[98%] h-[98%] border border-[#C9FF46] rounded-md
            flex flex-col justify-center items-center
        "
          >
            <h1 className="font-tungsten xl:text-3xl text-2xl  ">BATTLEPASS MỚI</h1>
            <h1 className="font-gmv-din-pro-medium text-[#C9FF46] 
            xl:text-base text-sm xl:mb-6 mb-5">
              MAKE IT PERSONAL
            </h1>
            <Image
              src={battlepass.src}
              alt="battlepass"
              width={1399}
              height={787}
              className="h-1/2"
            />
            <button
              className="xl:w-[10rem] w-[7rem]  xl:h-[3rem] h-[2.5rem]  
              pt-2 pb-2 xl:pl-4 xl:pr-4 pl-2 pr-2
            bg-[#7A44E6] 
            rounded-xl text-center font-gmv-din-pro-medium border-2 border-[#C9FF46]
            mt-7 text-xs xl:text-base "
            >
              TÌM HIỂU NGAY
            </button>
          </div>
        </div>
      </div>
      <div className="xl:w-[10px] xl:h-[311px] w-[5px] h-[200px]  bg-vGreen"></div>
      <div className="w-1/4 h-full bg-vGreen rounded-xl flex items-center justify-center">
        <div
          className="w-[97%] h-[98%] bg-[#271649] rounded-md flex items-center justify-center
        "
        >
          <div
            className="w-[98%] h-[98%] border border-[#C9FF46] rounded-md
            flex flex-col justify-center items-center
        "
          >
            <h1 className="font-tungsten xl:text-3xl text-2xl  ">XẾP HẠNG MỚI</h1>
            <h1 className="font-gmv-din-pro-medium text-[#C9FF46] 
            xl:text-base text-sm xl:mb-6 mb-5">
              PROVE YOURSELF
            </h1>
            <Image
              src={twoLady.src}
              alt="gekko"
              width={1399}
              height={787}
              className="h-1/2"
            />
            <button
              className="xl:w-[10rem] w-[7rem]  xl:h-[3rem] h-[2.5rem]  
              pt-2 pb-2 xl:pl-4 xl:pr-4 pl-2 pr-2
            bg-[#7A44E6] 
            rounded-xl text-center font-gmv-din-pro-medium border-2 border-[#C9FF46]
            mt-7 text-xs xl:text-base "
            >
              TÌM HIỂU NGAY
            </button>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16px"
        height="430px"
        className="xl:block hidden"
      >
        <path
          fill-rule="evenodd"
          fill="rgb(197, 244, 85)"
          d="M0.465,424.049 L15.329,378.532 L15.329,71.063 L0,0 L0,424.049 Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10px"
        height="277px"
        className="xl:hidden block"
      >
        <path
          fill-rule="evenodd"
          fill="rgb(197, 244, 85)"
          d="M0.073,276.809 L9.774,247.101 L9.774,46.422 L0.073,0.345 L0.073,276.809 Z"
        />
      </svg>
    </div>
  );
};
