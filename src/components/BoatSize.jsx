import {useState} from "react";

const BoatSize = () => {
  const [value, setValue] = useState(370);

  const filledPercentage = ((value - 0) / (1000 - 0)) * 100;

  return (
    <div>
      <div className="text-base font-medium  ml-[15px] pt-[25px]"> Boat Size</div>
      <div className="flex flex-col items-center py-10 ml-[15px] mr-[35px]">
        <div className="relative w-full max-w-2xl">
          <div className="absolute w-full h-[2px] bg-gray-200 rounded-full" />

          <div
            className="absolute h-[2px] bg-[#4691F2] rounded-full"
            style={{width: `${filledPercentage}`%}}
          />

          <div
            className="absolute w-[24px] h-[24px] bg-[#4691F2] rounded-full border-[6px] border-white shadow"
            style={{left: calc(${filledPercentage}% - "16px"), top: "-12px"}}
          ></div>

          <div className="absolute w-[24px] h-[24px] bg-[#4691F2] rounded-full  shadow -mt-[12px]" />

          <div
            className="absolute w-[24px] h-[24px] bg-[#4691F2] rounded-full -mt-[1px] ml-[60%]"
            style={{left: calc(${filledPercentage}% - 16px), top: "-12px"}}
          />

          <div className="flex  w-full  mt-10">
            <span className="text-[#37454D]">5 Mtr</span>
            <span className="text-[#37454D] ml-[57px]">15 Mtr</span>
            <span className="text-[#37454D] ml-[100px]">20 Mtr</span>
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-200 h-3"></div> */}
    </div>
  );
};

export default BoatSize;