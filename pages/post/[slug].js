import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GraphQLClient, gql } from 'graphql-request';
import { BsFillArrowLeftCircleFill, BsCalendarDate } from 'react-icons/bs';
import { FcBusinessman } from 'react-icons/fc';
import { motion } from 'framer-motion';
import * as dotenv from 'dotenv';
dotenv.config();

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      title
      slug
      description
      coverPhoto {
        url
      }
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;

export const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: 'blocking',
  };
}

export default function Post({ post }) {
  return (
    <>
      <section>
        <div className="relative pt-20 w-screen md:w-[75%] flex flex-col justify-center m-auto px-8 md:px-20 space-y-2">
          <h1>{post.title}</h1>
          <p className="py-4 text-gray-500">{post.description}</p>
          <div className="">
            <Image
              src={post.coverPhoto.url}
              alt={post.slug}
              width={75}
              height={50}
              layout="responsive"
              priority
            />
          </div>
          <div className="text-sm flex items-center gap-1 pb-8">
            <Image
              src={post.author.avatar.url}
              alt={post.author.name}
              width={35}
              height={35}
            />{' '}
            <p>{post.author.name}</p>
            <div className="flex">
              <p>{post.updateAt}</p>
            </div>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: post.content.html }}
            className="space-y-4 leading-relaxed max-w-3xl"
          />

          <motion.div
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.8 }}
            className="relative left-0 bottom-0 pt-10 w-fit"
          >
            <Link href="/blog" passHref>
              <a>
                <div className="flex gap-2 items-center hover:text-gray-800">
                  <BsFillArrowLeftCircleFill size={24} />
                  <span className="text-inherit text-sm">back</span>
                </div>
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
