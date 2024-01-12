import React from "react";

const Hero = () => {
  return (
    <main className="flex px-4 md:mt-6  flex-col-reverse gap-2 items-center justify-center md:flex-row lg:flex-row">
      {/* title section */}
      <section className="mb-4 md:w-1/2 pr-3 flex flex-col    max-sm:items-center max-sm:justify-center">
        <h1 className="text-3xl font-serif sm:text-5xl md:text-7xl lg:text-[90px] font-extrabold leading-snug text-center md:text-left text-white">
          Rejuvenate Amidst the Serene Beauty of
          <span className="text-yellow-300"> Dunagiri Retreat</span>
        </h1>
        <p className="p-2 mt-3 text-lg font-thin text-white">
          Nestled amidst the Dunagiri Mountains in the serene beauty of
          Uttarakhand, Dunagiri Retreat stands as a beacon for spiritual
          seekers. Founded in 2005, this eco-spiritual sanctuary is not just a
          yoga retreat but a profound journey into self-discovery.
        </p>
        <button className="mt-6 rounded-full w-[200px] bg-yellow-300/60 text-black p-2 hover:bg-orange-900 hover:font-thin transition-colors duration-200 hover:text-white">
          <a href="https://www.dunagiri.com/contact-us" target="_blank">
            Experience Now
          </a>
        </button>
      </section>

      {/* image section */}
      <section className="w-full h-[300px]  sm:h-[400px] relative md:w-1/2 md:h-[700px] p-2 rounded-lg">
        <img
          className="w-full h-full object-cover bg-blend-hard-light rounded-md"
          src="https://static.wixstatic.com/media/9c6671_b3cabf03e33e4caa87419c63a0360321~mv2.jpg/v1/crop/x_136,y_0,w_654,h_1080/fill/w_583,h_963,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/C1DSC03475_edited.jpg"
          alt="Landing page Image"
        />
      </section>
    </main>
  );
};

export default Hero;
