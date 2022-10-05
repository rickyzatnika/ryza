import Link from 'next/link';
import React from 'react';
import Newsletter from './Newsletter';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Blog = ({ data }) => {
  return (
    <>
      <h2 className="text-[calc(1.8vh+1.8vw+1vmin)] text-center pb-20">
        Blogs
      </h2>
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
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col gap-4 leading-relaxed shadow-lg max-w-2xl py-10 px-4 md:px-10">
                  <Image
                    src={post.coverPhoto.url}
                    alt={post.title}
                    width={35}
                    height={20}
                    layout="responsive"
                  />
                  <span className="flex items-center gap-2 mb-3">
                    <Image
                      src={post.author.avatar.url}
                      alt={post.author.name}
                      width={25}
                      height={25}
                      priority
                    />
                    <small>{post.author.name}</small>
                  </span>
                  <h3 className="font-semibold text-xl md:text-2xl">
                    {post.title}
                  </h3>
                  <p className="text-neutral-500">{post.description}</p>
                  <Link href={`/post/${post.slug}`} passHref>
                    <a className=" w-fit ">
                      <div className="flex items-center text-neutral-500 gap-2 hover:text-gray-400 hover:gap-4 transition-all duration-200">
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
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 0.9 }}
                >
                  <button className="transition-all duration-500 bg-gradient-to-r to-blue-500 via-purple-400 from-blue-400 bg-size-200 bg-pos-100 hover:bg-pos-0 text-gray-300 hover:text-gray-100 w-5/6 my-4 mx-auto py-2 md:py-3 rounded-3xl flex items-center justify-center ">
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
