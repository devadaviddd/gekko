import Image from "next/image";
import valorantLogo from "../../../asset/valorant-logo.png";
import valorantTitle from "../../../asset/valorant-text.png";

import { PlayButton } from "@/components/Play-button";
import { Screen1 } from "@/components/layouts/screen1";

export const Frame1 = () => {
  return (
    <div className="w-1/2 h-3/4 flex flex-col justify-center items-center gap-5 ">
      <Image
        src={valorantLogo.src}
        alt="valorant logo"
        width={164}
        height={136}
        className="scale-[60%] "
        style={{
          color: "transparent",
        }}
      />
      <h1
        className="text-white font-gmv-din-pro-black
        xl:text-3xl s889:text-2xl  md:text-xl text-sm text-center
      "
      >
        TỔ ĐỘI NÁO ĐỘNG - KHỞI TRANH BÙNG NỔ
      </h1>
      <Image
        src={valorantTitle.src}
        alt="valorant tile"
        width={1158}
        height={170}
        className="scale-100  sm:min-w-[512px] "
      />
      <PlayButton />
    </div>
  );
};
