import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const googleFormUrl =
      "https://script.google.com/macros/s/AKfycbw99Zi5kWlz1z-EXgg-LBLD67sKlxfKZywzDV4c5nuG2Oq1jgt39vfS1uDjqSnJgtTFEQ/exec";

    const data = new URLSearchParams();
    formData.forEach((value, key) => {
      data.append(key, value);
    });

    fetch(googleFormUrl, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        setFormStatus("Message sent successfully!");
        e.target.reset();
        // Clear the message after 5 seconds
        setTimeout(() => setFormStatus(null), 5000);
      })
      .catch((error) => {
        setFormStatus("Oops! Something went wrong, please try again.");
        console.error(error);
        // Clear the error message after 5 seconds
        setTimeout(() => setFormStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="relative py-12 px-4 md:px-8 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-10 -left-20 w-64 h-64 bg-blue-400 rounded-full blur-xl opacity-40"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-10 right-20 w-80 h-80 bg-teal-400 rounded-full blur-2xl opacity-50"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
          }}
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-600">Contact Me</h2>
          <p className="text-lg text-gray-700 mb-6">
            Have questions or need HR consultation? We're here to help!
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            className="px-4 py-3 w-full border rounded-lg shadow-sm"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            className="px-4 py-3 w-full border rounded-lg shadow-sm"
            required
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            className="px-4 py-3 w-full border rounded-lg shadow-sm"
            rows="4"
            required
          ></textarea>
          <motion.button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Confirmation Message */}
        {formStatus && (
          <motion.div
            className="mt-6 text-lg font-semibold text-teal-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {formStatus}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
