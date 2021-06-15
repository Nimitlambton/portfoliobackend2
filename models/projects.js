var mongoose = require("mongoose");
var projectSchema = new mongoose.Schema();

//[
//   {
//     title: { type: String },
//     projectId: { type: Number },
//     desc: { type: String },
//     repolink: { type: String },
//     DeployedLink: { type: String },
//     thumbnail: { type: String },
//     status: { type: String },
//   },
//]

module.export = mongoose.model("project", projectSchema);
