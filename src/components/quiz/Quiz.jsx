import React, { useRef, useState } from "react";
import { data } from "../../assets/data";
import "./Quiz.css";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  const optionArr = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if (!lock) {
      if (data[index].ans === ans) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        optionArr[data[index].ans - 1].current.classList.add("correct");
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      setIndex((prevIndex) => prevIndex + 1);
      setLock(false);

      // Reset classes for all options
      optionArr.forEach((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };

  return (
    <div className="w-[640px] m-auto mt-[150px] bg-white text-[#262626] flex flex-col gap-[20px] rounded-[10px] py-[40px] px-[50px]">
      <h1 className="text-3xl font-bold">Quiz App</h1>
      <hr className="h-[2px] border-none bg-[#707070]" />
      <h2 className="text-[22px] font-medium">
        {index + 1}. {data[index].question}
      </h2>
      <ul>
        <li
          ref={option1}
          onClick={(e) => checkAns(e, 1)}
          className="flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[20px] cursor-pointer"
        >
          {data[index].option1}
        </li>
        <li
          ref={option2}
          onClick={(e) => checkAns(e, 2)}
          className="flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[20px] cursor-pointer"
        >
          {data[index].option2}
        </li>
        <li
          ref={option3}
          onClick={(e) => checkAns(e, 3)}
          className="flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[20px] cursor-pointer"
        >
          {data[index].option3}
        </li>
        <li
          ref={option4}
          onClick={(e) => checkAns(e, 4)}
          className="flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[20px] cursor-pointer"
        >
          {data[index].option4}
        </li>
      </ul>
      <button
        onClick={next}
        className="m-auto w-[250px] h-[65px] bg-[#553f9a] text-white text-[25px] font-medium rounded-[8px]"
      >
        Next
      </button>
      <div className="m-auto text-[18px]">
        {index + 1} of {data.length} questions
      </div>
    </div>
  );
};

export default Quiz;
