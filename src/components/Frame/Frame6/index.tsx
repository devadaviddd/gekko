import Image from "next/image";
import logoValorant from "../../../asset/valorant-f6.png";
import gradientMap from "../../../asset/green-gradient-map.png"
import { PlayButton } from "@/components/Play-button";

export const Frame6 = () => {
  return (
    <div className="w-full h-1/2   ">
      <div
        className="lg:w-1/2 h-full flex flex-col relative
      lg:justify-center justify-end items-center gap-5 z-10  lg:bg-none
      "
      >
        <div className="absolute w-full h-[125%]
        top-[20%] -z-10 bg-cover bg-bottom bg-no-repeat lg:hidden transition-all"
          style={{
            backgroundImage: `url(${gradientMap.src})`,
            backgroundSize: "100% 100%",
          }}
        >
          
        </div>
        <h1
          className="text-2xl font-gmv-din-pro-black text-[#000] 
        text-center w-3/4 transition-all "
        >
          BẮT ĐẦU HÀNH TRÌNH KHỞI TRANH BÙNG NỔ VÀ ĐA DẠNG ĐẶC VỤ TẠI
        </h1>
        <Image
          src={logoValorant.src}
          alt="logo valorant"
          width={852}
          height={125}
          className="w-3/4 transition-all"
        />
        <h1
          className="text-2xl font-gmv-din-pro-black text-[#000] 
        text-center w-3/4 transition-all"
        >
          NGÀY HÔM NAY
        </h1>
        <PlayButton
          text="CHIẾN NGAY"
          isButtonPurple={true}
        />
      </div>
    </div>
  );
};
