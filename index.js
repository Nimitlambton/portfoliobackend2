const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
var fs = require("fs");
var projects = require(__dirname + "/routers/projects");
var mongoose = require("mongoose");

app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

var jsonParser = bodyParser.json({
  limit: 1024 * 1024 * 10,
  type: "application/json",
});

var urlencodedParser = bodyParser.urlencoded({
  extended: true,
  limit: 1024 * 1024 * 10,
  type: "application/x-www-form-urlencoded",
});
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

const uri =
  "mongodb+srv://nimit:Swager@123@cluster0.isauo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.get("/jumbtron", (req, res) => {
  res.json({
    h1: "Hi 👋 , Thanks for Stoping by",
    p: "Currently learning MERN Stack & ReactNative ",
    p2: (
      <ul>
        {" "}
        <li>
          {" "}
          " My name Nimit Pamnani ✨ i am web developer 💻 || Amateur
          Photographer 📸.|| I live in Toronto, city 🇨🇦 but i call many places
          my home."{" "}
        </li>{" "}
      </ul>
    ),
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

const port = process.env.PORT || 1004;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
