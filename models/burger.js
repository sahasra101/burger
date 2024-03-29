var orm = require("../config/orm.js");
// Import the ORM to create functions that will interact with the database.

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(newBurger, cb) {
    orm.create(newBurger, function(res) {
      cb(res);
    });
  },
  update: function(condition, cb) {
    orm.update(condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;