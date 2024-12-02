import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  const [currentDetail, setCurrentDetail] = useState(0);
  const details = [
    "Empowering organizations through strategic HR management.",
    "Optimizing talent acquisition and retention.",
    "Building high-performing teams through innovative solutions.",
    "Fostering positive work environments for growth.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDetail((prev) => (prev + 1) % details.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center px-6 md:px-8 lg:px-20 bg-gradient-to-tr from-teal-700 via-blue-800 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Background Design Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-72 h-72 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 opacity-40 blur-3xl"
          initial={{ x: "-100%", y: "-100%" }}
          animate={{ x: "150%", y: "150%" }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="w-60 h-60 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 opacity-30 blur-2xl"
          initial={{ x: "150%", y: "150%" }}
          animate={{ x: "-100%", y: "-100%" }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Left Section - Details */}
      <motion.div
        className="lg:w-5/12 flex flex-col justify-center space-y-3 md:space-y-5 lg:space-y-6 z-10 text-center lg:text-left lg:ml-40 px-6 md:px-8 lg:px-0 mx-auto lg:mx-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-teal-300">
          Danial Priest
        </h1>
        <motion.p
          key={currentDetail}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl font-medium text-cyan-200"
        >
          {details[currentDetail]}
        </motion.p>
        <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
          With over 10 years of experience in HR leadership, Dan specializes in bridging organizational goals with employee aspirations. He is passionate about creating sustainable talent strategies for long-term growth.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-4 px-6 py-2 bg-white text-blue-800 font-medium text-xs rounded shadow-md hover:bg-gray-100 transition-all w-auto md:w-auto lg:w-auto mx-auto lg:ml-0"
        >
          Download Resume
        </motion.button>
      </motion.div>

      {/* Right Section - Profile Picture */}
      <motion.div
        className="lg:w-5/12 flex justify-center lg:justify-end mt-8 lg:mt-0 z-10 lg:mr-12"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={assets.profile}
          alt="Profile"
          className="w-64 h-64 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
