const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: { type: String },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
});

module.exports = mongoose.model("projects", ProjectSchema);
