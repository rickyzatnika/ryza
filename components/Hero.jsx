import { TypeWriter } from '../components';
import Link from 'next/link';
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { motion, useAnimationFrame } from 'framer-motion';
// import Canvas from './Canva/Canvas';

const Hero = () => {
  return (
    <>
      <div className="cursor-none bg-gradient-to-br relative from-black/40 overflow-hidden">
        {/* <Canvas /> */}
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            damping: 50,
            delay: 0.3,
          }}
          className=" gap-2 slider-thumb  flex flex-col text-center justify-center items-center  w-full h-screen pt-0 md:pt-10 overflow-hidden px-4 md:px-40 "
        >
          <div className="flex justify-center flex-col items-center  relative z-10">
            <div className="inline-flex ">
              <div>
                <span className="absolute left-1 animate-spin -top-9 md:-top-9 font-bold  text-2xl mr-2 md:text-1xl text-slate-300 bg-gradient-to-tr from-orange-900 to-yellow-300 p-2 rounded-full w-11 h-11">
                  Hi.
                </span>
              </div>
              <h1 className="antialiased font-[Shikamaru] mix-blend-screen capitalize text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                I`m Ricky
              </h1>
            </div>
          </div>
          <TypeWriter />
          <div className="w-full absolute bottom-24 lg:bottom-15 flex gap-4 md:gap-8 justify-center items-center  ">
            <div className="instagram  bg-gradient-to-t from-gray-400 hover:bg-gradient-to-br hover:text-pink-800 hover:from-gray-300 hover:transition-all duration-300 to-transparent p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer ">
              <Link
                href="https://www.instagram.com/_zatnika"
                passHref
                prefetch={false}
              >
                <a aria-label="instagram" className="mix-blend-overlay">
                  <BsInstagram size={24} />
                </a>
              </Link>
            </div>
            <div className="facebook bg-gradient-to-t from-gray-400 hover:bg-gradient-to-br hover:text-blue-600 hover:from-gray-300 hover:transition-all duration-300 to-transparent p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer ">
              <Link
                href="https://facebook.com/rickyzatnika"
                passHref
                prefetch={false}
              >
                <a aria-label="facebook" className="mix-blend-overlay">
                  <BsFacebook size={24} />
                </a>
              </Link>
            </div>
            <div className="linkedin bg-gradient-to-t from-gray-400 hover:bg-gradient-to-br hover:text-blue-500 hover:from-gray-300 hover:transition-all duration-300 to-transparent p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer">
              <Link
                href="https://linkedin.com/in/ricky-zatnika-375436254"
                passHref
                prefetch={false}
              >
                <a aria-label="linkedin" className="mix-blend-overlay">
                  <BsLinkedin size={24} />
                </a>
              </Link>
            </div>
            <div className="github bg-gradient-to-t from-gray-400 hover:bg-gradient-to-br hover:text-black/70 hover:from-gray-300 hover:transition-all duration-300 to-transparent p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer">
              <Link
                href="https://github.com/rickyzatnika"
                passHref
                prefetch={false}
              >
                <a aria-label="github" className="mix-blend-overlay">
                  <BsGithub size={24} />
                </a>
              </Link>
            </div>
          </div>
          {/* <div className="container absolute bottom-0 scale-50 lg:scale-75 lg:top-40  right-0 -z-10 w-full mx-auto my-10 ">
          <div
            className="icons flex items-center justify-center mx-auto"
            ref={ref}
          >
            <div className="side front flex items-center justify-center">
              <Image
                src="/assets/html.png"
                alt="html"
                width={75}
                height={75}
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
            <div className="side left flex justify-center items-center">
              <Image
                src="/assets/css.png"
                alt="css3"
                width={50}
                height={50}
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
            <div
              ref={ref}
              className="side right flex items-center justify-center"
            >
              <Image
                src="/assets/js.png"
                alt="javascript"
                width={75}
                height={75}
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
            <div className="side top flex items-center justify-center">
              {' '}
              <Image
                src="/assets/react.png"
                alt="reactjs"
                width={75}
                height={75}
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
            <div className="side bottom flex items-center justify-center">
              {' '}
              <Image
                src="/assets/firebase.png"
                alt="firebase"
                width={75}
                height={75}
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
            <div className="side back flex items-center justify-center">
              {' '}
              <Image
                src="/assets/figma.png"
                alt="figma"
                width={75}
                height={75}
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </div>
        </div> */}
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
