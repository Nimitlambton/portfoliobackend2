// title: "MemeNator",
// projectId: 1,
// desc:
//   "This is my first project, that is build on React.js. It can be used to generate cool meme and edit images",
// repolink: "https://github.com/Nimitlambton/MN",
// DeployedLink: "https://meme-nator.netlify.app",
// thumbnail: base64_encode(__dirname + "/Assets/freelance.png"),
// status: "completed",

var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
  title: { type: String },
  // projectId: { type: Int },
  desc: { type: String },
  repolink: { type: String },
  DeployedLink: { type: String },
  thumbnail: { type: String },
  status: { type: String },
});

module.export = mongoose.model("projectschema", projectSchema);
