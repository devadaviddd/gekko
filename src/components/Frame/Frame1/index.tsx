import Image from "next/image";
import valorantLogo from "../../../asset/valorant-logo.png";
import valorantTitle from "../../../asset/valorant-text.png";

import { PlayButton } from "@/components/Play-button";
import { useEffect } from "react";

export const Frame1 = () => {
  const theLetters = "GEKKO"; 
  const ctnt = "TỔ ĐỘI NÁO ĐỘNG - KHỞI TRANH BÙNG NỔ"; 
  const speed = 50; 
  const increment = 3; 

  const clen = ctnt.length;
  let si = 0;
  let stri = 0;
  let block = "";
  let fixed = "";
  const resetAnimation = () => {
    fixed = "";
    si = 0;
    stri = 0;
    block = "";
  };

  useEffect(() => {
    const rustle = (i: any) => {
      setTimeout(function () {
        const rustle = (i: any) => {
          setTimeout(function () {
            if (i > 0) {
              rustle(i - 1);
            } else {
              resetAnimation();
              rustle(clen * increment + 1);

            }
            nextFrame(i);
            si = si + 1;
          }, speed);
        };

        rustle(i - 1); 
      }, speed);
    };

    rustle(clen * increment + 1);
  }, []);

  const nextFrame = (pos: any) => {
    for (let i = 0; i < clen - stri; i++) {
      const num = Math.floor(theLetters.length * Math.random());
      const letter = theLetters.charAt(num);
      block = block + letter;
    }

    if (si === increment - 1) {
      stri++;
    }

    if (si === increment) {
      fixed = fixed + ctnt.charAt(stri - 1);
      si = 0;
    }

    const text = document.getElementById("output");
    if (text) {
      text.innerHTML = fixed + block;
    }
    block = "";
  };
  return (
    <div className="w-1/2 h-3/4 flex flex-col justify-center items-center gap-5 ">
      <Image
        src={valorantLogo.src}
        alt="valorant logo"
        width={164}
        height={136}
        className="scale-[60%] transition-all "
        style={{
          color: "transparent",
        }}
      />
      <h1
        id="output"
        className="text-white font-gmv-din-pro-black
        xl:text-3xl s889:text-2xl  md:text-xl text-sm text-center
        min-h-[75px] transition-all
      "
      >
      </h1>
      <Image
        src={valorantTitle.src}
        alt="valorant tile"
        width={1158}
        height={170}
        className="scale-100  sm:min-w-[512px] transition-all "
      />
      <PlayButton />
    </div>
  );
};
