import Image from "next/image";
import valorantTitle from "../../../asset/valorant-text.png";
import valorantLogo from "../../../asset/valorant-logo.png";
import { FourCardsLaptopView } from "@/components/Four-cards/laptop-view";
import { PlayButton } from "@/components/Play-button";
import { FourCards } from "@/components/Four-cards";


export const Frame2 = () => {

  return (
    <div className="w-[100%] h-[60%] flex flex-col 
    items-center  overflow-x-hidden
    ">
      <Image
        src={valorantTitle.src}
        alt="valorant tile"
        width={220}
        height={32}
        className="mt-5"
      />
      <h1 className="font-tungsten text-7xl mt-4">
        VÉN MÀN
      </h1>
      <span className="font-gmv-din-pro-medium text-[#C9FF46]">
        HỒI_06 // MMXXIII
      </span>
      <Image
        src={valorantLogo.src}
        alt="valorant logo"
        width={55}
        height={46}
        className="scale-[60%]"
        style={{
          color: "transparent",
        }}
      />
      {/* <FourCardsLaptopView/> */}
      <FourCards/>
      <PlayButton text="HÓNG NGAY"/>
    </div>
  ) ;
};
