import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import request from 'graphql-request';
import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Apikey from '../API/Apikey';
import Head from 'next/head';

const fetchData = (endpoint, query, variables) =>
  request(endpoint, query, variables);

export default function Blog({ posts }) {
  const router = useRouter();
  const ref = useRef();
  const [skip, setSkip] = useState(0);
  const { data, error } = useSWR(
    [
      Apikey,
      `
    query getPaginateBlogs($skip: Int) {
      postsConnection(orderBy: updatedAt_DESC, first: 4, skip: $skip) {
        edges {
          node {
            title
            slug
            description
            coverPhoto {
              url
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
        }
      }
    }
    `,
      skip,
    ],
    (endpoint, query) => fetchData(endpoint, query, { skip }),
    { initialData: posts, revalidateOnFocus: true }
  );
  return (
    <>
      <Head>
        <title>Ryza - Blogpage</title>
        <meta
          name="description"
          content="Javascript is the programming language that makes the internet work. More specifically, Javascript is a lightweight, dynamic programming language that can target both oriented and functional programming."
        />
        <meta
          name="keywords"
          content="Ryza blog, Javascript is the programming language , Portfolio Web, Ryza Portfolio, Frontend Developer, Web Developer, Personal Blog Website"
        />
      </Head>
      <section>
        <div className="flex sm:hidden gap-2 pt-[4rem] px-6 ">
          <Link href="/" passHref prefetch={false}>
            <a className="italic text-gray-500">home / </a>
          </Link>
          <Link href="/blog" passHref prefetch={false}>
            <a
              className={`${
                router.pathname === '/blog'
                  ? 'text-gray-600 italic font-semibold'
                  : ''
              }`}
            >
              blogpage
            </a>
          </Link>
        </div>
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            damping: 50,
            delay: 0.2,
          }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 pt-[3rem] sm:pt-40"
        >
          {data?.postsConnection?.edges.map((item, i) => (
            <div key={i} className="py-6">
              <div className="md:col-span-3 px-4 shadow-xl shadow-black/20 py-2 group scale-95">
                <div className="flex flex-col">
                  <Link
                    href={`/post/${item.node.slug}`}
                    passHref
                    prefetch={false}
                  >
                    <a className="text-xl mb-4 sm:text-2xl md:text-2xl font-mono blogTitle font-bold capitalize text-slate-800 hover:text-gray-600 transition-colors duration-200">
                      {item.node.title}
                    </a>
                  </Link>
                  <div className="overflow-hidden group">
                    <Link
                      href={`/post/${item.node.slug}`}
                      passHref
                      prefetch={false}
                    >
                      <a>
                        <Image
                          src={item.node.coverPhoto.url}
                          alt={item.node.slug}
                          width={75}
                          height={50}
                          layout="responsive"
                          className="brightness-[40%] group group-hover:scale-125 group-hover:brightness-[100%] hover:brightness-[100%] hover:scale-125 transition-all duration-1000  ease-linear cursor-pointer"
                          priority
                        />
                      </a>
                    </Link>
                  </div>
                  <p className="text-[#7e7d7d] leading-relaxed mt-2 p-2 ">
                    {item.node.description}
                  </p>
                </div>
                <div className="mt-4 py-4 relative ">
                  <Link
                    href={`/post/${item.node.slug}`}
                    passHref
                    prefetch={false}
                  >
                    <a>
                      <button
                        className=" capitalize text-md group group-hover  text-[#7e7d7d] hover:text-gray-300 flex gap-1 hover:gap-4 transition-all duration-300 items-center "
                        type="button"
                      >
                        read more
                        <AiOutlineArrowRight />
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div>
            <div className="flex justify-between items-center p-8">
              <div className="flex items-center gap-4 cursor-pointer justify-center text-[#7e7d7d]  group group-hover:text-gray-300 group-hover:left-0 hover:text-gray-300">
                <HiArrowNarrowLeft className="group relative left-2 group-hover:left-0 hover:left-0 transition-all duration-150" />
                <button
                  type="button"
                  disabled={!data?.postsConnection?.pageInfo?.hasPreviousPage}
                  onClick={() => {
                    setSkip(skip - 4);
                  }}
                  className="cursor-pointer group"
                >
                  previous
                </button>
              </div>
              <div className="flex items-center gap-4 cursor-pointer justify-center text-[#7e7d7d]  group group-hover:text-gray-300 group-hover:right-0 hover:text-gray-300">
                <button
                  type="button"
                  disabled={!data?.postsConnection?.pageInfo?.hasNextPage}
                  onClick={() => {
                    setSkip(skip + 4);
                  }}
                  className="cursor-pointer group"
                >
                  next
                </button>
                <HiArrowNarrowRight className="group relative right-2 group-hover:right-0 hover:right-0 transition-all duration-150" />
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-[#7e7d7d]">
              Total Pages : {data?.postsConnection.pageInfo.pageSize}
            </div>
          </div>
          {error && (
            <div className="text-red-600 animate-pulse">Failed to load</div>
          )}
        </motion.div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetchData(
    Apikey,
    `
    query getPaginateBlogs {
      postsConnection(orderBy: updatedAt_DESC, first: 4, skip: 0) {
        edges {
          node {
            title
            slug
            description
            coverPhoto {
              url
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
        }
      }
    }
    `
  );
  return {
    props: {
      posts: data,
    },
    revalidate: 1,
  };
};
