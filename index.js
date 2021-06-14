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
        thumbnail: base64_encode(__dirname + "./Assets/eg/png"),
        status: "completed",
      },
    ],
  });
});

//function coverts image that are kept in Assests folder data top base64
function base64_encode(file) {
  //  read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string

  var abc = new Buffer(bitmap).toString("base64");

  return "data:image/png;base64," + abc;
}

const port = process.env.PORT || 2004;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
