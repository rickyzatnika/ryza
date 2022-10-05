import Image from 'next/image';
import Link from 'next/link';
import { GraphQLClient, gql } from 'graphql-request';
required('dotenv').config();

export default function Projects({ projects }) {
  return (
    <>
      <section>
        <div className="w-full grid grid-cols-2 gap-20 lg:grid-cols-2 items-center justify-center pt-40 px-40">
          {projects.map((project) => (
            <div key={project.slug}>
              <Link href={`/project/${project.slug}`} passHref>
                <a>
                  <div className="w-8/6 overflow-hidden">
                    <Image
                      src={project.projectImage.url}
                      alt={project.title}
                      width={75}
                      height={50}
                      layout="responsive"
                      priority
                      className="hover:scale-110 transition duration-300"
                    />
                    <h3 className="mt-4 text-md">{project.title}</h3>
                    <p className="text-gray-500 py-2"> {project.description}</p>
                  </div>
                </a>
              </Link>
              <div className="flex items-center justify-center">
                <Link href={project.demoUrl}>
                  <a target="blink">
                    <button
                      type="button"
                      className="py-2 px-4 bg-blue-400 mt-4 rounded-lg hover:bg-blue-500 text-sm shadow-lg text-gray-100 hover:text-gray-200 hover:scale-105 transition-all duration-200"
                    >
                      Visit Site
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
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

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT);
export async function getStaticProps() {
  const { projects } = await graphcms.request(QUERY);

  return {
    props: {
      projects,
    },
    revalidate: 1,
  };
}
