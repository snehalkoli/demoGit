import { useState } from 'react';

const BudgetSlider = () => {
  const [value, setValue] = useState(370);

  // Calculate percentage for thumb and filled track positions
  const filledPercentage = ((value - 0) / (1000 - 0)) * 100;

  return (
    <div>
      <div className="text-2xl font-medium mb-4">Budget</div>
      <div className="flex flex-col items-center py-10 ml-[15px] mr-[35px]">
        <div className="relative w-full max-w-2xl">
          <div className="absolute w-full h-[2px] bg-gray-200 rounded-full" />

          <div
            className="absolute h-[2px] bg-[#4691F2] rounded-full"
            style={{ width: `${filledPercentage}%` }}
          />

          <div
            className="absolute w-[24px] h-[24px] bg-[#4691F2] rounded-full border-[6px] border-white shadow"
            style={{ left: `calc(${filledPercentage}% - 16px)`, top: '-12px' }}
          ></div>

          <div className="absolute w-[24px] h-[24px] bg-[#4691F2] rounded-full  shadow -mt-[12px]" />

          <div
            className="absolute w-[24px] h-[24px] bg-[#4691F2] rounded-full -mt-[12px]"
            style={{ left: '100%', transform: 'translate(-100%, 0)' }}
          />

          <div className="flex  w-full  mt-10">
            <span className="text-[#37454D]">€0</span>
            <span className="text-[#37454D] ml-[57px]">€{value}</span>
            <span className="text-[#37454D] ml-[130px]">€1000</span>
          </div>
        </div>

        {/* <input
        type="range"
        min="0"
        max="1000"
        value={value}
        onChange={e => setValue(e.target.value)}
        // className="w-full max-w-2xl appearance-none bg-transparent absolute mt-2"
        style={{ height: '2px', outline: 'none' }}
      /> */}
      </div>
    </div>
  );
};

export default BudgetSlider;
