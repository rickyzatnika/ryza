import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import request from 'graphql-request';
import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { BsCalendarDate } from 'react-icons/bs';
import { FcBusinessman } from 'react-icons/fc';
required('dotenv').config();

const fetchData = (endpoint, query, variables) =>
  request(endpoint, query, variables);

export default function Blog({ posts }) {
  const router = useRouter();
  const ref = useRef();
  const [skip, setSkip] = useState(0);
  const { data, error } = useSWR(
    [
      process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
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
      <section>
        <div className="flex sm:hidden gap-2 pt-[4rem] px-6 ">
          <Link href="/" passHref>
            <a className="italic text-gray-500">home / </a>
          </Link>
          <Link href="/blog" passHref>
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
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 pt-[3rem] sm:pt-40"
        >
          {data?.postsConnection?.edges.map((item) => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 py-6">
              <div className="md:col-span-1  items-center p-3 leading-relaxed">
                <span className="flex items-center gap-2 mb-3">
                  <FcBusinessman size={22} />
                  <p className="text-gray-500 text-sm">Ricky</p>
                </span>
              </div>
              <div className="md:col-span-3 px-4 shadow-lg py-2">
                <div className="flex flex-col">
                  <Link href={`/post/${item.node.slug}`} passHref>
                    <a className="text-xl mb-4 sm:text-2xl md:text-2xl blogTitle font-bold capitalize text-slate-800 hover:text-gray-600 transition-colors duration-200">
                      {item.node.title}
                    </a>
                  </Link>
                  <div className="overflow-hidden">
                    <Link href={`/post/${item.node.slug}`} passHref>
                      <a>
                        <Image
                          src={item.node.coverPhoto.url}
                          alt={item.node.slug}
                          width={75}
                          height={50}
                          layout="responsive"
                          className="hover:scale-125 transition-all duration-300 cursor-pointer"
                          priority
                        />
                      </a>
                    </Link>
                  </div>
                  <p className="text-gray-500 leading-relaxed mt-2 p-2 ">
                    {item.node.description}
                  </p>
                </div>
                <div className="mt-4 py-4 relative">
                  <Link href={`/post/${item.node.slug}`} passHref>
                    <a>
                      <button
                        className=" capitalize text-md text-gray-500 hover:text-gray-700 flex gap-1 hover:gap-4 transition-all duration-300 items-center "
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
              <div className="flex items-center gap-2 cursor-pointer justify-center text-gray-500">
                <HiArrowNarrowLeft />
                <button
                  type="button"
                  disabled={!data?.postsConnection?.pageInfo?.hasPreviousPage}
                  onClick={() => {
                    setSkip(skip - 4);
                  }}
                  className="cursor-pointer "
                >
                  previous
                </button>
              </div>
              <div className="flex items-center gap-2 cursor-pointer justify-center text-gray-500">
                <button
                  type="button"
                  disabled={!data?.postsConnection?.pageInfo?.hasNextPage}
                  onClick={() => {
                    setSkip(skip + 4);
                  }}
                  className="cursor-pointer "
                >
                  next
                </button>
                <HiArrowNarrowRight />
              </div>
            </div>
            <div className="mt-8 text-center">
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
    process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
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
  };
};
