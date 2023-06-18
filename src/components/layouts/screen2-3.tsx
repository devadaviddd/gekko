import screen2Bg from "../../asset/frame2-bg.png";
import screen2And3Bg from "../../asset/frame2-3-bg-cut2.png";
import { Frame2 } from "../Frame/Frame2";
import { Frame3 } from "../Frame/Frame3";
import ellipse from "../../asset/Ellipse.png";
import screen2And3Mb from "../../asset/mb-screen2-3-cut.png"

export const Screen2And3 = () => {
  return (
    <>
      <div
        className="w-full h-[200vh] absolute z-10 top-[94%] bg-no-repeat
bg-cover bg-center lg:block hidden  custom-border-frame1
"
        style={{
          backgroundImage: `url(${screen2Bg.src})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "0% 0%",
        }}
      >
        <div
          className="w-full h-full bg-no-repeat bg-cover 
          bg-center relative  custom-border-frame1 "
          style={{
            backgroundImage: `url(${screen2And3Bg.src})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 0%",
          }}
        >
          <Frame2 />
          <Frame3 />
        </div>
      </div>
      <div
        className="w-full h-[200vh] absolute z-10 top-[93%] bg-no-repeat
bg-cover bg-center lg:hidden block custom-border
"
        style={{
          backgroundImage: `url(${screen2And3Mb.src})`,
          // backgroundSize: "100% 100%",
          // backgroundPosition: "0% 0%",

        }}
      >
        <Frame2 />
        <Frame3 />
      </div>
    </>
  );
};
