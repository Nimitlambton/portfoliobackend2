var mongoose = require("mongoose");
//var projectSchema = new mongoose.Schema();

const project = new mongoose.Schema({
  title: { type: String, required: true },
  projectId: { type: Number },
  desc: { type: String },
  repolink: { type: String },
  DeployedLink: { type: String },
  thumbnail: { type: String },
  status: { type: String },
});

module.exports = mongoose.model("project", project);
