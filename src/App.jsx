import React from "react";
import Quiz from "./components/Quiz";
import { QuizzData } from "./dataQuizes";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 h-screen w-screen">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-5xl text-center text-slate-100 py-8 ">
          lets start our quiz
        </h1>
        <Quiz questions={QuizzData.questions} />
      </div>
    </div>
  );
};

export default App;
