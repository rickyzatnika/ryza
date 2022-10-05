import { GraphQLClient, gql } from 'graphql-request';
import Apikey from '../../API/Apikey';

export default function Projects({ project }) {
  return (
    <>
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
    },
  };
}

export async function getStaticPaths() {
  const { projects } = await graphcms.request(SLUGLIST);
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: 'blocking',
  };
}
