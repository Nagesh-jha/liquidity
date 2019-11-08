let express = require("express");
let app = express();
const dotenv = require("dotenv").config();

console.log("##########################################");
console.log(dotenv.parsed.NODE_PORT);
//const port = dotenv.parsed.NODE_PORT || 5555; // Setup server port
const port = process.env.PORT || 8080; // Setup server port

const DB_URL = dotenv.parsed.DB_URL;

console.log("DB_URL: ", DB_URL);

app.use(function(req, res, next) {
  req.setTimeout(0);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
  })
);
// Import Mongoose and create connection
let mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("connection succesful"))
  .catch(err => console.error(err));

const apiRoutes = require('./app/routes/api-routes');
app.use("/api", apiRoutes);

// Launch app to listen to specified port
var server = app.listen(port, function() {
  console.log("Running RDOP Server on port " + port);
});

module.exports = server;
