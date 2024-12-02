import React from "react";
import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/react";
import { assets } from "../assets/assets";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "CEO, Innovatech",
      image: assets.alx, // Replace with an avatar or logo
      feedback:
        "Their strategic approach to organizational development and employee engagement has been a cornerstone of our success. A true visionary in the HR domain.",
    },
    {
      id: 2,
      name: "Sophia Martinez",
      position: "HR Director, TechSavvy Co.",
      image: assets.sp, // Replace with an avatar or logo
      feedback:
        "An exemplary leader who brings data-driven insights and a human touch to every challenge. Their contributions have redefined HR excellence.",
    },
    {
      id: 3,
      name: "Michael Lee",
      position: "CTO, CloudSphere",
      image: assets.mc, // Replace with an avatar or logo
      feedback:
        "Collaborating with them has elevated our team's potential. Their ability to balance strategic thinking with practical solutions is remarkable.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-blue-50 py-16 px-6 lg:px-20"
    >
      {/* Enhanced Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -100 }}
        animate={{
          opacity: [0.3, 0.5, 0.7],
          scale: [0.9, 1.2, 1],
          x: [-100, 100],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl opacity-30 transform rotate-45"
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
        className="absolute bottom-10 right-20 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl opacity-30 transform rotate-45"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1.1 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700 opacity-20 filter blur-3xl"
      ></motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold text-teal-600">
            Professional Feedback
          </h2>
          <p className="text-lg mt-4 text-gray-600">
            Insights and praise from esteemed colleagues and leaders.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: testimonial.id * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Avatar
                  src={testimonial.image}
                  size="lg"
                  className="mr-4"
                  bordered
                  color="primary"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "{testimonial.feedback}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
