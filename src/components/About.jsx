import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/react";
import { assets } from "../assets/assets";

const About = () => {
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("about");
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-gray-100 py-16 px-6 lg:px-20"
    >
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{
          opacity: isInView ? 0.8 : 0,
          scale: isInView ? 1 : 0.8,
          rotate: isInView ? 360 : 0,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-30"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        animate={{
          opacity: isInView ? 0.7 : 0,
          scale: isInView ? 1.1 : 0.8,
          x: isInView ? 50 : -50,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 right-20 w-80 h-80 bg-teal-400 rounded-full filter blur-3xl opacity-30"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isInView ? 0.5 : 0,
          scale: isInView ? 1 : 0.9,
          y: isInView ? 30 : -30,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-300 rounded-full filter blur-2xl opacity-25"
      ></motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold text-teal-600">About Me</h2>
          <p className="text-lg mt-4 text-gray-600">
            Your trusted partner in fostering thriving workplaces and building high-performing teams.
          </p>
        </motion.div>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 relative z-10">
          {/* Left Column - Image and Avatar */}
          <motion.div
            className="lg:w-1/3 flex flex-col items-center lg:items-start"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Avatar
              src={assets.avatar}
              size="xl"
              color="primary"
              bordered
              zoomed
              className="mb-10 my-8"
            />
            <Avatar
              src={assets.key}
              size="xl"
              color="primary"
              bordered
              zoomed
              className="mb-10 my-8"
            />
            <Avatar
              src={assets.philo}
              size="xl"
              color="primary"
              bordered
              zoomed
              className="mb-6 my-8 mx-20"
            />
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            className="lg:w-2/3 flex flex-col space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            {/* Introduction */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 lg:p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold text-teal-600">Who Am I?</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                I am an HR professional with a decade of experience specializing in recruitment, talent acquisition, and employee engagement. 
                My mission is to align organizational goals with employee aspirations, driving mutual growth and satisfaction.
              </p>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              className="bg-teal-50 rounded-lg shadow-lg p-6 lg:p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold text-teal-700">Key Achievements</h3>
              <ul className="list-disc mt-4 ml-5 space-y-2 text-gray-700">
                <li>
                  Successfully implemented a company-wide performance appraisal system, increasing employee satisfaction by 30%.
                </li>
                <li>
                  Designed innovative training programs that improved workforce efficiency by 20%.
                </li>
                <li>
                  Recruited and retained top-tier talent in competitive markets.
                </li>
                <li>
                  Spearheaded diversity and inclusion initiatives, fostering a more equitable workplace.
                </li>
              </ul>
            </motion.div>

            {/* HR Philosophy */}
            <motion.div
              className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg shadow-lg p-6 lg:p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold">My HR Philosophy</h3>
              <p className="mt-4 leading-relaxed">
                "A thriving organization is built on the well-being and growth of its people. By fostering trust, inclusivity, and innovation, 
                I strive to create workplaces that inspire and empower individuals to achieve their fullest potential."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
