import React from "react";

const Quiz = () => {
  return (
    <div className="w-[640px] m-auto mt-[150px] bg-white text-[#262626] flex flex-col gap-[20px] rounded-[10px] py-[40px] px-[50px]">
      <h1 className="text-3xl font-bold">Quiz App</h1>
      <hr className="h-[2px] border-none bg-[#707070]" />
      <h2 className="text-[22px] font-medium">
        1. Which device is required for the internet connection?
      </h2>
      <ul>
        <li className="flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[20px] cursor-pointer">
          Modem
        </li>
        <li className="flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[20px] cursor-pointer">
          Router
        </li>
        <li className="flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[20px] cursor-pointer">
          Lan Cable
        </li>
        <li className="flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[20px] cursor-pointer">
          Pen Drive
        </li>
      </ul>
      <button className="m-auto w-[250px] h-[65px] bg-[#553f9a] text-white text-[25px] font-medium rounded-[8px]">
        Next
      </button>
      <div className="m-auto text-[18px]">1 of 5 questions</div>
    </div>
  );
};

export default Quiz;
