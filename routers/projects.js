const express = require("express");
const app = express();
const router = express.Router();
var fs = require("fs");
var projects = require("../models/projects");
app.use(cors());
router.get("/", async (req, res) => {
  //   res.send("helloworld");
  // });

  try {
    projects = await projects.find();
    res.json(projects);
  } catch (err) {
    console.error(err);
  }
});

router.post("/", (req, res) => {
  const project = new projects({
    title: "peoo",
  });

  project.save();

  res.send("hellowor");
});

module.exports = router;
