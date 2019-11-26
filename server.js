var express = require("express");
var app = express();
var orm = require("./config/orm.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// display the uneaten (UE) burgers in left side of index frontend.
orm.selectUEburger("party_name", "parties");

// changes boolean from true to false when devoured.
orm.devourBurger("client_name", "clients");

// displays eaten burger in right side of index frontend.
orm.selectEburger("parties", "party_type", "grown-up");

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  