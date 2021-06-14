const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

app.get("/jumbtron", (req, res) => {
  res.json({
    h1: "Hi 👋 , Thanks for Stoping by",
    p: "Currently learning MERN Stack & ReactNative ",
    p2:
      "  I am Nimit pamnani ✨ Mobile & web developer 💻 || Amateur Photographer 📸 . ",
  });
});

app.get("/projects", (req, res) => {
  res.json({
    projectsList: [
      {
        title: "MemeNator12345",
        projectId: 1,
        desc:
          "This is my first project, that is build on React.js. It can be used to generate cool meme and edit images",
        repolink: "https://github.com/Nimitlambton/MN",
        DeployedLink: "https://meme-nator.netlify.app",
        thumbnail: `base64_encode(    "https://80ded86b-e216-4316-a39b-300f1e8a59ae.netlify.app/.netlify/large-media")`,
        status: "completed",
      },
    ],
  });
});

const port = process.env.PORT || 2004;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
