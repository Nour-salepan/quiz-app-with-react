import React, { useState } from "react";
import { resultInitalState } from "../dataQuizes";

const QuizElement = ({ questions, currentQuestion, setCurrentQuestion }) => {
  const { question, choices, correctAnswer } = questions[currentQuestion];
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctChoice, setCorrectChoice] = useState(null);
  const [results, setResults] = useState(resultInitalState);
  const [displayScore, setDisplayScore] = useState(false);

  const reset = () => {
    setDisplayScore(false);
    setResults(resultInitalState);
  };

  const incrementQuestion = () => {
    if (currentQuestion + 1 >= questions.length) {
      setCurrentQuestion(0), setDisplayScore(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }

    setSelectedAnswer(null);
    setCorrectChoice(null);

    setResults((prev) =>
      correctChoice
        ? {
            ...prev,
            score: prev.score + 10,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
  };

  const onAnswerSelected = (choice, index) => {
    setSelectedAnswer(index);
    if (choice === correctAnswer) {
      setCorrectChoice(true);
    } else {
      setCorrectChoice(false);
    }
  };

  return (
    <div>
      {!displayScore ? (
        <>
          <h2 className="text-2xl font-bold my-1">{question}</h2>
          <ul className=" py-2">
            {choices.map((choice, i) => (
              <li
                className={`rounded text-slate-50 cursor-pointer p-2 my-2 bg-blue-400 ${
                  selectedAnswer === i && correctChoice
                    ? "hover:bg-green-400"
                    : "hover:bg-green-400"
                } ${selectedAnswer === i ? "bg-green-400" : "null"}`}
                key={i}
                onClick={() => onAnswerSelected(choice, i)}
              >
                {choice}
              </li>
            ))}
            <button
              onClick={incrementQuestion}
              disabled={selectedAnswer == null}
              className="text-3xl bg-slate-100 text-blue-600 text-center py-3 px-8 rounded mt-8 "
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </ul>
        </>
      ) : (
        <div className="border border-slate-50 p-2 flex  flex-col ">
          <p className="m-2 text-3xl border-slate-100 border-2 p-2">
            corrected {results.correctAnswers}😍
          </p>
          <p className="m-2 text-3xl border-slate-100 border-2 p-2">
            Score {results.score}🎉
          </p>
          <p className="m-2 text-3xl border-slate-100 border-2 p-2">
            lose {results.wrongAnswers}☹️
          </p>

          <button onClick={() => reset()}>try again</button>
        </div>
      )}
    </div>
  );
};

export default QuizElement;
