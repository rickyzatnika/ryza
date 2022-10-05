/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import {
  Hero,
  About,
  Project,
  Skillbar,
  ContactForm,
  Blog,
} from '../components';
import { getPostsAndProjects } from '../lib/data';
import { motion } from 'framer-motion';

export default function Home({ data }) {
  return (
    <>
      <Hero />
      <section>
        <About />
        <div className="w-full pt-20 md:pt-0 px-6 md:px-0 md:w-3/6 mx-auto">
          <Skillbar />
        </div>
      </section>
      <section>
        <Project data={data} />
      </section>
      <section>
        <Blog data={data} />
      </section>
      <section>
        <div className=" mb-20 pt-20 md:pt-40 ">
          <motion.div
            initial={{ y: '10%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-3xl lg:text-5xl font-semibold capitalize -tracking-wide text-center mb-10 bg-clip-text bg-gradient-to-r  from-[#f093b0] via-[#a162e8]/50 to-[#a0e9ff] text-transparent">
              I accept freelance opportunities <br /> from time to time.
            </h3>
            <p className="text-center text-sm md:text-lg text-gray-500 ">
              Do you have an exciting project you need help with? <br /> Send me
              a message and let's chat.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>
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
