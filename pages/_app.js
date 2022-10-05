import '../styles/globals.css';
import 'animate.css';
import 'nprogress/nprogress.css';
import { useState, useEffect } from 'react';
import { Layout } from '../components';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
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
        <AnimatePresence mode="wait">
          <ParallaxProvider>
            <ThemeProvider attribute="class">
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </ParallaxProvider>
        </AnimatePresence>
      </>
    );
  }
}
