import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <>
      <Link href="/" passHref>
        <a>
          <div className="relative ">
            <h2 className="text-2xl font-[Shikamaru] sm:text-2xl md:text-3xl text-slate-200 font-bold relative cursor-pointer">
              <span className="relative top-2 ">R</span>
              <span className="text-indigo-500 ">Y</span>
              <span className="text-indigo-500 "> Z</span>
              <span className="relative -top-2 ">A</span>
            </h2>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Logo;
