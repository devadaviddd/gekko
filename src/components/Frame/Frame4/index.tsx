import Image from "next/image";
import carousel1 from "../../../asset/carousel1.png";
import carousel2 from "../../../asset/carousel2.png";
import carousel3 from "../../../asset/carousel3.png";
import carousel4 from "../../../asset/carousel4.png";
import carousel5 from "../../../asset/carousel5.png";
import carousel6 from "../../../asset/carousel6.png";

import carouselMb1 from "../../../asset/mb-carousel1.png";
import carouselMb2 from "../../../asset/mb-carousel2.png";
import carouselMb3 from "../../../asset/mb-carousel3.png";
import carouselMb4 from "../../../asset/mb-carousel4.png";
import carouselMb5 from "../../../asset/mb-carousel5.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Item = {
  id: number;
  alt: string;
  src: string;
};

const itemsMobile: Item[] = [
  {
    id: 1,
    alt: "carousel1",
    src: carouselMb1.src,
  },
  {
    id: 2,
    alt: "carousel2",
    src: carouselMb2.src,
  },
  {
    id: 3,
    alt: "carousel3",
    src: carouselMb3.src,
  },
  {
    id: 4,
    alt: "carousel4",
    src: carouselMb4.src,
  },
  {
    id: 5,
    alt: "carousel5",
    src: carouselMb5.src,
  },
];

const itemsLaptop: Item[] = [
  {
    id: 1,
    alt: "carousel1",
    src: carousel1.src,
  },
  {
    id: 2,
    alt: "carousel2",
    src: carousel2.src,
  },
  {
    id: 3,
    alt: "carousel3",
    src: carousel3.src,
  },
  {
    id: 4,
    alt: "carousel4",
    src: carousel4.src,
  },
  {
    id: 5,
    alt: "carousel5",
    src: carousel5.src,
  },
  {
    id: 6,
    alt: "carousel6",
    src: carousel6.src,
  },
];

export const Frame4 = () => {
  const renderArrowPrev = (
    clickHandler: () => void,
    hasPrev: boolean,
    label: string
  ) => {
    return (
      hasPrev && (
        <button
          className="lg:hover:scale-125 lg:transition-all absolute z-50 
        -translate-y-1/2 left-4 top-1/2 w-50 h-50"
          onClick={clickHandler}
        >
          <svg
            className="arrow arrow--left  w-16 h-16 drop-shadow-lg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#C9FF46"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
          </svg>
        </button>
      )
    );
  };

  const renderArrowNext = (
    clickHandler: () => void,
    hasNext: boolean,
    label: string
  ) => {
    return (
      hasNext && (
        <button
          className="lg:hover:scale-125 lg:transition-all absolute z-10 
        -translate-y-1/2 right-4 top-1/2 w-50 h-50"
          onClick={clickHandler}
        >
          <svg
            className="arrow arrow--right  w-16 h-16 drop-shadow-lg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#C9FF46"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
          </svg>
        </button>
      )
    );
  };

  return (
    <div className="w-full h-full relative  ">
      <Carousel
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        showStatus={false}
        showIndicators={false}
        emulateTouch={true}
        className="md:block hidden rounded-none"
      >
        {itemsLaptop.map((item) => (
          <div key={item.id} className="w-full h-[102dvh] ">
            <Image
              src={item.src}
              alt={item.alt}
              width={2152}
              height={1049}
              className="
              object-fill object-center w-full h-full
            "
            />
          </div>
        ))}
      </Carousel>
      <Carousel
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        showStatus={false}
        showIndicators={false}
        emulateTouch={false}
        swipeable={false}
        className="md:hidden block rounded-none " 
    
      >
        {itemsMobile.map((item) => (
          <div key={item.id} className="w-full h-[102dvh]  ">
            <Image
              src={item.src}
              alt={item.alt}
              width={768}
              height={1365}
              className="
                object-fill object-center w-full h-full
              "
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
