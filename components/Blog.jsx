import Link from 'next/link';
import React from 'react';
import Newsletter from './Newsletter';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Blog = ({ data }) => {
  return (
    <>
      <motion.div
        initial={{ y: '50%', opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: 'easeIn' },
        }}
        exit={{ opacity: 0 }}
        className="text-center mb-0 md:mb-10"
      >
        <h2 className="text-4xl lg:text-5xl font-[Shikamaru] bg-clip-text bg-gradient-to-tr from-[#f093b0] via-[#a162e8]/70 to-[#a0e9ff] text-transparent font-semibold  tracking-widest relative w-fit mx-auto py-2 z-10 ">
          <span className="">Bl</span>
          ogs
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-8 lg:px-20 ">
        <div className="col-span-1 lg:col-span-8 ">
          {data?.posts?.map((post) => (
            <div
              key={post.id}
              className="flex flex-col justify-center items-center"
            >
              <motion.div
                initial={{ y: '50%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex group flex-col gap-4 leading-relaxed shadow-xl shadow-black/20 max-w-2xl py-10 px-4 md:px-10">
                  <div className="overflow-hidden">
                    <Image
                      src={post.coverPhoto.url}
                      alt={post.title}
                      width={75}
                      height={50}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                      priority
                      className="scale-125 group group-hover:scale-100 hover:scale-100 hover:brightness-50 group-hover:brightness-50 transition-all duration-500 ease-linear"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Image
                      src={post.author.avatar.url}
                      alt={post.author.name}
                      width={25}
                      height={24}
                      priority
                    />

                    <small className="flex items-center tracking-widest text-[#969696]">
                      {post.author.name}
                    </small>
                  </div>
                  <h3 className="font-semibold text-[#c7c6c6] text-xl md:text-2xl font-mono">
                    {post.title}
                  </h3>
                  <p className="text-[#8a8989] leading-relaxed">
                    {post.description}
                  </p>
                  <Link href={`/post/${post.slug}`} passHref prefetch={false}>
                    <a className=" w-fit ">
                      <div className="flex group group-hover items-center text-neutral-500 gap-2 hover:text-gray-400 hover:gap-4 transition-all duration-200">
                        <span>Read</span>
                        <BsArrowRight size={20} />
                      </div>
                    </a>
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
          <div className="overflow-x-hidden">
            <Link href="/blog" passHref>
              <a>
                <motion.div
                  initial={{ y: '30%', scale: 0, opacity: 0 }}
                  whileInView={{ y: 0, scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <button className="transition-all shadow-lg duration-700 ease-linear bg-gradient-to-r to-blue-500 via-purple-400 from-blue-400 bg-size-200 bg-pos-100 hover:bg-pos-0 text-gray-300 hover:text-gray-100 w-5/6 my-4 mx-auto py-2 md:py-3 rounded-3xl flex items-center justify-center ">
                    View All
                  </button>
                </motion.div>
              </a>
            </Link>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="relative top-0 md:top-20 lg:sticky ">
            <Newsletter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
