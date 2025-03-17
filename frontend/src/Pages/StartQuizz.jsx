import React, { useState } from "react";

const questions = [
  {
    question: "What does React use to update the UI efficiently?",
    options: ["DOM", "Virtual DOM", "Shadow DOM", "None of the above"],
    answer: "Virtual DOM",
  },
  {
    question: "Which hook is used for state management in React?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useState",
  },
  {
    question: "What is JSX in React?",
    options: [
      "JavaScript XML",
      "Java Standard Extension",
      "Java Syntax Extension",
      "None of the above",
    ],
    answer: "JavaScript XML",
  },
];

const StartQuizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizEnd(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {quizEnd ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Quiz Completed!</h1>
          <p className="text-xl mt-4">Your Score: {score} / {questions.length}</p>
          <button 
            className="mt-6 px-6 py-3 bg-green-500 text-black rounded-lg hover:bg-green-700"
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setQuizEnd(false);
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="text-center w-2/3 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            {questions[currentQuestion].question}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="bg-green-500 text-black py-2 px-4 rounded-lg hover:bg-green-700 transition"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StartQuizz;
