const mongoose = require("mongoose");
const User = require("../models/user");
const Project = require("../models/project");

const resolvers = {
  Query: {
    getAllUsers: async () => {
      const allUsers = await User.find();
      return allUsers;
    },
    getAllProjects: async () => {
      const allProjects = await Project.find().populate("users tasks");
      console.log("allProjects", allProjects);
      return allProjects;
    },
    getUserById: async (parent, args) => {
      const userById = await User.findOne({ _id: args.id });
      return userById;
    },
  },
  Project: {
    users: async (parent) => {
      return parent.users;
    },
    tasks: async (parent) => {
      return parent.tasks;
    },
  },
};

module.exports = resolvers;
