import React from 'react';
import { motion } from 'framer-motion';

function Skillbar() {
  return (
    <>
      <div className="mb-8 md:mb-10">
        <h3 className="text-xl md:text-2xl text-center -tracking-wide">
          Basic of <span className="text-blue-600">Web Development</span> Skills
        </h3>
      </div>
      <div className="relative bg-[rgba(0,0,0,0.125)] rounded-md p-4 px-8 leading-relaxed shadow-xl rounded-8">
        <div className="w-full my-6">
          <span className="block font-medium antialiased">
            <p className="skillBarTitle font-semibold text-neutral-800">
              {' '}
              HTML{' '}
            </p>
          </span>
          <div className="relative h-2 w-full rounded-md mt-2 bg-[rgba(0,0,0,0.1)] shadow-sm shadow-gray-400">
            <motion.span
              initial={{ width: 0, opacity: 1 }}
              whileInView={{ width: '90%', opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: 'easeInOut',
              }}
              className="relative block h-full w-11/12 bg-gradient-to-l from-purple-400/90 to-blue-400/90"
            >
              <span className=" absolute -right-8 -bottom-5 font-medium text-sm text-transparent bg-gradient-to-r from-blue-400 to-purple-400/80 bg-clip-text">
                90%
              </span>
            </motion.span>
          </div>
        </div>
        <div className=" w-full my-6">
          <span className="block font-medium antialiased">
            <p className="skillBarTitle font-semibold text-neutral-800">
              {' '}
              CSS{' '}
            </p>
          </span>
          <div className=" h-2 w-full rounded-md mt-2 bg-[rgba(0,0,0,0.1)] shadow-sm shadow-gray-400">
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '80%', opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: 'easeInOut' }}
              className="relative block h-full w-10/12 bg-gradient-to-l from-purple-400/90 to-blue-400/90"
            >
              <span className=" absolute -right-8 -bottom-5 font-medium text-sm text-transparent bg-gradient-to-r from-blue-400 to-purple-400/80 bg-clip-text">
                80%
              </span>
            </motion.span>
          </div>
        </div>
        <div className=" w-full my-6">
          <span className="block font-medium antialiased">
            <p className="skillBarTitle font-semibold text-neutral-800">
              {' '}
              Javascript{' '}
            </p>
          </span>
          <div className=" h-2 w-full rounded-md mt-2 bg-[rgba(0,0,0,0.1)] shadow-sm shadow-gray-400">
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '65%', opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: 'easeInOut' }}
              className=" relative block h-full w-8/12 bg-gradient-to-l from-purple-400/90 to-blue-400/90"
            >
              <span className=" absolute -right-8 -bottom-5 font-medium text-sm text-transparent bg-gradient-to-r from-blue-400 to-purple-400/80 bg-clip-text">
                65%
              </span>
            </motion.span>
          </div>
        </div>
        <div className=" w-full my-6">
          <span className="block font-medium antialiased">
            <p className="skillBarTitle font-semibold text-neutral-800">
              {' '}
              React{' '}
            </p>
          </span>
          <div className=" h-2 w-full rounded-md mt-2 bg-[rgba(0,0,0,0.1)] shadow-sm shadow-gray-400">
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '70%', opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: 'easeInOut' }}
              className=" relative block h-full w-9/12 bg-gradient-to-l from-purple-400/90 to-blue-400/90"
            >
              <span className=" absolute -right-8 -bottom-5 font-medium text-sm text-transparent bg-gradient-to-r from-blue-400 to-purple-400/80 bg-clip-text">
                70%
              </span>
            </motion.span>
          </div>
        </div>
        <div className=" w-full my-6">
          <span className="block font-medium antialiased">
            <p className="skillBarTitle font-semibold text-neutral-800">
              {' '}
              NodeJs{' '}
            </p>
          </span>
          <div className=" h-2 w-full rounded-md mt-2 bg-[rgba(0,0,0,0.1)] shadow-sm shadow-gray-400">
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '60%', opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: 'easeInOut' }}
              className=" relative block h-full w-7/12 bg-gradient-to-l from-purple-400/90 to-blue-400/90"
            >
              <span className=" absolute -right-8 -bottom-5 font-medium text-sm text-transparent bg-gradient-to-r from-blue-400 to-purple-400/80 bg-clip-text">
                60%
              </span>
            </motion.span>
          </div>
        </div>
        <div className=" w-full my-6">
          <span className="block font-medium antialiased">
            <p className="skillBarTitle font-semibold text-neutral-800">
              {' '}
              Wordpress{' '}
            </p>
          </span>
          <div className=" h-2 w-full rounded-md mt-2 bg-[rgba(0,0,0,0.1)] shadow-sm shadow-gray-400">
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '80%', opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: 'easeInOut' }}
              className=" relative block h-full w-10/12  bg-gradient-to-l from-purple-400/90 to-blue-400/90"
            >
              <span className=" absolute -right-8 -bottom-5 font-medium text-sm text-transparent bg-gradient-to-r from-blue-400 to-purple-400/80 bg-clip-text">
                80%
              </span>
            </motion.span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skillbar;
