const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: String!
    name: String!
    email: String!
  }

  type Project {
    id: String!
    name: String!
    users: [User]!
  }

  type Query {
    getAllUsers: [User]!
    getAllProjects: [Project!]
  }
`;

module.exports = typeDefs;
