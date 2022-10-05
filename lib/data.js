import { gql, GraphQLClient } from 'graphql-request';

export const getPostsAndProjects = async () => {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    {
      authors {
        name
        avatar {
          url
        }
      }
      posts(first: 4, orderBy: updatedAt_DESC) {
        title
        slug
        description
        content {
          html
        }
        coverPhoto {
          url
        }
        author {
          name
        }
      }
      projects {
        title
        description
        slug
        projectImage {
          url
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getAllBlogs = async () => {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    {
      posts {
        id
        title
        slug
        description
        content {
          html
        }
        coverPhoto {
          url
        }
        author {
          name
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getProjectItems = async () => {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    {
      projects {
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

  return await graphQLClient.request(query);
};

// export const getPosts = async () => {
//   const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
//   const graphQLClient = new GraphQLClient(endpoint);
//   const query = gql`
//     {
//       posts {
//         title
//         slug
//         description
//         content {
//           html
//         }
//         coverPhoto {
//           url
//         }
//         author {
//           name
//         }
//       }
//     }
//   `;

//   return await graphQLClient.request(query);
// };

export const getProjectItem = async (slug) => {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    query getProjectItem($slug: String!) {
      projects(where: { slug: $slug }) {
        description
        slug
        title
        projectImage {
          url
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  return await graphQLClient.request(query, variables);
};

// export const getSkillItem = async (slug) => {
//   const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
//   const graphQLClient = new GraphQLClient(endpoint);
//   const query = gql`
//     query getSkill($slug: String!) {
//       skills(where: { slug: $slug }) {
//         title
//         slug
//         content
//         skillImage {
//           url
//           width
//           height
//         }
//       }
//     }
//   `;

//   const variables = {
//     slug,
//   };

//   return await graphQLClient.request(query, variables);
// };
// export const getSkillSlugs = async () => {
//   const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
//   const graphQLClient = new GraphQLClient(endpoint);
//   const query = gql`
//     {
//       skills {
//         slug
//       }
//     }
//   `;

//   return await graphQLClient.request(query);
// };

export const getProjectSlugs = async () => {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    {
      projects {
        slug
      }
    }
  `;

  return await graphQLClient.request(query);
};

// export const getPost = async (slug) => {
//   const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
//   const graphQLClient = new GraphQLClient(endpoint);
//   const query = gql`

//   `;

//   const variables = {
//     slug,
//   };

//   return await graphQLClient.request(query, variables);
// };
