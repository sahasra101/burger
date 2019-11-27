var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(data);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  // console.log(req);
  var newBurger = req.body.name;
  console.log(newBurger);
  burger.create(newBurger,
  function(result) {
    // Send back the ID of the new burger
    res.json({result});
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = req.params.id;
  burger.update(condition,
      function(result) {
        res.json({result});
      });
    });

// Export routes for server.js to use.
module.exports = router;
