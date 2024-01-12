import React from "react";
// import { motion } from 'framer-motion';

// const MainImage = () => {
//   return (
//     <section className="w-full h-[300px]  sm:h-[400px] relative md:w-1/2 md:h-[700px] p-2 rounded-lg">
//       <img
//         className="w-full h-full object-cover bg-blend-hard-light rounded-md"
//         src="https://static.wixstatic.com/media/9c6671_b3cabf03e33e4caa87419c63a0360321~mv2.jpg/v1/crop/x_136,y_0,w_654,h_1080/fill/w_583,h_963,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/C1DSC03475_edited.jpg"
//         alt="Landing page Image"
//       />
//     </section>
//   );
// };

// export default MainImage;

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const MainImage = () => {
  const controls = useAnimation();

  const animateComponent = async () => {
    await controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.53, 0.13, 0.23, 0.06] },
    });
  };

  useEffect(() => {
    animateComponent();
  }, []);

  return (
    <motion.section
      initial={{ x: "100%", opacity: 0 }}
      animate={controls}
      className="w-full h-[300px] sm:h-[400px] relative md:w-1/2 md:h-[700px] p-2 rounded-lg"
    >
      <img
        className="w-full h-full object-cover bg-blend-hard-light rounded-md"
        src="https://static.wixstatic.com/media/9c6671_b3cabf03e33e4caa87419c63a0360321~mv2.jpg/v1/crop/x_136,y_0,w_654,h_1080/fill/w_583,h_963,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/C1DSC03475_edited.jpg"
        alt="Landing page Image"
      />
    </motion.section>
  );
};

export default MainImage;
