import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex flex-row py-2  px-5 items-center justify-between md:px-10 w-full   bg-[#ffffff]   to-[#ffffff] ">
      <Logo />
      <div className="flex gap-x-4 font-serif text-md    transition-all duration-200 md:text-lg">
        <a
          className="hover:text-gray-600"
          href="https://www.dunagiri.com/about-us"
          target="_blank"
        >
          About us
        </a>

        <a
          className="hover:text-gray-600"
          href="https://www.dunagiri.com/accomodations"
          target="_blank"
        >
          Pricing
        </a>
        <a
          className="hover:text-gray-600"
          href="https://www.dunagiri.com/gallery"
          target="_blank"
        >
          Gallery
        </a>
      </div>
    </header>
  );
};

export default Header;
