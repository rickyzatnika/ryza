/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typwriter from 'typewriter-effect';

const TypeWriter = () => {
  return (
    <>
      <div className="p-2 md:p-5 relative z-1 max-w-screen-md leading-relaxed ">
        <div className="flex flex-col justify-center text-center w-full item-center p-2 ">
          <div className="flex justify-center text-center ">
            <span className="antialiased  flex text-2xl md:text-4xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500/90 to-purple-600/80  mb-3">
              <span className="font-normal">{'<a>'}</span>
              <Typwriter
                options={{
                  strings: ['Front-end Developer'],
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
          </div>
          <p className=" px-2 mt-4 tracking-wide sm:p-0 text-md md:text-lg text-gray-500 textwriter font-normal antialiased">
            I am a frontend developer and designer currently working as a
            freelancer. <br /> This is my personal website - where you will find
            everything I'm thinking about.
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default TypeWriter;
