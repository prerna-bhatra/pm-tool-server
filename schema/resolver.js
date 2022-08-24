const mongoose = require("mongoose");
const User = require("../models/user");
const Project = require("../models/project");
const Task = require("../models/task");

const resolvers = {
  Query: {
    getAllUsers: async () => {
      const allUsers = await User.find();
      return allUsers;
    },
    getAllProjects: async () => {
      const allProjects = await Project.find().populate("users");
      // console.log("allProjects", allProjects);
      return allProjects;
    },
    getUserById: async (parent, args) => {
      const userById = await User.findOne({ _id: args.id });
      return userById;
    },
    getProjectById: async (parent, args) => {
      const projectById = await Project.findOne({ _id: args.id }).populate(
        "users"
      );

      return projectById;
    },
    getTaskById: async (parent, args) => {
      const taskById = await Task.findOne({ _id: args.id }).populate(
        "assignee assigneedBy"
      );

      return taskById;
    },
  },
  Project: {
    users: async (parent) => {
      return parent.users;
    },
    tasks: async (parent) => {
      const projectTasks = await Task.find({ project: parent._id }).populate(
        "assignee assigneedBy"
      );
      

      return projectTasks;
    },
  },
};

module.exports = resolvers;
