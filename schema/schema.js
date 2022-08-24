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
    status: String
    category: String
    description: String
    start: String
    end: String
    project: Project!
    assignee: User!
    assigneedBy: User!
  }

  type Query {
    getAllUsers: [User]!
    getAllProjects: [Project!]
    getAllTasks: [Task]!
    getUserById(id: String!): User!
    getProjectById(id: String): Project!
    getTaskById(id: String): Task!
  }
`;

module.exports = typeDefs;

// tasks: [Task]!
