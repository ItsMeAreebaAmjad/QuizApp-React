import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-green-900 text-white p-6 lg:p-10">
      {/* Left Side Content */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <motion.h1 
          className="text-4xl sm:text-5xl font-extrabold text-green-400"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Quiz Master
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg text-gray-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 1.5 }}
        >
          Challenge yourself with exciting quizzes! Sharpen your mind and test your knowledge.
        </motion.p>

        <motion.div
          className="flex justify-center lg:justify-start"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Link to="/select-subject">
            <button className="bg-green-500 hover:bg-green-700 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-lg transition duration-300 transform hover:scale-105">
              Start Quiz
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Right Side Animation */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 relative">
        {/* Quiz Icon (Animated) */}
        <motion.div 
          className="text-green-400 text-7xl sm:text-9xl absolute"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <FaBrain />
        </motion.div>

        {/* Animated Background Effects */}
        <motion.div 
          className="w-40 sm:w-80 h-40 sm:h-80 bg-green-500 opacity-30 rounded-full absolute animate-pulse"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>

        <motion.div 
          className="w-32 sm:w-60 h-32 sm:h-60 bg-green-400 opacity-40 rounded-full absolute animate-ping"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Home;
