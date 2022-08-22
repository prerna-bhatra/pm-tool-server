const mongoose = require("mongoose");
// const users = mongoose.model("users");

const users = require("../models/user");
const projects = require("../models/project")

const resolvers = {
  Query: {
    getAllUsers: async() => {
      const allUsers =await users.find();
      // console.log("allUsers", allUsers);
      return allUsers;
    },
    getAllProjects:async()=>{
      const allProjects = await projects.find()
      
      
      console.log("--->allProjects",allProjects);
      return allProjects
    },
    // User : async(parent)=>{
    //   console.log("parent",parent);
    //   const user = await users.find({id:parent.id})
    //   console.log("user==>",user);
    // }
  },
};

module.exports = resolvers;
