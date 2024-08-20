import Link from 'next/link';
import React from 'react';
import Clock from 'react-live-clock';
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import Typwriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const MobileNav = ({ open, setOpen }) => {
  const closeMenu = () => setOpen(false);

  return (
    <>
      <div
        onClick={closeMenu}
        className={`  md:hidden overlays fixed left-0 top-0 w-full h-screen backdrop-blur-sm bg-black/90 ${
          open ? '-translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } transition-translate duration-200 ease-in`}
      >
        <div
          className={` navSide_Menu fixed justify-evenly gap-10 flex flex-col top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#101010]  duration-200 ease-in p-10`}
        >
          <div className="flex flex-col  gap-4">
            <Link href="/" passHref>
              <a>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeInOut',
                  }}
                  className="mobile__logo shadow-md shadow-gray-700 px-6  p-2 w-fit m-auto"
                >
                  <Clock
                    format={'h:mm:ssa'}
                    ticking={true}
                    className="text-xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-300 font-semibold"
                  />
                </motion.div>
              </a>
            </Link>

            <motion.div
              initial={{ y: '-100%', scale: 0, opacity: 0 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.4,
                ease: 'easeInOut',
              }}
              className="font-[Roboto] typewriter text-center text-[#909090]  border-b border-gray-400 font-semibold tracking-wider text-xs"
            >
              <Typwriter
                options={{
                  strings: ['-Let`s Work Together-'],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString()

                    .pauseFor(20)
                    .deleteAll()

                    .start();
                }}
              />
            </motion.div>
          </div>

          <ul className="uppercase   w-fit flex flex-col justify-center space-y-4">
            <li>
              <Link href="/" passHref>
                <motion.a
                  initial={{ x: '-40%', opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className=" mobile"
                >
                  Home
                </motion.a>
              </Link>
            </li>

            <li>
              <Link href="/about" passHref>
                <motion.a
                  initial={{ x: '-60%', opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className=" mobile"
                >
                  About
                </motion.a>
              </Link>
            </li>

            <li>
              <Link href="/project" passHref>
                <motion.a
                  initial={{ x: '-60%', opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className=" mobile"
                >
                  Project
                </motion.a>
              </Link>
            </li>

            <li>
              <Link href="/blog" passHref>
                <motion.a
                  initial={{ x: '-80%', opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className=" mobile"
                >
                  Blog
                </motion.a>
              </Link>
            </li>

            <li>
              <Link href="/contact" passHref>
                <motion.a
                  initial={{ x: '-100%', opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className=" mobile"
                >
                  Contact
                </motion.a>
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ y: '-20%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center "
            >
              <p className="antialiased font-mono text-md text-[#949494] ">
                Connect With Me
              </p>
            </motion.div>
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-row gap-2 sm:gap-8 justify-center items-center "
            >
              <div className=" bg-gradient-to-t from-blue-200 to-blue-100 p-3 rounded-full shadow-xxl cursor-pointer ">
                <Link href="https://www.instagram.com/_zatnika/" passHref>
                  <a aria-label="instagram">
                    <BsInstagram size={22} color="rgba(0,0,0,0.7)" />
                  </a>
                </Link>
              </div>
              <div className="w-fit bg-gradient-to-t from-blue-200 to-blue-100 p-3 rounded-full shadow-xxl cursor-pointer">
                <Link href="https://facebook.com/rickyzatnika" passHref>
                  <a aria-label="facebook">
                    <BsFacebook size={22} color="rgba(0,0,0,0.7)" />
                  </a>
                </Link>
              </div>
              <div className="w-fit bg-gradient-to-t from-blue-200 to-blue-100 p-3 rounded-full shadow-xxl cursor-pointer">
                <Link href="https://linkedin.com" passHref>
                  <a aria-label="linkedin">
                    <BsLinkedin size={22} color="rgba(0,0,0,0.7)" />
                  </a>
                </Link>
              </div>
              <div className="w-fit bg-gradient-to-t from-blue-200 to-blue-100 p-3 rounded-full shadow-xxl cursor-pointer">
                <Link href="https://github.com/rickyzatnika" passHref>
                  <a aria-label="github">
                    <BsGithub size={22} color="rgba(0,0,0,0.7)" />
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
