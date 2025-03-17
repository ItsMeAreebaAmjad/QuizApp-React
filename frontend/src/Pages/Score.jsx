import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Score = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalQuestions, attemptedQuestions, notAttempted, totalPoints, obtainedPoints } = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 w-[400px] text-center">
        <h1 className="text-4xl font-bold text-green-400 mb-6">Quiz Results</h1>

        <div className="space-y-3 text-lg">
          <p className="flex justify-between">
            <span className="text-gray-300">Total Questions:</span> 
            <span className="font-semibold">{totalQuestions}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-300">Attempted Questions:</span> 
            <span className="font-semibold">{attemptedQuestions}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-300">Not Attempted:</span> 
            <span className="font-semibold">{notAttempted}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-300">Total Points:</span> 
            <span className="font-semibold">{totalPoints}</span>
          </p>
          <p className="flex justify-between text-green-400 text-xl font-bold">
            <span>Obtained Points:</span> 
            <span>{obtainedPoints}</span>
          </p>
        </div>

        <div className="mt-8 space-x-4 flex justify-center">
          <button
            onClick={() => navigate("/select-subject")}
            className="bg-green-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-green-600 hover:scale-105 transition-transform"
          >
            Restart Quiz
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-red-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-red-600 hover:scale-105 transition-transform"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Score;
