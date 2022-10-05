/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { motion, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 400;

    const x = (1 + Math.sin(t / 1000)) * -10;
    ref.current.style.transform = `translateY(${x}px) rotateY(${rotate}deg) rotateX(${rotate}deg) `;
  });

  return (
    <>
      <div className="px-6 sm:px-10 md:px-20 lg:px-24 max-w-[1240px] m-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center box-border">
        <div className="col-span-1 lg:col-span-8 mb-10">
          <motion.div
            initial={{ rotate: '20deg', opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: 'easeInOut',
              type: 'spring',
              damping: 5,
            }}
          >
            <p className="uppercase text-xl tracking-widest text-blue-600 font-semibold">
              About
            </p>
            <h2 className="py-4 text-xl md:text-3xl font-semibold">Who I am</h2>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.6,
                delay: 0.3,
                dumping: 50,
              },
            }}
          >
            <p className="antialiased py-2 text-gray-500 leading-relaxed">
              I started my journey becoming a frontend developer on mei 2019. I
              learned about how the internet works, about HTML and CSS. And I
              created my first ever landing page which was very exciting. <br />
              After that I just continued with the course learned more HTML, CSS
              and a little bit of Javascript, and I created a website for a
              friend of mine a very bad one though.. but I learned a lot.
            </p>
            <p className="antialiased py-2 text-gray-500 leading-relaxed">
              After that I learned Bootstrap and basic Javascript and I also
              learned about flexbox and Grid layout through some documentation.
              The course continued with intermediate Javascript, I worked a lot
              on that but it wasn't enough, so I did another and tutorial on
              youtube which I really enjoyed and had lots of fun with.
            </p>
            <p className="antialiased py2 text-gray-500 leading-relaxed">
              In the course I also learned about web design using Figma, and
              learned about Terminal, ReactJs, NextJs, HeadlessCMS, about how to
              use Databases like mongoDB, MySQL and how to use animation with
              Framer Motion. <br /> <br /> I actually finished the course with
              ReactJs and I'm now working on my first ever react project. <br />{' '}
              Check out some of my latest projects.
            </p>
          </motion.div>
        </div>
        <div className="container w-full mx-auto my-10">
          <div
            className="cube flex items-center justify-center mx-auto"
            ref={ref}
          >
            <div className="side front flex items-center justify-center">
              <Image
                src="/assets/html.png"
                alt="css3"
                width={75}
                height={75}
                priority
              />
            </div>
            <div className="side left flex justify-center items-center">
              <Image
                src="/assets/css.png"
                alt="css3"
                width={75}
                height={75}
                priority
              />
            </div>
            <div
              ref={ref}
              className="side right flex items-center justify-center"
            >
              <Image
                src="/assets/js.png"
                alt="css3"
                width={75}
                height={75}
                priority
              />
            </div>
            <div className="side top flex items-center justify-center">
              {' '}
              <Image
                src="/assets/react.png"
                alt="css3"
                width={75}
                height={75}
                priority
              />
            </div>
            <div className="side bottom flex items-center justify-center">
              {' '}
              <Image
                src="/assets/firebase.png"
                alt="css3"
                width={75}
                height={75}
                priority
              />
            </div>
            <div className="side back flex items-center justify-center">
              {' '}
              <Image
                src="/assets/figma.png"
                alt="css3"
                width={75}
                height={75}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
