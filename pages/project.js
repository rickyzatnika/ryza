import Image from 'next/image';
import Link from 'next/link';
import { GraphQLClient, gql } from 'graphql-request';
import Apikey from '../API/Apikey';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Ryza - Project</title>
        <meta
          name="description"
          content="Ricky zatnika project showcase - This is my project sample, I built this blog using NextJs, TailwindCSS and GraphCMS"
        />
        <meta
          name="keywords"
          content="Company profile web, Portfolio Web, Frontend Developer, Web Developer, Personal Blog Website, Blog website, Nextjs Blog, GraphCMS"
        />
        <meta name="author" content="Ricky Zatnika" />
        <meta property="og:title" content="Ryza Project Showcase" />
        <meta property="og:url" content="https://ryza.inkara.id/" />
      </Head>
      <section>
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            damping: 50,
            delay: 0.3,
          }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-8 md:grid-cols-2 lg:grid-cols-2 justify-center pt-24 md:pt-40 px-6 md:px-10"
        >
          {projects.map((project) => (
            <div key={project.slug}>
              <div className="w-full shadow-xl bg-black/30 shadow-black/20  overflow-hidden leading-relaxed">
                <div className="w-full overflow-hidden">
                  <Image
                    src={project.projectImage.url}
                    alt={project.title}
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                    className=" transition duration-300 scale-90"
                  />
                </div>
                <div className="py-4 px-6">
                  <h3 className="mt-2 leading-tight text-slate-700 text-xl font-mono font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-[#838383] pt-4  px-2 text-md">
                    {' '}
                    {project.description}
                  </p>
                </div>
                <div className="pb-4 mb-2 text-center">
                  <Link href={project.demoUrl} passHref prefetch={false}>
                    <a target="blink">
                      <button
                        type="button"
                        className="py-2 px-4 bg-indigo-400 mt-4 rounded-lg hover:bg-indigo-500 text-sm lg:text-md shadow-lg text-gray-100 hover:text-gray-200 transition-all duration-200"
                      >
                        Visit Site
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}

const QUERY = gql`
  query {
    projects {
      id
      title
      description
      slug
      projectImage {
        url
        width
        height
      }
      demoUrl
      sourceUrl
    }
  }
`;

const graphcms = new GraphQLClient(Apikey);
export async function getStaticProps() {
  const { projects } = await graphcms.request(QUERY);

  return {
    props: {
      projects,
    },
    revalidate: 1,
  };
}
