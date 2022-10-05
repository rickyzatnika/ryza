import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href="/" passHref>
        <a>
          <div className="relative ">
            <span className="logo_animate shadow-xl shadow-blue-400 bg-gradient-to-tr from-[#0b42d8e5] to-blue-300 -200 absolute bottom-5 -left-20 md:-left-28 rounded-full bg-blend-multiply opacity-50"></span>
            <h2 className="text-2xl sm:text-2xl md:text-3xl text-slate-200 font-bold relative cursor-pointer">
              <span className="relative top-2 ">R</span>
              <span className="text-blue-500 ">Y</span>
              <span className="text-blue-500 "> Z</span>
              <span className="relative -top-2 ">A</span>
            </h2>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Logo;
