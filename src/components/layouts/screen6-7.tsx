import { Frame6 } from "../Frame/Frame6";
import screen6Bg from "../../asset/frame6-7-bg.png";
import mbScreen6Bg from "../../asset/mb-frame6-7.png";
import { Frame7 } from "../Frame/Frame7";

export const Screen6And7 = () => {
  return (
    <>
      <div className="w-full h-[200vh] relative z-10">
        <div
          className="w-full h-3/4 bg-no-repeat
        bg-cover bg-center  absolute top-0 bottom-0 left-0 right-0 -z-10
        lg:block hidden transition-all"
          style={{
            backgroundImage: `url(${screen6Bg.src})`,
          }}
        ></div>
        <div
          className="w-full h-3/4 bg-no-repeat
        bg-cover bg-top absolute top-0 bottom-0 left-0 right-0 -z-10
        lg:hidden block transition-all"
          style={{
            backgroundImage: `url(${mbScreen6Bg.src})`,
          }}
        ></div>

        <Frame6 />
        <Frame7 />
      </div>
    </>
  );
};
