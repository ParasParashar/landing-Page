import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import MainImage from "./MainImage";

const Hero = () => {
  const textControls = useAnimation();
  const buttonControls = useAnimation();

  const animateText = async () => {
    await textControls.start({ opacity: 1, transition: { duration: 2 } });
  };

  const animateButton = async () => {
    await buttonControls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    });
  };

  useEffect(() => {
    animateText();
    animateButton();
  }, []);

  return (
    <main className="flex px-6 md:mt-6 overflow-hidden flex-col-reverse gap-2 items-center justify-center md:flex-row lg:flex-row">
      {/* title section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={textControls}
        className="mb-4 md:w-1/2 pr-3 flex flex-col max-sm:items-center max-sm:justify-center "
      >
        <h1 className="text-3xl font-serif sm:text-5xl md:text-7xl lg:text-[90px] font-extrabold leading-snug text-center md:text-left text-gray-50">
          Rejuvenate Amidst the Serene Beauty of
          <span className="text-yellow-300"> Dunagiri Retreat</span>
        </h1>
        <p className="p-2 mt-3 text-lg font-thin text-slate-200">
          Nestled amidst the Dunagiri Mountains in the serene beauty of
          Uttarakhand, Dunagiri Retreat stands as a beacon for spiritual
          seekers. Founded in 2005, this eco-spiritual sanctuary is not just a
          yoga retreat but a profound journey into self-discovery.
        </p>
        <motion.button
          initial={{ x: -60, opacity: 0 }}
          animate={buttonControls}
          className="mt-6 rounded-full w-[200px] bg-yellow-300/60 text-black p-2 hover:bg-orange-900 hover:font-thin transition-colors duration-200 hover:text-white"
        >
          <a href="https://www.dunagiri.com/contact-us" target="_blank">
            Experience Now
          </a>
        </motion.button>
      </motion.section>

      {/* image section */}
      <MainImage />
    </main>
  );
};

export default Hero;
