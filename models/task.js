const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: { type: String },
  project:{
    type: Schema.Types.ObjectId,
    ref: "projects",
  },
  assignee: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  assigneedBy: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = mongoose.model("tasks", TaskSchema);
