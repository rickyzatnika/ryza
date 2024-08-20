import { GraphQLClient, gql } from 'graphql-request';
import Apikey from '../../API/Apikey';
import Head from 'next/head';

export default function Projects({ project, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`Project showcase - ${project.description}`}
        />
        <meta
          name="keywords"
          content={`Company Profile, Portfolio Web ,${project.slug}`}
        />
        <meta
          property="og:title"
          content={`${title} - ${project.description}`}
        />
      </Head>
      <section>
        <div>
          <h1>{project.title}</h1>
        </div>
      </section>
    </>
  );
}

const graphcms = new GraphQLClient(Apikey);
const QUERY = gql`
  query Projects($slug: String!) {
    project(where: { slug: $slug }) {
      description
      slug
      title
      projectImage {
        url
      }
      demoUrl
      sourceUrl
    }
  }
`;

export const SLUGLIST = gql`
  {
    projects {
      slug
    }
  }
`;
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const project = data.project;

  return {
    props: {
      project,
      title: `Project - ${params.slug}`,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { projects } = await graphcms.request(SLUGLIST);
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}
