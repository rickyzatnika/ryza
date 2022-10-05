import { TypeWriter } from '../components';
import Link from 'next/link';
import Image from 'next/image';

import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
        className="relative  gap-2 flex flex-col text-center justify-center bg-gradient-to-t  from-blue-300/20 items-center  w-full h-screen pt-15 md:pt-40 overflow-hidden px-4 md:px-40 "
      >
        <div className="absolute left-0 -bottom-10">
          <Image
            src="/svg-hero-bottom.svg"
            alt="background"
            width={100}
            height={75}
            className="opacity-10 animates_2"
            priority
          />
        </div>
        <div className="flex justify-center flex-col items-center  relative">
          <div className="inline-flex ">
            <span className="text-2xl mr-2 md:text-4xl text-slate-600">
              Hi.
            </span>
            <h1 className="antialiased  mix-blend-screen capitalize text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              I`m Ricky
            </h1>
          </div>
        </div>
        <TypeWriter />
        <div className="w-full hidden md:flex sm:gap-8 justify-center items-center mt-2 ">
          <div className="instagram  bg-gradient-to-t from-blue-200 p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer ">
            <Link href="https://www.instagram.com/_zatnika/">
              <a aria-label="instagram">
                <BsInstagram size={24} />
              </a>
            </Link>
          </div>
          <div className="facebook bg-gradient-to-t from-blue-200 p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer">
            <Link href="https://facebook.com/rickyzatnika">
              <a aria-label="facebook">
                <BsFacebook size={24} />
              </a>
            </Link>
          </div>
          <div className="linkedin bg-gradient-to-t from-blue-200 p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer">
            <Link href="/#">
              <a aria-label="linkedin">
                <BsLinkedin size={24} />
              </a>
            </Link>
          </div>
          <div className="github bg-gradient-to-t from-blue-200 p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer">
            <Link href="https://github.com/rickyzatnika" passHref>
              <a aria-label="github">
                <BsGithub size={24} />
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
