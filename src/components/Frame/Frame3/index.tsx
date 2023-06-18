/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import skill1 from "../../../asset/skill1.png";
import skill2 from "../../../asset/skill2.png";
import skill3 from "../../../asset/skill3.png";
import skill4 from "../../../asset/skill4.png";
import skill1Selected from "../../../asset/skill1-selected.png";
import skill2Selected from "../../../asset/skill2-selected.png";
import skill3Selected from "../../../asset/skill3-selected.png";
import skill4Selected from "../../../asset/skill4-selected.png";
import lightning from "../../../asset/lightning.png";
import { useEffect, useRef, useState } from "react";

enum SkillRange {
  skill1 = 1,
  skill2 = 2,
  skill3 = 3,
  skill4 = 4,
}

export const Frame3 = () => {
  const [skillSelected, setSkillSelected] = useState<SkillRange>(
    SkillRange.skill1
  );
  const [videoSrc, setVideoSrc] = useState<string>(
    "https://valorant.zing.vn/moshpit.mp4?fbclid=IwAR0UhTAHwKH7WQ6Cv9TiwyF_is8mLbdoXlYArUcUolH8F5_wxz7qqLGdaaY"
  );
  const [skillName, setSkillName] = useState<string>("C - Hố Bom của Mosh");
  const [skillInfor, setSkillInfor] = useState<string>(
    "TRANG BỊ Mosh. Nhấn BẮN để quăng Mosh như trái lựu đạn. Nhấn CHẾ ĐỘ PHỤ để ném tầm thấp. Sau khi đáp đất, Mosh phân tách bản thân ra một khu vực rộng hơn rồi phát nổ sau khoảng thời gian ngắn."
  );
  const [isImage1Selected, setIsImage1Selected] = useState<boolean>(false);
  const [isImage2Selected, setIsImage2Selected] = useState<boolean>(false);
  const [isImage3Selected, setIsImage3Selected] = useState<boolean>(false);
  const [isImage4Selected, setIsImage4Selected] = useState<boolean>(false);
  useEffect(() => {
    switch (skillSelected) {
      case SkillRange.skill1:
        setVideoSrc(
          "https://valorant.zing.vn/moshpit.mp4?fbclid=IwAR0UhTAHwKH7WQ6Cv9TiwyF_is8mLbdoXlYArUcUolH8F5_wxz7qqLGdaaY"
        );
        setSkillName("C - Hố Bom của Mosh");
        setSkillInfor(
          "TRANG BỊ Mosh. Nhấn BẮN để quăng Mosh như trái lựu đạn. Nhấn CHẾ ĐỘ PHỤ để ném tầm thấp. Sau khi đáp đất, Mosh phân tách bản thân ra một khu vực rộng hơn rồi phát nổ sau khoảng thời gian ngắn."
        );
        setIsImage1Selected(true);
        setIsImage2Selected(false);
        setIsImage3Selected(false);
        setIsImage4Selected(false);
        break;
      case SkillRange.skill2:
        setVideoSrc("https://valorant.zing.vn/wingman.mp4");
        setSkillName("Q - Wingman");
        setSkillInfor(
          "TRANG BỊ Wingman, nhấn BẮN để phóng Wingman lên trước dò kẻ địch. Wingman phát ra xung chấn lên kẻ địch đầu tiên nhìn thấy. Nhấn CHẾ ĐỘ PHỤ khi chỉ tâm ngắm vào khu vực đặt Spike hoặc Spike đã được đặt để Wingman đặt hoặc gỡ Spike. Để đặt Spike, Gekko phải có Spike trong kho đồ. Khi Wingman hết thời gian hiệu lực, nó sẽ tiêu biến thành một tiểu thể không hoạt động. TƯƠNG TÁC để thu hồi tiểu thể và nhận thêm 1 lượt dùng Wingman sau khoảng thời gian hồi chiêu ngắn."
        );
        setIsImage1Selected(false);
        setIsImage2Selected(true);
        setIsImage3Selected(false);
        setIsImage4Selected(false);
        break;
      case SkillRange.skill3:
        setVideoSrc("https://valorant.zing.vn/dizzy.mp4");
        setSkillName("E - Dizzy");
        setSkillInfor(
          "TRANG BỊ Dizzy. Nhấn BẮN để cử Dizzy bay vút thẳng lên không trung. Dizzy vận sức, sau đó phóng ra tia plasma lên kẻ địch trong tầm nhìn. Kẻ địch trúng tia plasma sẽ bị mù. Khi Dizzy hết thời gian hiệu lực, nó sẽ tiêu biến thành một tiểu thể không hoạt động. TƯƠNG TÁC để thu hồi tiểu thể và nhận thêm 1 lượt dùng Dizzy sau khoảng thời gian hồi chiêu ngắn."
        );
        setIsImage1Selected(false);
        setIsImage2Selected(false);
        setIsImage3Selected(true);
        setIsImage4Selected(false);
        break;
      case SkillRange.skill4:
        setVideoSrc("https://valorant.zing.vn/thrash.mp4");
        setSkillName("X - Thrash");
        setSkillInfor(
          "TRANG BỊ Thrash. Nhấn BẮN để kết nối với tâm trí của Thrash và điều khiển nó xuyên qua lãnh địa của kẻ thù. KÍCH HOẠT để lao về phía trước và phát nổ, giam cầm mọi kẻ địch trong một phạm vi nhỏ. Khi Thrash hết thời gian hiệu lực, nó sẽ tiêu biến thành một tiểu thể không hoạt động. TƯƠNG TÁC để thu hồi tiểu thể và nhận thêm 1 lượt dùng Thrash sau khoảng thời gian hồi chiêu ngắn. Có thể thu hồi Thrash một lần."
        );
        setIsImage1Selected(false);
        setIsImage2Selected(false);
        setIsImage3Selected(false);
        setIsImage4Selected(true);
        break;
    }
  }, [skillSelected]);
  return (
    <div
      className="lg:w-[60%] lg:h-[40%] flex lg:flex-row 
      flex-col-reverse 
    items-center justify-center w-full
      max-lg:absolute bottom-0 h-1/2 "
    >
      {/* SKILL NAVIGATION */}
      <div
        className="lg:w-[20%] lg:h-full  lg:flex lg:flex-col flex-row
        items-center gap-2 hidden "
        id="skill-nav"
      >
        <button
          className="lg:w-[120px] lg:h-[120px] bg-[#7A44E6] w-[75px] h-[75px]
          rounded-lg border-2 border-[#C9FF46] flex items-center justify-center
          hover:opacity-80 
        "
          onClick={() => {
            setSkillSelected(SkillRange.skill1);
          }}
        >
          {isImage1Selected ? (
            <Image
              id="image1"
              src={skill1Selected.src}
              alt="skill1"
              width={75}
              height={65}
            />
          ) : (
            <Image
              id="image1"
              src={skill1.src}
              alt="skill1"
              width={75}
              height={65}
            />
          )}
        </button>
        <button
          className="lg:w-[120px] lg:h-[120px] bg-[#7A44E6] w-[75px] h-[75px]
          rounded-lg border-2 border-[#C9FF46] flex items-center justify-center
          hover:opacity-80 
        "
          onClick={() => setSkillSelected(SkillRange.skill2)}
        >
          {isImage2Selected ? (
            <Image
              id="image2"
              src={skill2Selected.src}
              alt="skill1"
              width={75}
              height={65}
            />
          ) : (
            <Image
              id="image2"
              src={skill2.src}
              alt="skill1"
              width={75}
              height={65}
            />
          )}
        </button>
        <button
          className="lg:w-[120px] lg:h-[120px] bg-[#7A44E6] w-[75px] h-[75px]
          rounded-lg border-2 border-[#C9FF46] flex items-center justify-center
          hover:opacity-80 
        "
          onClick={() => setSkillSelected(SkillRange.skill3)}
        >
          {isImage3Selected ? (
            <Image
              id="image3"
              src={skill3Selected.src}
              alt="skill1"
              width={75}
              height={65}
            />
          ) : (
            <Image
              id="image3"
              src={skill3.src}
              alt="skill1"
              width={75}
              height={65}
            />
          )}
        </button>
        <button
          className="lg:w-[120px] lg:h-[120px] bg-[#7A44E6] w-[75px] h-[75px]
          rounded-lg border-2 border-[#C9FF46] flex items-center justify-center
          hover:opacity-80 
        "
          onClick={() => setSkillSelected(SkillRange.skill4)}
        >
          {isImage4Selected ? (
            <Image
              id="image4"
              src={skill4Selected.src}
              alt="skill1"
              width={75}
              height={65}
            />
          ) : (
            <Image
              id="image4"
              src={skill4.src}
              alt="skill1"
              width={75}
              height={65}
            />
          )}
        </button>
      </div>

      {/* CONTENT */}
      <div
        className="w-[80%] h-full 
        flex flex-col items-center "
        id="content"
      >
        <div
          className="w-[85%]   flex flex-col 
            gap-4 items-start"
        >
          <div className="w-full h-3/4 flex  gap-5 items-end  ">
            <Image
              src={lightning.src}
              alt="lightning"
              width={40}
              height={40}
              className=""
            />
            <h1 className="font-gmv-din-pro-medium text-2xl text-[#C9FF46]">
              GEKKO
            </h1>
            <h1 className="font-gmv-din-pro-medium text-2xl text-[#C9FF46]">
              //
            </h1>
            <h1 className="font-gmv-din-pro-medium lg:text-2xl text-xl">TIỂU SỬ</h1>
          </div>
          <p className="w-full flex h-full  font-gmv-din-pro-medium">
            Gã trai phố thị L.A. - là người dẫn đầu biệt đội toàn những sinh vật
            "lắm chiêu" và rất thân thiết. Gekko đuổi theo những đồng đội đang
            mải miết lao tới hất tung tất cả kẻ thù đang ngáng đường, ráng sức
            tập hợp chúng lại để có thể tiếp tục ra chiêu.
          </p>
        </div>

        <div className="w-full h-[43%]  flex items-center justify-center mt-1 mb-1">
          <video
            className="w-[80%] h-[100%] border-2 rounded-lg border-[#C9FF46] object-cover"
            controls={true}
            autoPlay
            muted
            src={videoSrc}
          ></video>
        </div>

        {/* BUTTON GROUP */}
        <div
          className="lg:hidden lg:h-full  flex lg:flex-col flex-row
        items-center gap-2 h-[20%] "
          id="skill-nav"
        >
          <button
            className="lg:w-[120px] lg:h-[120px] bg-[#7A44E6] w-[75px] h-[75px]
          rounded-lg border-2 border-[#C9FF46] flex items-center justify-center
          hover:opacity-80 
        "
            onClick={() => {
              setSkillSelected(SkillRange.skill1);
            }}
          >
            {isImage1Selected ? (
              <Image
                id="image1"
                src={skill1Selected.src}
                alt="skill1"
                width={75}
                height={65}
              />
            ) : (
              <Image
                id="image1"
                src={skill1.src}
                alt="skill1"
                width={75}
                height={65}
              />
            )}
          </button>
          <button
            className="lg:w-[120px] lg:h-[120px] bg-[#7A44E6] w-[75px] h-[75px]
          rounded-lg border-2 border-[#C9FF46] flex items-center justify-center
          hover:opacity-80 
        "
            onClick={() => setSkillSelected(SkillRange.skill2)}
          >
            {isImage2Selected ? (
              <Image
                id="image2"
                src={skill2Selected.src}
                alt="skill1"
                width={75}
                height={65}
              />
            ) : (
              <Image
                id="image2"
                src={skill2.src}
                alt="skill1"
                width={75}
                height={65}
              />
            )}
          </button>
          <button
            className="lg:w-[120px] lg:h-[120px] bg-[#7A44E6] w-[75px] h-[75px]
          rounded-lg border-2 border-[#C9FF46] flex items-center justify-center
          hover:opacity-80 
        "
            onClick={() => setSkillSelected(SkillRange.skill3)}
          >
            {isImage3Selected ? (
              <Image
                id="image3"
                src={skill3Selected.src}
                alt="skill1"
                width={75}
                height={65}
              />
            ) : (
              <Image
                id="image3"
                src={skill3.src}
                alt="skill1"
                width={75}
                height={65}
              />
            )}
          </button>
          <button
            className="lg:w-[120px] lg:h-[120px] bg-[#7A44E6] w-[75px] h-[75px]
          rounded-lg border-2 border-[#C9FF46] flex items-center justify-center
          hover:opacity-80 
        "
            onClick={() => setSkillSelected(SkillRange.skill4)}
          >
            {isImage4Selected ? (
              <Image
                id="image4"
                src={skill4Selected.src}
                alt="skill1"
                width={75}
                height={65}
              />
            ) : (
              <Image
                id="image4"
                src={skill4.src}
                alt="skill1"
                width={75}
                height={65}
              />
            )}
          </button>
        </div>

        <div
          className="w-full h-1/4 flex flex-col 
        items-start gap-4"
        >
          <div className="w-full h-[20%] flex gap-5 items-center ">
            <h1 className="font-gmv-din-pro-medium text-2xl text-[#C9FF46]">
              {skillName}
            </h1>
          </div>
          <p className="w-full h-full  font-gmv-din-pro-medium">{skillInfor}</p>
        </div>
      </div>
    </div>
  );
};
