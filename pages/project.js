import Image from 'next/image';
import Link from 'next/link';
import { GraphQLClient, gql } from 'graphql-request';

export default function Projects({ projects }) {
  return (
    <>
      <section>
        <div className="w-full flex flex-col items-center justify-center">
          {projects.map((project) => (
            <div key={project.id}>
              <h1>{project.title}</h1>
              <Link href={`/project/${project.slug}`}>
                <a>
                  <div className="w-8/6 ">
                    <Image
                      src={project.projectImage.url}
                      alt={project.title}
                      width={100}
                      height={75}
                      layout="responsive"
                      priority
                    />
                  </div>
                </a>
              </Link>
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
