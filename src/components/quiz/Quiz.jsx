import React, { useEffect, useRef, useState } from "react";
import { data } from "../../assets/data";
import "./Quiz.css";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [timer, setTimer] = useState(30);
  const [feedback, setFeedback] = useState("");

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  const optionArr = [option1, option2, option3, option4];

  useEffect(() => {
    if (timer > 0 && !result && lock === false) {
      const countdown = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer, result, lock]);

  const checkAns = (e, ans) => {
    if (!lock) {
      if (data[index].ans === ans) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
        setFeedback("✅ Correct!");
      } else {
        e.target.classList.add("wrong");
        optionArr[data[index].ans - 1].current.classList.add("correct");
        setFeedback("❌ Wrong! The correct answer is highlighted.");
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex((prevIndex) => prevIndex + 1);
      setTimer(30);
      setLock(false);
      setFeedback("");
      optionArr.forEach((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setTimer(30);
    setLock(false);
    setResult(false);
    setFeedback("");
  };

  const progress = Math.round(((index + 1) / data.length) * 100);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-[350px] bg-white text-[#262626] flex flex-col gap-3 rounded-lg py-4 px-3 sm:px-5 shadow-md">
        <h1 className="text-lg sm:text-xl font-bold text-center">Quiz App</h1>
        <hr className="h-[1px] border-none bg-[#707070]" />

        {result ? (
          <>
            <h2 className="text-md sm:text-lg text-center font-medium">
              Your score is {score} out of {data.length}
            </h2>
            <button
              onClick={reset}
              className="m-auto w-[160px] sm:w-[180px] h-[40px] sm:h-[45px] bg-[#3B82F6] text-white text-[14px] sm:text-[16px] font-medium rounded-[6px] hover:bg-[#2563EB] transition-all"
            >
              🔄 Restart Quiz
            </button>
          </>
        ) : (
          <>
            <h2 className="text-[16px] sm:text-[18px] font-medium text-center">
              {index + 1}. {data[index].question}
            </h2>

            {/* Progress Bar */}
            <div className="relative w-full h-2 bg-gray-300 rounded-full mt-2">
              <div
                className="absolute top-0 left-0 h-2 bg-[#4CAF50] rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-center mt-1 text-[12px] sm:text-[14px]">
              {progress}% Completed
            </div>

            {/* Answer Options */}
            <ul className="mt-3">
              <li
                ref={option1}
                onClick={(e) => checkAns(e, 1)}
                className="flex items-center h-[40px] sm:h-[45px] pl-3 sm:pl-4 border border-[#686868] rounded-[6px] mb-2 text-[14px] sm:text-[16px] cursor-pointer hover:bg-[#E2E8F0] transition-all"
              >
                {data[index].option1}
              </li>
              <li
                ref={option2}
                onClick={(e) => checkAns(e, 2)}
                className="flex items-center h-[40px] sm:h-[45px] pl-3 sm:pl-4 border border-[#686868] rounded-[6px] mb-2 text-[14px] sm:text-[16px] cursor-pointer hover:bg-[#E2E8F0] transition-all"
              >
                {data[index].option2}
              </li>
              <li
                ref={option3}
                onClick={(e) => checkAns(e, 3)}
                className="flex items-center h-[40px] sm:h-[45px] pl-3 sm:pl-4 border border-[#686868] rounded-[6px] mb-2 text-[14px] sm:text-[16px] cursor-pointer hover:bg-[#E2E8F0] transition-all"
              >
                {data[index].option3}
              </li>
              <li
                ref={option4}
                onClick={(e) => checkAns(e, 4)}
                className="flex items-center h-[40px] sm:h-[45px] pl-3 sm:pl-4 border border-[#686868] rounded-[6px] mb-2 text-[14px] sm:text-[16px] cursor-pointer hover:bg-[#E2E8F0] transition-all"
              >
                {data[index].option4}
              </li>
            </ul>

            {/* Feedback */}
            {feedback && (
              <div className="text-[12px] sm:text-[14px] font-semibold mb-2 text-center">
                {feedback}
              </div>
            )}

            {/* Next Button */}
            <button
              onClick={next}
              className="m-auto w-[160px] sm:w-[180px] h-[40px] sm:h-[45px] bg-[#3B82F6] text-white text-[14px] sm:text-[16px] font-medium rounded-[6px] hover:bg-[#2563EB] transition-all"
            >
              Next ➡️
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
