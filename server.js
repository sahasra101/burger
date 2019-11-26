var express = require("express");
var app = express();
var orm = require("./config/orm.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/index", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    res.render("index", { UEburger: data }, {Eburger: data});
  });
});

// display the uneaten (UE) burgers in left side of index frontend.
orm.selectUEburger("burger_name", "burgers", "devoured");

// changes boolean from true to false when devoured.
orm.devourBurger("devoured", "burgers", "burger_name");

// displays eaten burger in right side of index frontend.
orm.selectEburger("burger_name", "burgers", "devoured");

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  