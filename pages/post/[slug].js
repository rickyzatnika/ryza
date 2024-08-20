import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GraphQLClient, gql } from 'graphql-request';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Apikey from '../../API/Apikey';

export const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export default function Post({ post, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.title} />
        <meta property="og:title" content={`${title} - ${post.description}`} />
      </Head>
      <section>
        <div className="relative pt-20 md:pt-24 w-screen md:w-[75%] flex flex-col justify-center m-auto px-8 md:px-20 space-y-2">
          <h1 className="font-mono text-[#cecece] text-2xl">{post.title}</h1>
          <div className="px-2">
            <Image
              src={post.coverPhoto.url}
              alt={post.slug}
              width={75}
              height={50}
              layout="responsive"
              priority
            />
          </div>

          <div
            className="space-y-4 antialiased leading-relaxed max-w-3xl font-[Nunito] text-lg text-neutral-500 tracking-wide"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />

          <motion.div
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.8 }}
            className="relative left-0 bottom-0 pt-10 w-fit"
          >
            <Link href="/blog" passHref>
              <a>
                <div className="flex gap-3 items-center text-[#989898] group group-hover:left-0  hover:text-gray-500">
                  <BsFillArrowLeftCircleFill
                    size={24}
                    className="relative left-2 group group-hover:left-0 transition-all duration-150"
                  />
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

const graphcms = new GraphQLClient(Apikey);

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

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;

  return {
    props: {
      post,
      title: `Postdetail - ${slug}`,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: 'blocking',
  };
}
