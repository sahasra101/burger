var express = require("express");
var app = express();
var orm = require("./config/orm.js");
app.use(express.static("public"));

// Sets up the Express App
// =============================================================

var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  