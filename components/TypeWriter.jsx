/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import Typwriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const TypeWriter = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 160,
      width: 160,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'white',
      color: 'black',
      mixBlendMode: 'difference',
    },
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  return (
    <>
      <div className="p-0 md:p-4  relative z-1 max-w-screen-md leading-relaxed ">
        <div className="flex flex-col justify-center text-center w-full item-center p-2 ">
          <motion.div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="flex justify-center text-center "
          >
            <span className="antialiased  flex text-md sm:text-2xl md:text-2xl lg:text-4xl text-[#b8b7b7] font-mono font-bold  mb-3">
              <span className="font-normal">{'<a>'}</span>
              <Typwriter
                options={{
                  strings: ['Front-end Developer', 'Web Designer'],
                  autoStart: true,
                  loop: true,
                  delay: 125,
                }}
                onInit={(typewriter) => {
                  typewriter

                    .pauseFor(700)
                    .deleteAll()

                    .start();
                }}
              />
              <span className=" font-normal">{'</a>'}</span>
            </span>
          </motion.div>

          <motion.div onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <p className=" py-8 leading-relaxed font-mono tracking-tighter md:tracking-widest text-[1.2rem] md:text-xl lg:text-1xl text-[#989898]/80 textwriter font-normal ">
              I am a frontend developer and web designer currently working as a
              freelancer. <br /> This is my personal website - where you will
              find everything I'm thinking about.
              <br />
            </p>
            <motion.div
              variants={variants}
              animate={cursorVariant}
              className="pointer-events-none bg-gradient-to-br  animate-pulse from-purple-600 to-transparent z-9999 h-[32px] w-[32px] rounded-full fixed top-0 left-0"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TypeWriter;
