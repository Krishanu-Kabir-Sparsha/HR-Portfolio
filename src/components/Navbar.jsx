import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
    }
    setIsMenuOpen(false); // Close menu for mobile view
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full bg-gradient-to-r from-indigo-800 via-indigo-400 to-indigo-800 text-white z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4 relative">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          HR Portfolio
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <button
              className="hover:text-indigo-200 transition-colors duration-300"
              onClick={() => handleSmoothScroll("hero")}
            >
              Home
            </button>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              className="hover:text-indigo-200 transition-colors duration-300"
              onClick={() => handleSmoothScroll("about")}
            >
              About
            </button>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              className="hover:text-indigo-200 transition-colors duration-300"
              onClick={() => handleSmoothScroll("work")}
            >
              Work Samples
            </button>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button
              className="hover:text-indigo-200 transition-colors duration-300"
              onClick={() => handleSmoothScroll("skills")}
            >
              Skills
            </button>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button
              className="hover:text-indigo-200 transition-colors duration-300"
              onClick={() => handleSmoothScroll("testimonials")}
            >
              Testimonials
            </button>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button
              className="hover:text-indigo-200 transition-colors duration-300"
              onClick={() => handleSmoothScroll("contact")}
            >
              Contact
            </button>
          </motion.li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-b from-indigo-800 via-indigo-400 to-indigo-800 text-white text-lg font-semibold space-y-4 py-6 px-8 md:hidden"
        >
          <motion.button
            className="block w-full text-left hover:text-indigo-200 transition-colors duration-300"
            onClick={() => handleSmoothScroll("hero")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Home
          </motion.button>
          <motion.button
            className="block w-full text-left hover:text-indigo-200 transition-colors duration-300"
            onClick={() => handleSmoothScroll("about")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            About
          </motion.button>
          <motion.button
            className="block w-full text-left hover:text-indigo-200 transition-colors duration-300"
            onClick={() => handleSmoothScroll("work")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Work Samples
          </motion.button>
          <motion.button
            className="block w-full text-left hover:text-indigo-200 transition-colors duration-300"
            onClick={() => handleSmoothScroll("skills")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Skills
          </motion.button>
          <motion.button
            className="block w-full text-left hover:text-indigo-200 transition-colors duration-300"
            onClick={() => handleSmoothScroll("testimonials")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Testimonials
          </motion.button>
          <motion.button
            className="block w-full text-left hover:text-indigo-200 transition-colors duration-300"
            onClick={() => handleSmoothScroll("contact")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Contact
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
