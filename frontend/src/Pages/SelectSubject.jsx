import React from "react";
import { useNavigate } from "react-router-dom";

const SelectSubject = () => {
  const navigate = useNavigate();

  const handleSubjectSelect = (subject) => {
    navigate(`/quiz/${subject}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Select a Subject</h1>
      <div className="grid grid-cols-3 gap-6">
        {["DSA", "OOP", "DB"].map((subject) => (
          <button
            key={subject}
            className="bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-700 transition"
            onClick={() => handleSubjectSelect(subject)}
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectSubject;
