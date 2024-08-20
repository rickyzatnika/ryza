/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import Skillbar from './Skillbar';

const About = () => {
  return (
    <>
      <div className="relative px-6 sm:px-10 md:px-20 lg:px-24 w-full m-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center box-border ">
        <div className="col-span-1 lg:col-span-6 mb-10 ">
          <motion.div
            initial={{ rotate: '20deg', opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 400,
              damping: 10,
            }}
          >
            <p className="uppercase text-2xl tracking-widest font-[Shikamaru] text-indigo-600 font-semibold">
              About
            </p>
            <h2 className="py-4 text-xl md:text-3xl text-[#d4d4d4] font-semibold tracking-widest">
              Who I am
            </h2>
          </motion.div>
          <motion.div
            className="flex gap-2 flex-col w-full"
            initial={{ x: '-100%', opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,

              transition: {
                duration: 0.6,
                delay: 0.5,
              },
            }}
          >
            <p className="antialiased py-2 text-gray-400/60 font-[Nunito] text-md lg:text-lg leading-relaxed">
              I started my journey becoming a frontend developer on mei 2019. I
              learned about how the internet works, about HTML and CSS. And I
              created my first ever landing page which was very exciting. <br />
              After that I just continued with the course learned more HTML, CSS
              and a little bit of Javascript, and I created a website for a
              friend of mine a very bad one though.. but I learned a lot.
            </p>
            <p className="antialiased py-2 text-gray-400/60 font-[Nunito] text-md lg:text-lg leading-relaxed">
              After that I learned Bootstrap and basic Javascript and I also
              learned about flexbox and Grid layout through some documentation.
              The course continued with intermediate Javascript, I worked a lot
              on that but it wasn't enough, so I did another and tutorial on
              youtube which I really enjoyed and had lots of fun with.
            </p>
            <p className="antialiased py2 text-gray-400/60 font-[Nunito] text-md lg:text-lg leading-relaxed">
              In the course I also learned about web design using Figma, and
              learned about Terminal, ReactJs, NextJs, HeadlessCMS, about how to
              use Databases like mongoDB, MySQL and how to use animation with
              Framer Motion. <br /> <br />{' '}
              <span className="font-mono">
                I actually finished the course with ReactJs and I'm now working
                on my first ever react project. <br /> Check out some of my
                latest projects.
              </span>
            </p>
          </motion.div>
        </div>
        <div className="col-span-1 lg:col-span-6">
          <Skillbar />
        </div>
      </div>
    </>
  );
};

export default About;
