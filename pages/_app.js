import '../styles/globals.css';
// import 'animate.css';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useSpring, useScroll } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Loading } from '../components';

const Layout = dynamic(() => import('../components/Layout'));

export default function MyApp({ Component, pageProps }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
            key="viewport"
          />

          <meta property="og:url" content="https://ryza.inkara.id/" />
          <meta
            name="google-site-verification"
            content="lyxzDtCK9jHXzmvek-f8uNKJxScEn8IVIIMaCH3EcxY"
          />
        </Head>
        <motion.div
          className="fixed top-0 left-0 right-0 h-[5px] z-[9999999] bg-gradient-to-l from-purple-500 via-indigo-300 to-black/25 origin-[0%]"
          style={{ scaleX }}
        >
          {' '}
        </motion.div>
        <AnimatePresence mode="wait">
          <ParallaxProvider>
            <Layout>
              <Loading />
              <Component {...pageProps} />
            </Layout>
          </ParallaxProvider>
        </AnimatePresence>
      </>
    );
  }
}
