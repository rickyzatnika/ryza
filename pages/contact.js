import { motion } from 'framer-motion';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Map from '../components/Map';

const ContactForm = dynamic(() => import('../components/ContactForm'));

const Contact = () => {
  return (
    <>
      <Head>
        <title>Ryza - Contact</title>
        <meta name="description" content="Contact Information" />
        <meta
          name="keywords"
          content="company profile web, Contact Information, Frontend Developer, Web Developer, Personal Blog Website, Blog website, Nextjs Blog, GraphCMS"
        />
        <meta name="author" content="Ricky Zatnika" />
        <meta property="og:title" content="Ryza Contact Information" />
        <meta property="og:url" content="https://ryza.inkara.id/" />
      </Head>
      <section className="mt-20 lg:mt-0">
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            damping: 50,
            delay: 0.2,
          }}
        >
          <ContactForm />
        </motion.div>

        <div className="text-center cursor-pointer flex flex-col items-center text-gray-400">
          <Map />
        </div>
      </section>
    </>
  );
};

export default Contact;
