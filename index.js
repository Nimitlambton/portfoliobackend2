const express = require("express"); //import  express server

var bodyParser = require("body-parser"); //body parser is used to utilize json
//
const cors = require("cors"); //cross-origin
const app = express(); //init Express
var fs = require("fs"); //file system
var projects = require(__dirname + "/routers/projects");
var mongoose = require("mongoose"); //mongoose to use mongodb with ease

app.use(cors());

//to get request from the client with more space
var jsonParser = bodyParser.json({
  limit: 1024 * 1024 * 10,
  type: "application/json",
});

var urlencodedParser = bodyParser.urlencoded({
  extended: true,
  limit: 1024 * 1024 * 10,
  type: "application/x-www-form-urlencoded",
});

//using this is my server
app.use(jsonParser);
app.use(urlencodedParser);
app.use(express.json());

//conntect database
mongoose
  .connect(
    "mongodb+srv://nimit:swager123@cluster0.isauo.mongodb.net/portfolio?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      wtimeout: 25,
    }
  )
  .catch((err) => {
    console.log(err);
  });

//jumbtron content
app.get("/jumbtron", (req, res) => {
  res.json({
    h1: "Hi 👋 , Thanks for Stoping by  😀",
    p: `
    
    I became interested in software development when I went high school, and have spent every spare minute I could find exploring web-development and learning new programming languages on CodeAcademy.
    
    `,
    p2:
      "  My name Nimit Pamnani ✨ i am full-stack web developer 💻 || Amateur Photographer 📸.",
  });
});

//to modularize  routes  with MVC , this route is kept in projects /MODEL
app.use("/testing", projects);

//function coverts image that are kept in Assests folder data top base64
function base64_encode(file) {
  //  read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string

  var abc = new Buffer(bitmap).toString("base64");

  return "data:image/png;base64," + abc;
}

//this is done in last to initiate the server

const port = process.env.PORT || 1004;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
