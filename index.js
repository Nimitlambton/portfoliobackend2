const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
var fs = require("fs");
var projects = require(__dirname + "/routers/projects");
var mongoose = require("mongoose");

app.use(cors());

//app.use(express.json());

//conntect database
mongoose
  .connect(
    "mongodb+srv://nimit:swager123@cluster0.isauo.mongodb.net/todos?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
    }
  )
  .catch((err) => {
    console.log(err);
  });

const uri =
  "mongodb+srv://nimit:Swager@123@cluster0.isauo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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
        title: "MemeNator",
        projectId: 1,
        desc:
          "This is my first project, that is build on React.js. It can be used to generate cool meme and edit images",
        repolink: "https://github.com/Nimitlambton/MN",
        DeployedLink: "https://meme-nator.netlify.app",
        thumbnail: base64_encode(__dirname + "/Assets/freelance.png"),
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
        thumbnail: base64_encode(__dirname + "/Assets/portfolio.png"),
      },
      {
        title: "The Weather App",
        projectId: 3,
        desc:
          "This is weatherApp based on React.js , it can be used to fetch weather of any City in the world 🌏 ",
        repolink: "https://github.com/Nimitlambton/weatherApp",

        //this function passes  url of a image that are kept in assest folder  which further converts image into base64 data.
        thumbnail: base64_encode(__dirname + "/Assets/weather.png"),
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

app.use("/testing", projects);

//function coverts image that are kept in Assests folder data top base64
function base64_encode(file) {
  //  read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string

  var abc = new Buffer(bitmap).toString("base64");

  return "data:image/png;base64," + abc;
}

const port = process.env.PORT || 8003;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
