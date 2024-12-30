import React, { useState } from "react";
import { data } from "../../assets/data";
import "./Quiz.css";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(data[index]);
  const [lock, setLock] = useState(false);

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (questions.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
      }
    }
  };

  return (
    <div className="w-[640px] m-auto mt-[150px] bg-white text-[#262626] flex flex-col gap-[20px] rounded-[10px] py-[40px] px-[50px]">
      <h1 className="text-3xl font-bold">Quiz App</h1>
      <hr className="h-[2px] border-none bg-[#707070]" />
      <h2 className="text-[22px] font-medium">
        {index + 1}. {questions.question}
      </h2>
      <ul>
        <li
          onClick={(e) => checkAns(e, 1)}
          className="flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[20px] cursor-pointer"
        >
          {questions.option1}
        </li>
        <li
          onClick={(e) => checkAns(e, 2)}
          className="flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[20px] cursor-pointer"
        >
          {questions.option2}
        </li>
        <li
          onClick={(e) => checkAns(e, 3)}
          className="flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[20px] cursor-pointer"
        >
          {questions.option3}
        </li>
        <li
          onClick={(e) => checkAns(e, 4)}
          className="flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[20px] cursor-pointer"
        >
          {questions.option4}
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
