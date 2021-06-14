const express = require("express");
var fs = require("fs");
const serverless = require("serverless-http");
var cors = require("cors");
const app = express();
const router = express.Router();
var path = require("path");
app.use(cors());

router.get("/", (req, res) => {
  res.json({
    hello: "hi",
  });
});
router.get("/jumbtron", (req, res) => {
  res.json({
    h1: "Hi 👋 , Thanks for Stoping by",
    p: "Currently learning MERN Stack & ReactNative ",
    p2:
      "  I am Nimit pamnani ✨ Mobile & web developer 💻 || Amateur Photographer 📸 . ",
  });
});
router.get("/projects", (req, res) => {
  // console.log("helloworld");
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
      // {
      //   title: "Personal portfolio",
      //   status: "completed",
      //   projectId: 2,
      //   desc:
      //     "This is react based responsive Web App , used to showcase all the projects that are created till now ",
      //   repolink: "https://github.com/Nimitlambton/NimitpamnaniProfolio",
      //   DeployedLink: "https://nimitpamnani.rocks/#home",

      //   //this function passes  url of a image that are kept in assest folder  which further converts image into base64 data.
      //   thumbnail: base64_encode(
      //     __dirname +
      //       "Users/nimi/Desktop/javascriptws/reactproj/porfolinbackend/portfolioBack/src/Assests/portfolio.png"
      //   ),
      // },
      // {
      //   title: "The Weather App",
      //   projectId: 3,
      //   desc:
      //     "This is weatherApp based on React.js , it can be used to fetch weather of any City in the world 🌏 ",
      //   repolink: "https://github.com/Nimitlambton/weatherApp",

      //   //this function passes  url of a image that are kept in assest folder  which further converts image into base64 data.
      //   thumbnail: base64_encode(
      //     __dirname +
      //       "Users/nimi/Desktop/javascriptws/reactproj/porfolinbackend/portfolioBack/src/Assests/eg.png"
      //   ),
      //   DeployedLink: "https://nimit-theweatherapp.netlify.app/",
      //   status: "completed",
      // },
      // {
      //   title: "MemeNator",
      //   projectId: 4,
      //   desc: "This is my first project, that is build on React.js",
      //   thumbnail: "",
      //   repolink: "",
      //   status: "",
      // },
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

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
