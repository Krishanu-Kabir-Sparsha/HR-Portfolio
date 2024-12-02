import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Pagination, Navigation } from "swiper/modules";
import { assets } from "../assets/assets";

const WorkSamples = () => {
  const [isInView, setIsInView] = useState(false);

  const workSamples = [
    {
      image: assets.workEnvironment,
      title: "Talent Acquisition Excellence",
      description:
        "Developed and implemented a holistic recruitment strategy, reducing the average time-to-hire by 30% while improving the quality of hires through targeted outreach and refined screening processes.",
    },
    {
      image: assets.award,
      title: "Award for Excellence in Leadership Training",
      description:
        "Led a comprehensive leadership development program, resulting in a 20% increase in internal promotions and a 25% improvement in team engagement scores.",
    },
    {
      image: assets.engage,
      title: "Employee Engagement Transformation",
      description:
        "Initiated a year-long employee engagement campaign, which led to a 40% boost in overall satisfaction and a 15% improvement in retention rates.",
    },
    {
      image: assets.camp,
      title: "Diversity & Inclusion Programs",
      description:
        "Designed and executed diversity-focused recruitment campaigns and inclusive workplace policies, increasing underrepresented group hiring by 35% in just one year.",
    },
  ];

  const handleScroll = () => {
    const section = document.getElementById("work-samples");
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
      id="work-samples"
      className="relative py-16 px-6 lg:px-20 bg-gradient-to-b from-teal-100 via-white to-gray-50"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-[-1] bg-gradient-to-br from-teal-600 to-blue-700 opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold text-teal-600">Work Samples</h2>
          <p className="text-lg mt-4 text-gray-600">
            A curated selection of my most impactful HR initiatives and projects that led to organizational growth and employee success.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          grabCursor={true}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          modules={[EffectFade, Pagination, Navigation]}
          className="work-samples-swiper"
        >
          {workSamples.map((sample, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                transition={{ duration: 1.2 }}
                className="relative bg-white rounded-lg shadow-xl p-6 mx-auto max-w-lg"
              >
                <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                <img
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl font-semibold text-teal-700 mt-4">{sample.title}</h3>
                  <p className="text-gray-700 mt-2">{sample.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WorkSamples;
