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
    tasks: [Task]!
  }

  type Task {
    id: String!
    name: String!
    assignee: User!
    assigneedBy: User!
  }

  type Query {
    getAllUsers: [User]!
    getAllProjects: [Project!]
    getUserById(id: String!): User!
  }
`;

module.exports = typeDefs;
