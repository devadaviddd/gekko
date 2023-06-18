import screen2Bg from "../../asset/frame2-bg.png";
import screen2And3Bg from "../../asset/frame2-3-bg-cut2.png";
import { Frame2 } from "../Frame/Frame2";
import { Frame3 } from "../Frame/Frame3";
import ellipse from "../../asset/Ellipse.png";
import screen2And3Mb from "../../asset/mb-screen2-3-cut.png";
import { useEffect } from "react";

export const Screen2And3 = () => {
  useEffect(() => {
    const setHeight = () => {
      const element = document.getElementById('my-element');
      if (element) {
        element.style.minHeight = window.innerHeight + 'px';
      }
    };

    let deviceWidth = window.matchMedia('(max-width: 1024px)');

    if (deviceWidth.matches) {
      window.addEventListener('resize', setHeight);
      setHeight();
    }

    return () => {
      window.removeEventListener('resize', setHeight);
    };
  }, []);
  return (
    <>
      <div
        className="w-full h-[200vh] absolute z-10 top-[94%] bg-no-repeat
bg-cover bg-center lg:block hidden  custom-border-frame1
"       id='my-element'
        style={{
          backgroundImage: `url(${screen2Bg.src})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "0% 0%",
        }}
      >
        <div
          className="w-full h-full bg-no-repeat bg-cover 
          bg-center relative custom-border-frame1"
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
