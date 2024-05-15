import React, { useState } from "react";
import QuizElement from "./QuizElement";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div className="">
      <div className="bg-slate-50 text-black w-32 p-6 text-center rounded-full ">
        <span className="text-2xl text-indigo-700 text-bold ">
          {currentQuestion + 1}
        </span>
        <span className="text-xl text-gray-500 ">/{questions.length}</span>
      </div>

      <QuizElement
        questions={questions}
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
      />
    </div>
  );
};

export default Quiz;
