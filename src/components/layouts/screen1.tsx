import { Frame1 } from "../Frame/Frame1";

import ring from "../../asset/ring.png";

export const Screen1 = () => {
  return (
    <div
      className="w-full h-[100dvh] bg-purple-700  relative z-0 flex 
    justify-center items-center  "
    >
      <div
        className="md:invisible visible absolute w-full h-full bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${ring.src})`,

        }}
      ></div>
      <div className="absolute w-full h-full bg-purple-700 opacity-20"></div>
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover absolute -z-10  "
      >
        <source
          src="https://valorant.zing.vn/vid.mp4?fbclid=IwAR04-8pYdTJZDu0LKQlGFNzchSd8D68eMX_EaeHydh41wEGFP17IudGYfzg"
          type="video/mp4"
        />
      </video>
      <Frame1 />
    </div>
  );
};
