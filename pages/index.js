import { useEffect, useState } from 'react';
import { getPostsAndProjects } from '../lib/data';

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Counter from '../components/Counter';
import { Popup } from '../components';

const Hero = dynamic(() => import('../components/Hero'));
const About = dynamic(() => import('../components/About'));
const Project = dynamic(() => import('../components/Project'));
const Skillbar = dynamic(() => import('../components/Skillbar'));
const ContactForm = dynamic(() => import('../components/ContactForm'));
const Blog = dynamic(() => import('../components/Blog'));

export default function Home({ data }) {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFrom(to);
      setTo(Math.floor(Math.random() * 70));
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [from, to]);
  return (
    <>
      <Head>
        <title>Ryza - Homepage</title>
        <meta
          name="google-site-verification"
          content="lyxzDtCK9jHXzmvek-f8uNKJxScEn8IVIIMaCH3EcxY"
        />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <meta
          name="keywords"
          content="Frontend Web Developer, Portfolio Web, ryza.inkara.id, Ryza Portfolio, Ryza Inkara, Web Development "
        />
        <meta
          name="description"
          content="I am a frontend developer and web designer currently working as a freelancer.
This is my personal website - where you will find everything I'm thinking about."
        />
        <meta name="author" content="Ricky Zatnika" />
        <meta property="og:title" content="Homepage Ryza Portfolio Blog site" />
        <meta property="og:url" content="https://ryza.inkara.id/" />
      </Head>

      <Hero />
      <section>
        <About />
      </section>
      <section>
        <Project data={data} />
      </section>
      <section>
        <Blog data={data} />
      </section>
      <section className="relative w-full mb-0 bg-gradient-to-t  to-transparent overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[5rem] bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="w-full  pt-10 md:pt-40 ">
          <motion.div
            initial={{ y: '40%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="antialiased text-4xl md:text-3xl lg:text-5xl font-semibold capitalize -tracking-wide text-center mb-10 bg-clip-text bg-gradient-to-r  from-[#f093b0] via-[#a162e8]/70 to-[#a0e9ff] text-transparent">
              I accept freelance opportunities <br /> from time to time.
            </h3>
            <motion.p
              initial={{ y: '40%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center text-base md:text-lg text-[#939393] "
            >
              Do you have an exciting project you need help with? <br /> Send me
              a message and let's chat.
            </motion.p>
          </motion.div>
          <Counter from={from + 2} to={to / 2} />
        </div>
      </section>
      <ContactForm />
    </>
  );
}

export const getStaticProps = async () => {
  const data = (await getPostsAndProjects()) || [];
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};
