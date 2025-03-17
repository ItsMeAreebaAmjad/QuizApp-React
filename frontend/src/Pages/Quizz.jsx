import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const quizData = {
  dsa: [
    { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], answer: "O(log n)" },
    { question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Heap", "Tree"], answer: "Stack" },
    { question: "Which sorting algorithm is fastest?", options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"], answer: "Quick Sort" },
    { question: "What is a graph?", options: ["Tree Structure", "Set of Nodes & Edges", "Linked List", "Table"], answer: "Set of Nodes & Edges" },
    { question: "Which data structure follows FIFO?", options: ["Stack", "Queue", "Heap", "Graph"], answer: "Queue" },
  ],
  oop: [
    { question: "Which feature of OOP allows code reuse?", options: ["Encapsulation", "Inheritance", "Abstraction", "Polymorphism"], answer: "Inheritance" },
    { question: "Which keyword is used to define a class in Java?", options: ["class", "def", "struct", "function"], answer: "class" },
    { question: "Which OOP principle hides details?", options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"], answer: "Abstraction" },
    { question: "What is an object in OOP?", options: ["Function", "Class", "Instance of Class", "Variable"], answer: "Instance of Class" },
    { question: "Which operator is used for dynamic memory allocation in C++?", options: ["new", "malloc", "alloc", "free"], answer: "new" },
  ],
  db: [
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Sequential Query Language", "System Query Language", "Server Query Language"], answer: "Structured Query Language" },
    { question: "Which normal form eliminates transitive dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], answer: "3NF" },
    { question: "Which SQL command is used to delete a table?", options: ["DROP", "DELETE", "REMOVE", "TRUNCATE"], answer: "DROP" },
    { question: "Which type of database is MongoDB?", options: ["Relational", "Hierarchical", "Document-based", "Graph"], answer: "Document-based" },
    { question: "Which SQL clause is used to filter results?", options: ["ORDER BY", "HAVING", "WHERE", "GROUP BY"], answer: "WHERE" },
  ]
};

export const Quizz = () => {
  const { subject } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    if (subject && quizData[subject.toLowerCase()]) {
      let shuffledQuestions = [...quizData[subject.toLowerCase()]].sort(() => 0.5 - Math.random());
      setQuestions(shuffledQuestions.slice(0, 5)); // Pick 5 random MCQs
    } else {
      navigate("/");
    }
  }, [subject, navigate]);

  const handleOptionSelect = (qIndex, option) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  const handleSubmit = () => {
    const totalQuestions = questions.length;
    const attemptedQuestions = Object.keys(selectedAnswers).length;
    const notAttempted = totalQuestions - attemptedQuestions;
    const totalPoints = totalQuestions;
    const obtainedPoints = questions.reduce(
      (acc, q, index) => acc + (selectedAnswers[index] === q.answer ? 1 : 0),
      0
    );

    navigate("/score", {
      state: { totalQuestions, attemptedQuestions, notAttempted, totalPoints, obtainedPoints },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-green-800 text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-300 mb-6">Quiz: {subject?.toUpperCase()}</h1>

      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-xl shadow-lg space-y-6">
        {questions.length > 0 ? (
          questions.map((q, index) => (
            <div key={index} className="p-4 bg-gray-700 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">{index + 1}. {q.question}</h2>
              <ul className="grid grid-cols-2 gap-4">
                {q.options.map((option, i) => (
                  <li
                    key={i}
                    className={`p-3 rounded-lg cursor-pointer transition 
                      ${selectedAnswers[index] === option ? "bg-green-500 text-black font-bold" : "bg-gray-600 hover:bg-gray-500"}`}
                    onClick={() => handleOptionSelect(index, option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No questions available.</p>
        )}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 px-8 py-3 bg-green-500 hover:bg-green-700 text-black font-bold rounded-lg transition transform hover:scale-105"
      >
        Submit Quiz
      </button>
    </div>
  );
};
