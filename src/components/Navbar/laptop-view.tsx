import { useState } from "react";

export const LaptopViewNav = () => {
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  return (
    <div
      className="w-full h-full  navBreak:flex items-center ml-[1rem]
        gap-2 hidden"
    >
      <li
        className="
          cursor-pointer text-sm group flex items-center 
          gap-1 font-semibold text-center text-[#f9f9f9]
          relative uppercase px-3 py-2 transition-all 
          hover:bg-[#808080] hover:bg-opacity-20 rounded-md
          
          "
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover1"
        data-dropdown-trigger="hover"
        data-dropdown-delay="100"
      >
        <span>THÔNG TIN TRÒ CHƠI</span>
        <button className="brightness-50 group-hover:brightness-100">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 12 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"></path>
          </svg>
        </button>
        <div
          id="dropdownHover1"
          className="bg-[#343434] z-[9999] min-w-[150px] w-full px-3 py-4 
          absolute top-full left-0 hidden 
          border-t-4 border-[#ff4655] 
          before:content-[''] before:w-1/2 before:bg-[#ff4655] 
          before:absolute before:left-0 before:top-0 before:h-1 mt-2
          transition-all"
          aria-labelledby="dropdownHoverButton"
        >
          <ul className="flex flex-col gap-2">
            <a
              target="_self"
              rel="noreferrer"
              href="https://valorant.zing.vn/vi-vn/agents/"
              className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
            >
              <li className="font-semibold">Đặc vụ</li>
            </a>
            <a
              target="_self"
              rel="noreferrer"
              href="https://valorant.zing.vn/vi-vn/maps/"
              className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
            >
              <li className="font-semibold">bản đồ</li>
            </a>
            <a
              target="_self"
              rel="noreferrer"
              href="https://valorant.zing.vn/vi-vn/arsenal/"
              className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
            >
              <li className="font-semibold">kho vũ khí</li>
            </a>
          </ul>
        </div>
      </li>

      <li
        className="
          cursor-pointer text-sm group flex items-center 
          gap-1 font-semibold text-center text-[#f9f9f9]
          relative uppercase px-3 py-2 transition-all 
          hover:bg-[#808080] hover:bg-opacity-20 rounded-md"
      >
        <span>TRUYỀN THÔNG</span>
      </li>
      <li
        className="
          cursor-pointer text-sm group flex items-center 
          gap-1 font-semibold text-center text-[#f9f9f9]
          relative uppercase px-3 py-2 transition-all 
          hover:bg-[#808080] hover:bg-opacity-20 rounded-md"
      >
        <span>TIN TỨC</span>
      </li>
      <li
        className="
          cursor-pointer text-sm group flex items-center 
          gap-1 font-semibold text-center text-[#f9f9f9]
          relative uppercase px-3 py-2 transition-all 
          hover:bg-[#808080] hover:bg-opacity-20 rounded-md"
      >
        <span>BẢNG XẾP HẠNG</span>
      </li>
      <li
        className="
          cursor-pointer text-sm group s1148:flex items-center 
          gap-1 font-semibold text-center text-[#f9f9f9]
          relative uppercase px-3 py-2 transition-all  hidden
          hover:bg-[#808080] hover:bg-opacity-20 rounded-md "
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover2"
        data-dropdown-trigger="hover"
        data-dropdown-offset-skidding="30"
        data-dropdown-delay="100"
      >
        <span>HỖ TRỢ</span>
        <button className="brightness-50 group-hover:brightness-100">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 12 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"></path>
          </svg>
        </button>
        <div
          id="dropdownHover2"
          className="bg-[#343434] z-[9999] 
            min-w-[150px] w-full px-3 py-4 
            absolute top-full 
            left-0 hidden 
            border-t-4 border-[#ff4655] 
            before:content-[''] 
            before:w-1/2 before:bg-[#ff4655] 
            before:absolute before:left-0 
            before:top-0 before:h-1 mt-2
            transition-all"
        >
          <ul className="flex flex-col gap-2">
            <a
              target="_self"
              rel="noreferrer"
              href="https://valorant.zing.vn/vi-vn/specs/"
              className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
            >
              <li className="font-semibold">thông số</li>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://valorant.zing.vn/vi-vn/specs/"
              className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
            >
              <li className="font-semibold">hỗ trợ</li>
              <button className="text-[#f9f9f9] transition-all brightness-50 group-hover:brightness-100">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  ></path>
                </svg>
              </button>
            </a>
            <a
              target="_self"
              rel="noreferrer"
              href="https://valorant.zing.vn/vi-vn/news/announcements/quy-chuan-cong-dong-valorant/"
              className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
            >
              <li className="font-semibold">quy chuẩn cộng đồng</li>
            </a>
          </ul>
        </div>
      </li>
      <li
        className="
          cursor-pointer text-sm group s1288:flex items-center 
          gap-1 font-semibold text-center text-[#f9f9f9]
          relative uppercase px-3 py-2 transition-all 
          hover:bg-[#808080] hover:bg-opacity-20 rounded-md
          hidden
          "
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover3"
        data-dropdown-trigger="hover"
        data-dropdown-delay="100"
      >
        <span>MẠNG XÃ HỘI</span>
        <button className="brightness-50 group-hover:brightness-100">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 12 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"></path>
          </svg>
        </button>
        <div
          id="dropdownHover3"
          className="bg-[#343434] z-[9999] min-w-[150px] 
            w-full px-3 py-4  
            absolute top-full left-0 hidden
            border-t-4 
            border-[#ff4655] before:content-[''] 
            before:w-1/2 before:bg-[#ff4655] 
            before:absolute before:left-0 before:top-0 before:h-1 mt-2
            transition-all"
        >
          <ul className="flex flex-col gap-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/VALORANTvn/"
              className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
            >
              <li className="font-semibold">facebook</li>
              <button className="text-[#f9f9f9] transition-all brightness-50 group-hover:brightness-100">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  ></path>
                </svg>
              </button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@VALORANTvn"
              className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
            >
              <li className="font-semibold">youtube</li>
              <button className="text-[#f9f9f9] transition-all brightness-50 group-hover:brightness-100">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  ></path>
                </svg>
              </button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.tiktok.com/@valorant.vietnam?lang=en"
              className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
            >
              <li className="font-semibold">tiktok</li>
              <button className="text-[#f9f9f9] transition-all brightness-50 group-hover:brightness-100">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  ></path>
                </svg>
              </button>
            </a>
          </ul>
        </div>
      </li>
      <li
        className="
                cursor-pointer text-sm group s1406:flex items-center 
                gap-1 font-semibold text-center text-[#f9f9f9]
                relative uppercase px-3 py-2 transition-all 
                hover:bg-[#808080] hover:bg-opacity-20 rounded-md
                hidden"
      >
        <span>GÓC NEWBIE</span>
      </li>
      <li
        className="
          cursor-pointer text-sm group s1473:flex items-center 
          gap-1 font-semibold text-center text-[#f9f9f9]
          relative uppercase px-3 py-2 transition-all 
          hover:bg-[#808080] hover:bg-opacity-20 rounded-md
          hidden
          "
      >
        <span>SỰ KIỆN</span>
      </li>
      <li
        className="
          cursor-pointer text-sm group   flex items-center 
          gap-1 font-semibold text-center text-[#f9f9f9]
          relative uppercase  transition-all 
          "
      >
        <div
          className="w-full h-full flex gap-1  px-3 py-2 hover:bg-[#808080] hover:bg-opacity-20 rounded-md"
          id="multiLevelDropdownButton"
          data-dropdown-toggle="dropdownHover4"
          data-dropdown-trigger="hover"
          data-dropdown-delay="100"
          data-dropdown-offset-skidding="30"
        >
          THÊM
          <button
            className="brightness-50 group-hover:brightness-100
          s1473:hidden block"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 12 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"></path>
            </svg>
          </button>
        </div>

        <div
          id="dropdownHover4"
          className="bg-[#343434] z-[9999] min-w-[150px] 
            w-full px-3 py-4  
            absolute top-full left-0 hidden
            border-t-4 
            border-[#ff4655] before:content-[''] 
            before:w-1/2 before:bg-[#ff4655] 
            before:absolute before:left-0 before:top-0 before:h-1 mt-2
            transition-all
            s1473:hidden"
          aria-labelledby="multiLevelDropdownButton"
        >
          <ul className="flex flex-col gap-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/VALORANTvn/"
              className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
            >
              <li className="font-semibold">SỰ KIỆN</li>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/VALORANTvn/"
              className="text-sm shrink-0 group flex items-center gap-1 
                  cursor-pointer text-[#f9f9f9] relative uppercase 
                  px-3 py-2 transition-all hover:bg-[#808080] 
                  text-left font-normal hover:bg-opacity-20 rounded-md 
                  s1406:hidden
                  "
            >
              <li className="font-semibold">GÓC NEWBIE</li>
            </a>
            <li
              className="
          cursor-pointer text-sm group flex items-center 
          gap-1 font-semibold text-center text-[#f9f9f9]
          relative uppercase px-3 py-2 transition-all 
          hover:bg-[#808080] hover:bg-opacity-20 rounded-md
          s1288:hidden 
          "
              onClick={() => {
                setIsSocialOpen(!isSocialOpen);
              }}
            >
              <span>MẠNG XÃ HỘI</span>
              <button className="brightness-50 group-hover:brightness-100">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 12 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"></path>
                </svg>
              </button>
            </li>
            {isSocialOpen && (
              <>
                <li
                  className="bg-[#343434] z-[9999] 
            w-full px-3 py-4  
            top-full 
            border-t-4 
            border-[#ff4655] before:content-[''] 
            before:w-1/2 before:bg-[#ff4655] 
            before:absolute before:left-0 before:top-0 before:h-1 mt-2
            transition-all s1288:hidden flex"
                >
                  <ul
                    className="flex flex-col gap-2"
                    aria-labelledby="dropdownDefaultButton2"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/VALORANTvn/"
                      className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
                    >
                      <li className="font-semibold">facebook</li>
                      <button className="text-[#f9f9f9] transition-all brightness-50 group-hover:brightness-100">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                          ></path>
                        </svg>
                      </button>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.youtube.com/@VALORANTvn"
                      className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
                    >
                      <li className="font-semibold">youtube</li>
                      <button className="text-[#f9f9f9] transition-all brightness-50 group-hover:brightness-100">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                          ></path>
                        </svg>
                      </button>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.tiktok.com/@valorant.vietnam?lang=en"
                      className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
                    >
                      <li className="font-semibold">tiktok</li>
                      <button className="text-[#f9f9f9] transition-all brightness-50 group-hover:brightness-100">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                          ></path>
                        </svg>
                      </button>
                    </a>
                  </ul>
                </li>
              </>
            )}

            <li
              className="
          cursor-pointer text-sm group s1148:hidden items-center 
          gap-1 font-semibold text-center text-[#f9f9f9]
          relative uppercase px-3 py-2 transition-all  
          hover:bg-[#808080] hover:bg-opacity-20 rounded-md flex "
              onClick={() => {
                setIsSupportOpen(!isSupportOpen);
              }}
            >
              <span>HỖ TRỢ</span>
              <button className="brightness-50 group-hover:brightness-100">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 12 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"></path>
                </svg>
              </button>
            </li>
            {isSupportOpen && (
              <>
                <li
                  id="dropdownHover2"
                  className="bg-[#343434] z-[9999] 
            w-full px-3 py-4 
            top-full 
            left-0  
            border-t-4 border-[#ff4655] 
            before:content-[''] 
            before:w-1/2 before:bg-[#ff4655] 
            before:absolute before:left-0 
            before:top-0 before:h-1 mt-2
            transition-all s1148:hidden flex"
                >
                  <ul className="flex flex-col gap-2">
                    <a
                      target="_self"
                      rel="noreferrer"
                      href="https://valorant.zing.vn/vi-vn/specs/"
                      className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
                    >
                      <li className="font-semibold">thông số</li>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://valorant.zing.vn/vi-vn/specs/"
                      className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
                    >
                      <li className="font-semibold">hỗ trợ</li>
                      <button className="text-[#f9f9f9] transition-all brightness-50 group-hover:brightness-100">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                          ></path>
                        </svg>
                      </button>
                    </a>
                    <a
                      target="_self"
                      rel="noreferrer"
                      href="https://valorant.zing.vn/vi-vn/news/announcements/quy-chuan-cong-dong-valorant/"
                      className="text-sm shrink-0 group flex items-center gap-1 cursor-pointer text-[#f9f9f9] relative uppercase px-3 py-2 transition-all hover:bg-[#808080] text-left font-normal hover:bg-opacity-20 rounded-md "
                    >
                      <li className="font-semibold">quy chuẩn cộng đồng</li>
                    </a>
                  </ul>
                </li>
              </>
            )}
          </ul>
        </div>
      </li>
    </div>
  );
};
