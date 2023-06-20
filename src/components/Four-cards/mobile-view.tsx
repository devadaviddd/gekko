import gekko from "../../asset/GEKK.png";
import oni from "../../asset/ONi.png";
import battlepass from "../../asset/battlepass.png";
import twoLady from "../../asset/2lady.png";
import Image from "next/image";
import * as Scroll from "react-scroll";

export const FourCardsMobileView = () => {
  return (
    <div
      className="w-full sm:h-1/2 h-1/2 lg:hidden grid 
    grid-rows-2 grid-cols-1 transition-all"
    >
      <div
        className="flex flex-row w-full h-full
        justify-center items-center
      "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10px"
          height="277px"
          className=" "
        >
          <path
            className="origin-center scale-75 s385:translate-x-1
            translate-x-[1px]"
            fill-rule="evenodd"
            fill="rgb(197, 244, 85)"
            d="M9.988,25
            L0.287,50.053 
            L0.287,230.732 
            L9.988,250.809 
            L9.988,0.345 Z"
          />
        </svg>
        <div
          className="w-1/4 h-full bg-vGreen rounded-xl flex items-center 
        justify-center sm:min-w-[250px] s475:min-w-[200px]
        min-w-[180px]"
        >
          <div
            className="w-[95%] h-[98%] bg-[#271649] rounded-md flex items-center justify-center
        "
          >
            <div
              className="w-[98%] h-[98%] border border-[#C9FF46] rounded-md
            flex flex-col justify-center items-center
        "
            >
              <h1 className="font-tungsten xl:text-3xl text-2xl   ">GEKKO</h1>
              <h1
                className="font-gmv-din-pro-medium text-[#C9FF46] 
            xl:text-base text-sm xl:mb-6 mb-2 "
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
              <Scroll.Link to={"screen3"} smooth={true} offset={600}>
                <button
                  className="xl:w-[10rem] w-[6rem]  xl:h-[3rem] h-[2rem] mt-2 
              
            bg-[#7A44E6] 
            rounded-xl text-center font-gmv-din-pro-medium border-2 border-[#C9FF46]
            mt-0 text-xs xl:text-base hover:opacity-75"
                >
                  TÌM HIỂU NGAY
                </button>
              </Scroll.Link>
            </div>
          </div>
        </div>
        <div className="xl:w-[10px] xl:h-[311px] w-[5px] h-[150px]  bg-vGreen"></div>
        <div
          className="w-1/4 h-full bg-vGreen rounded-xl flex items-center 
        justify-center sm:min-w-[250px] s475:min-w-[200px]  min-w-[180px]"
        >
          <div
            className="w-[95%] h-[98%] bg-[#271649] rounded-md flex items-center justify-center
        "
          >
            <div
              className="w-[98%] h-[98%] border border-[#C9FF46] rounded-md
            flex flex-col justify-center items-center
        "
            >
              <h1 className="font-tungsten xl:text-3xl text-2xl">
                ONI TRỞ LẠI
              </h1>
              <h1
                className="font-gmv-din-pro-medium text-[#C9FF46] 
            xl:text-base text-sm xl:mb-6 mb-2 "
              >
                EMBRACE YOUR DEMONS
              </h1>
              <Image
                src={oni.src}
                alt="oni"
                width={1399}
                height={787}
                className="h-1/2"
              />
              <Scroll.Link to="screen4" smooth={true}>
                <button
                  className="xl:w-[10rem] w-[6rem]  xl:h-[3rem] h-[2rem] mt-2 
              
            bg-[#7A44E6] 
            rounded-xl text-center font-gmv-din-pro-medium border-2 border-[#C9FF46]
            mt-0 text-xs xl:text-base hover:opacity-75 "
                >
                  TÌM HIỂU NGAY
                </button>
              </Scroll.Link>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="277px">
          <path
            className="rotate-180 origin-center scale-75 -translate-x-1"
            fill-rule="evenodd"
            fill="rgb(197, 244, 85)"
            d="M9.988,25
            L0.287,50.053 
            L0.287,230.732 
            L9.988,250.809 
            L9.988,0.345 Z"
          />
        </svg>
      </div>
      <div
        className="flex flex-row w-full h-full
        justify-center items-center
      "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10px"
          height="277px"
          className=""
        >
          <path
            className="origin-center scale-75 s385:translate-x-1
            translate-x-[1px]"
            fill-rule="evenodd"
            fill="rgb(197, 244, 85)"
            d="M9.988,25
            L0.287,50.053 
            L0.287,230.732 
            L9.988,250.809 
            L9.988,0.345 Z"
          />
        </svg>
        <div
          className="w-1/4 h-full bg-vGreen rounded-xl flex items-center 
        justify-center sm:min-w-[250px] s475:min-w-[200px]
        min-w-[180px]"
        >
          <div
            className="w-[95%] h-[98%] bg-[#271649] rounded-md flex items-center justify-center
        "
          >
            <div
              className="w-[98%] h-[98%] border border-[#C9FF46] rounded-md
            flex flex-col justify-center items-center
        "
            >
              <h1 className="font-tungsten xl:text-3xl text-2xl   ">
                {" "}
                BATTLEPASS MỚI
              </h1>
              <h1
                className="font-gmv-din-pro-medium text-[#C9FF46] 
            xl:text-base text-sm xl:mb-6 mb-2 "
              >
                MAKE IT PERSONAL
              </h1>
              <Image
                src={battlepass.src}
                alt="battlepass"
                width={1399}
                height={787}
                className="h-1/2"
              />
              <Scroll.Link to="screen5" smooth={true}>
                <button
                  className="xl:w-[10rem] w-[6rem]  xl:h-[3rem] h-[2rem] mt-2 
              
            bg-[#7A44E6] 
            rounded-xl text-center font-gmv-din-pro-medium border-2 border-[#C9FF46]
            mt-0 text-xs xl:text-base hover:opacity-75"
                >
                  TÌM HIỂU NGAY
                </button>
              </Scroll.Link>
            </div>
          </div>
        </div>
        <div className="xl:w-[10px] xl:h-[311px] w-[5px] h-[150px]  bg-vGreen"></div>
        <div
          className="w-1/4 h-full bg-vGreen rounded-xl flex items-center 
        justify-center sm:min-w-[250px] s475:min-w-[200px]  min-w-[180px]"
        >
          <div
            className="w-[95%] h-[98%] bg-[#271649] rounded-md flex items-center justify-center
        "
          >
            <div
              className="w-[98%] h-[98%] border border-[#C9FF46] rounded-md
            flex flex-col justify-center items-center
        "
            >
              <h1 className="font-tungsten xl:text-3xl text-2xl   ">
                {" "}
                XẾP HẠNG MỚI
              </h1>
              <h1
                className="font-gmv-din-pro-medium text-[#C9FF46] 
            xl:text-base text-sm xl:mb-6 mb-2 "
              >
                PROVE YOURSELF
              </h1>
              <Image
                src={twoLady.src}
                alt="two-lady"
                width={1399}
                height={787}
                className="h-1/2"
              />
              <a href="https://valorant.zing.vn/vi-vn/news/" target="_blank">
                <button
                  className="xl:w-[10rem] w-[6rem]  xl:h-[3rem] h-[2rem] mt-2 
              
            bg-[#7A44E6] 
            rounded-xl text-center font-gmv-din-pro-medium border-2 border-[#C9FF46]
            mt-0 text-xs xl:text-base "
                >
                  TÌM HIỂU NGAY
                </button>
              </a>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="277px">
          <path
            className="rotate-180 origin-center scale-75 -translate-x-1"
            fill-rule="evenodd"
            fill="rgb(197, 244, 85)"
            d="M9.988,25
            L0.287,50.053 
            L0.287,230.732 
            L9.988,250.809 
            L9.988,0.345 Z"
          />
        </svg>
      </div>
    </div>
  );
};
