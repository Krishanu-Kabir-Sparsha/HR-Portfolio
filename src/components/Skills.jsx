import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-teal-50 py-16 px-6 lg:px-20"
    >
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -100 }}
        animate={{
          opacity: [0.3, 0.5, 0.7],
          scale: [0.9, 1.2, 1],
          x: [-100, 100],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl opacity-30"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{
          opacity: [0.4, 0.6, 0.8],
          scale: [1, 1.3, 1],
          y: [100, -100],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-20 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl opacity-30"
      ></motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold text-teal-600">Core Expertise</h2>
          <p className="text-lg mt-4 text-gray-600">
            Leveraging advanced knowledge and skills to drive impactful solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {[
            {
              title: "Strategic Talent Mapping",
              description:
                "Specialized in aligning recruitment strategies with long-term organizational objectives.",
              color: "bg-teal-100",
            },
            {
              title: "Culture Advocacy",
              description:
                "Fostering a cohesive, inclusive workplace culture that drives engagement and collaboration.",
              color: "bg-blue-100",
            },
            {
              title: "Leadership Development",
              description:
                "Empowering leaders with the tools and training to inspire and guide teams effectively.",
              color: "bg-green-100",
            },
            {
              title: "Change Management",
              description:
                "Orchestrating successful transitions during organizational shifts with minimal disruption.",
              color: "bg-yellow-100",
            },
            {
              title: "Data-Driven HR Strategies",
              description:
                "Applying analytics to measure performance and refine talent management initiatives.",
              color: "bg-indigo-100",
            },
            {
              title: "Inclusive Workforce Design",
              description:
                "Creating equitable opportunities that harness diversity for greater innovation and results.",
              color: "bg-purple-100",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${skill.color} hover:scale-105 transition-transform duration-300`}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800">{skill.title}</h3>
              <p className="mt-3 text-gray-700 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
