/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Skillbar = dynamic(() => import('../components/Skillbar'));
const Timeline = dynamic(() => import('../components/Timeline'));

const About = () => {
  const [show, setShow] = useState(true);
  const showHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <Head>
        <title>Ryza - Aboutpage</title>
        <meta
          name="description"
          content="I started my journey becoming a frontend developer on mei 2019. I learned about how the internet works, about HTML and CSS. And I created my first ever landing page which was very exciting.
After that I just continued with the course learned more HTML, CSS and a little bit of Javascript, and I created a website for a friend of mine a very bad one though.. but I learned a lot."
        />
        <meta
          name="keywords"
          content="About Ricky Zatnika, Portfolio Web, Ryza Portfolio, Frontend Developer, Web Developer, Personal Blog Website, ryza aboutpage, ryza inkara"
        />
        <meta name="author" content="Ricky Zatnika" />
        <meta
          property="og:title"
          content="Aboutpage Ryza Portfolio Blog site"
        />
        <meta property="og:url" content="https://ryza.inkara.id/" />
      </Head>
      <section className=" mt-0 pt-14 mb-0 pb-10">
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            damping: 50,
            delay: 0.2,
          }}
          className="w-full pt-40 px-2 md:px-10 lg:px-20 "
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 px-0 md:px-8 items-start">
            <div className="col-span-1 lg:col-span-4 ">
              <div className="image flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-[Roboto] text-indigo-600 antialiased mb-10 -tracking-wide font-bold text-center">
                  About <span className="font-[Nunito] text-[#b8b7b7]">Me</span>
                </h1>
              </div>
              <section>
                <div className="px-2 my-20 w-full">
                  <div className="flex flex-col gap-4">
                    <div className="bg-gradient-to-b from-transparent to-black/30 px-6 py-6 shadow-xl shadow-gray-800/50  rounded-lg leading-4">
                      <div className="rounded-full shadow-2xl bg-gradient-to-t from-gray-800  to-black/30 w-5/6 mx-auto">
                        <Image
                          src="/relight2.png"
                          alt="foto profile"
                          width={75}
                          height={75}
                          layout="responsive"
                          priority
                          objectFit="cover"
                          objectPosition="center"
                          className="rounded-full mix-blend-overlay scale-95"
                        />
                      </div>
                      <div className="flex items-center mt-10 justify-between">
                        <div className=" text-base font-semibold text-[#8b8b8b]">
                          Fullname :
                        </div>
                        <span className="  text-sm text-[#727272]">
                          Ricky Zatnika
                        </span>
                      </div>
                      <div className="flex items-center mt-10 justify-between">
                        <div className=" text-base font-semibold text-[#8b8b8b]">
                          Age :
                        </div>
                        <span className="text-sm text-[#727272]">30</span>
                      </div>
                      <div className="flex items-center mt-10 justify-between">
                        <div className=" text-base font-semibold text-[#8b8b8b]">
                          Country :
                        </div>
                        <span className=" text-sm text-[#727272]">
                          Indonesia
                        </span>
                      </div>
                      <div className="flex items-center mt-10 justify-between">
                        <div className=" text-base font-semibold text-[#8b8b8b]">
                          City :
                        </div>
                        <span className=" text-sm text-[#727272]">Bandung</span>
                      </div>
                      <div className="flex items-center mt-10 justify-between">
                        <div className=" text-base font-semibold text-[#8b8b8b]">
                          Streat :
                        </div>
                        <span className=" text-sm text-[#727272]">
                          Sekeloa Tengah No.123
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-20">
                    <Skillbar />
                  </div>
                  <motion.div
                    initial={{ y: '30%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-20 bg-gradient-to-b from-transparent to-black/30 px-6 py-6 shadow-xl shadow-gray-800/50 rounded-lg leading-4"
                  >
                    <div className="w-fit mx-auto p-3 rounded-full text-center">
                      <h3 className="text-xl text-[#c5c4c4]">Extra Skills</h3>
                    </div>
                    <div className="flex items-center mt-10 justify-start gap-4">
                      <div className=" text-blue-400">
                        <MdOutlineLibraryAdd size={24} />
                      </div>
                      <span className=" text-base text-[#8b8b8b]">NextJs</span>
                    </div>
                    <div className="flex items-center mt-10 justify-start gap-4">
                      <div className=" text-blue-400">
                        <MdOutlineLibraryAdd size={24} />
                      </div>
                      <span className=" text-base text-[#8b8b8b]">
                        TailwindCSS
                      </span>
                    </div>
                    <div className="flex items-center mt-10 justify-start gap-4">
                      <div className=" text-blue-400">
                        <MdOutlineLibraryAdd size={24} />
                      </div>
                      <span className=" text-base text-[#8b8b8b]">
                        Bootstrap
                      </span>
                    </div>
                    <div className="flex items-center mt-10 justify-start gap-4">
                      <div className=" text-blue-400">
                        <MdOutlineLibraryAdd size={24} />
                      </div>
                      <span className=" text-base text-[#8b8b8b]">
                        Adobe Photoshop
                      </span>
                    </div>
                    <div className="flex items-center mt-10 justify-start gap-4">
                      <div className=" text-blue-400">
                        <MdOutlineLibraryAdd size={24} />
                      </div>
                      <span className=" text-base text-[#8b8b8b]">
                        CorelDrawX7
                      </span>
                    </div>
                  </motion.div>
                </div>
              </section>
            </div>
            <div className="col-span-1 lg:col-span-8 pt-10 px-8 relative top-0 md:top-20 lg:sticky mb-6">
              <div className="space-x-4 w-full mx-auto text-white mb-5 px-0 lg:px-10 flex">
                <button
                  onClick={showHandler}
                  className={
                    show
                      ? ' flex flex-col bg-indigo-500  px-4 py-2 items-center relative'
                      : ' flex flex-col border border-indigo-500 hover:text-white/80  hover:border-indigo-400  px-4 py-2 items-center relative'
                  }
                >
                  My Journey
                  <span
                    className={
                      show
                        ? 'absolute -bottom-2 w-4 h-4  bg-indigo-500 rotate-45 -z-10'
                        : ''
                    }
                  ></span>
                </button>
                <button
                  onClick={showHandler}
                  className={
                    show
                      ? 'flex flex-col border border-indigo-500 hover:text-white/80  hover:border-indigo-400   px-4 py-2 items-center relative'
                      : 'flex flex-col bg-indigo-500   px-4 py-2 items-center relative '
                  }
                >
                  Experience
                  <span
                    className={
                      show
                        ? ''
                        : 'absolute -bottom-2 w-4 h-4 bg-indigo-500  rotate-45 -z-10'
                    }
                  ></span>
                </button>
              </div>
              <div className="flex flex-col justify-center gap-10 scale-100 md:scale-90">
                {show ? (
                  <>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="antialiased flex flex-col justify-center gap-10 scale-100 md:scale-90"
                    >
                      <p className=" antialiased p-1 text-[#989898] leading-relaxed text-md md:text-lg tracking-widest">
                        I started my journey becoming a frontend developer on
                        mei 2019. I learned about how the internet works, about
                        HTML and CSS. And I created my first ever landing page
                        which was very exciting. <br />
                        After that I just continued with the course learned more
                        HTML, CSS and a little bit of Javascript, and I created
                        a website for a friend of mine a very bad one though..
                        but I learned a lot.
                      </p>
                      <p className=" antialiased py-2 text-[#989898] leading-relaxed text-md md:text-lg tracking-widest">
                        After that I learned Bootstrap and basic Javascript and
                        I also learned about flexbox and Grid layout through
                        some documentation. The course continued with
                        intermediate Javascript, I worked a lot on that but it
                        wasn't enough, so I did another and tutorial on youtube
                        which I really enjoyed and had lots of fun with.
                      </p>
                      <p className=" antialiased py2 text-[#7c7c7c] leading-relaxed text-md md:text-lg tracking-widest">
                        In the course I also learned about web design using
                        Figma, and learned about Terminal, NodeJs, Express JS,
                        HeadlessCMS, about how to use Databases like mongoDB,
                        MySQL and how to use animation with Framer Motion.{' '}
                        <br />I actually finished the course with ReactJs and
                        I'm now working on my first ever react Project.
                      </p>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <Timeline />
                  </>
                )}
                <div className="w-full hidden md:flex gap-2 sm:gap-8 justify-center items-center mt-5">
                  <div className="instagram  bg-gradient-to-t from-gray-400 hover:bg-gradient-to-br hover:text-pink-800 hover:from-gray-300 hover:transition-all duration-300 to-transparent p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer ">
                    <Link href="https://www.instagram.com/_zatnika/">
                      <a aria-label="instagram" className="mix-blend-overlay">
                        <BsInstagram size={24} />
                      </a>
                    </Link>
                  </div>
                  <div className="facebook bg-gradient-to-t from-gray-400 hover:bg-gradient-to-br hover:text-blue-600 hover:from-gray-300 hover:transition-all duration-300 to-transparent p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer ">
                    <Link href="https://facebook.com/rickyzatnika">
                      <a aria-label="facebook" className="mix-blend-overlay">
                        <BsFacebook size={24} />
                      </a>
                    </Link>
                  </div>
                  <div className="linkedin bg-gradient-to-t from-gray-400 hover:bg-gradient-to-br hover:text-blue-500 hover:from-gray-300 hover:transition-all duration-300 to-transparent p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer">
                    <Link href="/#">
                      <a aria-label="linkedin" className="mix-blend-overlay">
                        <BsLinkedin size={24} />
                      </a>
                    </Link>
                  </div>
                  <div className="github bg-gradient-to-t from-gray-400 hover:bg-gradient-to-br hover:text-black/70 hover:from-gray-300 hover:transition-all duration-300 to-transparent p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer">
                    <Link href="https://github.com/rickyzatnika" passHref>
                      <a aria-label="github" className="mix-blend-overlay">
                        <BsGithub size={24} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
