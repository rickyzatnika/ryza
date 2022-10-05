import { gql, GraphQLClient } from 'graphql-request';
import Apikey from '../API/Apikey';

import * as dotenv from 'dotenv';
dotenv.config();

export const getPostsAndProjects = async () => {
  const endpoint = Apikey;
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
          avatar {
            url
          }
        }
      }
      projects(first: 4, orderBy: updatedAt_DESC) {
        title
        description
        slug
        demoUrl
        sourceUrl
        projectImage {
          url
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getProjectItems = async () => {
  const endpoint = Apikey;
  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
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

  return await graphQLClient.request(query);
};

export const getProjectItem = async (slug) => {
  const endpoint = Apikey;
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
  const endpoint = Apikey;
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
