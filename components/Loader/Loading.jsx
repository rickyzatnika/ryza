import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsFillGearFill } from 'react-icons/bs';
// import Canvas from '../Canva/Canvas';

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 800);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    loading && (
      <div className="fixed z-[9999999] transition-all duration-200 ease-linear  bottom-0 left-0  flex flex-col items-center justify-center w-full h-screen bg-[#0a0a0a]">
        {/* <Canvas /> */}
        {/* <div className="w-2/6 lg:w-1/6">
          <Image
            src="/Ellipse2.svg"
            alt="spinner"
            width={100}
            height={100}
            layout="responsive"
            priority
          />
        </div> */}
        <div className="text-white flex text-center space-x-4 lg:space-x-9">
          <motion.div
            initial={{ x: -100, rotateY: 360, opacity: 0 }}
            whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            span
          >
            L
          </motion.div>
          <motion.div
            initial={{ x: -90, rotateY: 360, opacity: 0 }}
            whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            span
          >
            O
          </motion.div>
          <motion.div
            initial={{ x: -80, rotateY: 360, opacity: 0 }}
            whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            span
          >
            A
          </motion.div>
          <motion.div
            initial={{ x: -70, rotateY: 360, opacity: 0 }}
            whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            span
          >
            D
          </motion.div>
          <motion.div
            initial={{ x: -60, rotateY: 360, opacity: 0 }}
            whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            span
          >
            I
          </motion.div>
          <motion.div
            initial={{ x: -50, rotateY: 360, opacity: 0 }}
            whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            span
          >
            N
          </motion.div>
          <motion.div
            initial={{ x: -40, rotateY: 360, opacity: 0 }}
            whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            span
          >
            G
          </motion.div>
        </div>
      </div>
    )
  );
}

export default Loading;
