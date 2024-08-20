import React from 'react';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Page404 = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-[9999] w-full h-screen flex gap-6 justify-center items-center bg-black">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: '400', duration: 0.8 }}
          className="shadow-lg shadow-cyan-400/30 p-20 bg-[#111] flex items-center flex-col gap-3"
        >
          <div className="text-center space-y-4">
            <h2 className="text-2xl lg:text-7xl text-white ">404</h2>
            <p className="text-white text-2xl lg:text-5xl">page not found !!</p>
          </div>
          <Link href="/">
            <a>
              <div className="group pt-20 flex items-center gap-2">
                <AiOutlineArrowLeft className="text-cyan-700 text-1xl relative left-2 group-hover:text-white group group-hover:-left-2 transition-all duration-200" />
                <span className="group text-xl hover:text-cyan-700 text-white">
                  Back to Home
                </span>
              </div>
            </a>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Page404;
