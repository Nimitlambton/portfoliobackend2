const express = require("express");

const app = express();
const router = express.Router();
const projects = require("../models/projects");
var fs = require("fs");
router.get("/", async (req, res) => {
  res.json({
    projectsList: [
      {
        title: "MemeNator",
        projectId: 1,
        desc:
          "This is my first project, that is build on React.js. It can be used to generate cool meme and edit images",
        repolink: "https://github.com/Nimitlambton/MN",
        DeployedLink: "https://meme-nator.netlify.app",
        thumbnail: base64_encode("./Assets/freelance.png"),
        status: "completed",
      },
      {
        title: "Personal portfolio",
        status: "completed",
        projectId: 2,
        desc:
          "This is react based responsive Web App , used to showcase all the projects that are created till now ",
        repolink: "https://github.com/Nimitlambton/NimitpamnaniProfolio",
        DeployedLink: "https://nimitpamnani.rocks/#home",

        //this function passes  url of a image that are kept in assest folder  which further converts image into base64 data.
        thumbnail: base64_encode("./Assets/portfolio.png"),
      },
      {
        title: "The Weather App",
        projectId: 3,
        desc:
          "This is weatherApp based on React.js , it can be used to fetch weather of any City in the world 🌏 ",
        repolink: "https://github.com/Nimitlambton/weatherApp",

        //this function passes  url of a image that are kept in assest folder  which further converts image into base64 data.
        thumbnail: base64_encode("./Assets/weather.png"),
        DeployedLink: "https://nimit-theweatherapp.netlify.app/",
        status: "completed",
      },
      {
        title: "MemeNator",
        projectId: 4,
        desc: "This is my first project, that is build on React.js",
        thumbnail: "",
        repolink: "",
        status: "",
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

module.exports = router;
