const express = require("express");
const app = express();
const router = express.Router();
var fs = require("fs");
var projects = require("../models/projects");
const cors = require("cors");
app.use(cors());

router.get("/", async (req, res) => {
  try {
    var project = await projects.find();
    res.send(project);
  } catch (err) {
    console.error(err);
  }
});

router.post("/", (req, res) => {
  console.log(req.body.title);
  const project = new projects({
    title: req.body.title,
    projectId: req.body.projectId,
    desc: req.body.desc,
    repolink: req.body.repolink,
    DeployedLink: req.body.DeployedLink,
    thumbnail: req.body.thumbnail,
    status: req.body.status,
  });
  project.save();
  res.send("hellowor");
});

module.exports = router;
