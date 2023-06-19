import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavContext } from "@/hooks/nav-context";
import { useScrollBlock } from "@/hooks/scroll";
export const MobileNav = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    isInfoOpen,
    setIsInfoOpen,
    isSupportOpen,
    setIsSupportOpen,
    isSocialOpen,
    setIsSocialOpen,
    isMoreOpen,
    setIsMoreOpen,
  } = useNavContext();
  const [blockScroll, allowScroll] = useScrollBlock();

  useLayoutEffect(() => {
    let animation = gsap.from("#mobNav", { x: 200, duration: 0.3 });
    // blockScroll();
    document.body.style.overflowY = "hidden";

    return () => {
      allowScroll();
      animation.revert();
      document.body.style.overflow = "scroll";
      document.body.style.overflowX = "hidden";
    };
  }, []);

  return (
    <div
      id="mobNav"
      className="fixed left-0 bottom-0 right-0 top-[76px] z-30 flex flex-col bg-black 
      navBreak:invisible  "
      ref={ref}
      style={{
        overflowY: "scroll" ,
      }}
      onClick={(event) => event.stopPropagation()}
    >
      <div
        className="text-white  hover:bg-custom-gray focus:ring-4 
        focus:ring-blue-300 font-medium rounded-lg text-sm px-4 
        py-2.5 text-center inline-flex items-center"
        onClick={() => {
          setIsInfoOpen(!isInfoOpen);
        }}
      >
        THÔNG TIN TRÒ CHƠI
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      {isInfoOpen && (
        <>
          <div>
            <span
              className="ml-10 text-white font-medium text-sm px-4 py-2.5 
              text-center inline-flex items-center"
            >
              ĐẶC VỤ
            </span>
          </div>
          <div>
            <span
              className="ml-10 text-white font-medium text-sm px-4 py-2.5 
              text-center inline-flex items-center"
            >
              BẢN ĐỒ
            </span>
          </div>
          <div>
            <span
              className="ml-10 text-white font-medium text-sm px-4 py-2.5 
              text-center inline-flex items-center"
            >
              KHÓ VŨ KHÍ
            </span>
          </div>
        </>
      )}

      <div>
        <span
          className="text-white font-medium text-sm px-4 py-2.5 
              text-center inline-flex items-center"
        >
          TRUYỀN THÔNG
        </span>
      </div>
      <div>
        <span
          className="text-white font-medium text-sm px-4 py-2.5 
              text-center inline-flex items-center"
        >
          TIN TỨC
        </span>
      </div>
      <div>
        <span
          className="text-white font-medium text-sm px-4 py-2.5 
              text-center inline-flex items-center"
        >
          BẢNG XẾP HẠNG
        </span>
      </div>
      <div
        className="text-white hover:bg-custom-gray focus:ring-4 
        focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 
        text-center inline-flex items-center"
        onClick={() => {
          setIsSupportOpen(!isSupportOpen);
        }}
      >
        HỖ TRỢ
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      {isSupportOpen && (
        <>
          <div>
            <span
              className="ml-10 text-white font-medium text-sm px-4 py-2.5 
            text-center inline-flex items-center"
            >
              THÔNG SỐ
            </span>
          </div>
          <div>
            <span
              className="ml-10 text-white font-medium text-sm px-4 py-2.5 
            text-center inline-flex items-center"
            >
              HỖ TRỢ
            </span>
            <button className="text-[#f9f9f9] transition-all brightness-50 group-hover:brightness-100">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <span
              className="ml-10 text-white font-medium text-sm px-4 py-2.5 
            text-center inline-flex items-center"
            >
              QUY CHUẨN CỘNG ĐỒNG
            </span>
          </div>
        </>
      )}
      <div
        className="text-white  hover:bg-custom-gray focus:ring-4 
        focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 
        text-center inline-flex items-center"
        onClick={() => {
          setIsSocialOpen(!isSocialOpen);
        }}
      >
        MẠNG XÃ HỘI
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      {isSocialOpen && (
        <>
          <div>
            <span
              className="ml-10 text-white font-medium text-sm px-4 py-2.5 
            text-center inline-flex items-center"
            >
              FACEBOOK
            </span>
            <button className="text-[#f9f9f9] transition-all brightness-50 group-hover:brightness-100">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <span
              className="ml-10 text-white font-medium text-sm px-4 py-2.5 
            text-center inline-flex items-center"
            >
              YOUTUBE
            </span>
            <button className="text-[#f9f9f9] transition-all brightness-50 group-hover:brightness-100">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <span
              className="ml-10 text-white font-medium text-sm px-4 py-2.5 
            text-center inline-flex items-center"
            >
              TIKTOK
            </span>
            <button className="text-[#f9f9f9] transition-all brightness-50 group-hover:brightness-100">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                ></path>
              </svg>
            </button>
          </div>
        </>
      )}

      <div>
        <span
          className="text-white font-medium text-sm px-4 py-2.5 
              text-center inline-flex items-center"
        >
          GÓC NEWBIE
        </span>
      </div>
      <div>
        <span
          className="text-white font-medium text-sm px-4 py-2.5 
              text-center inline-flex items-center"
        >
          SỰ KIỆN
        </span>
      </div>
      <div
        className="text-white  hover:bg-custom-gray focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        data-dropdown-toggle="dropdown"
      >
        THÊM
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
};
