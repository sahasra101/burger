var connection = require("./connection.js");

// Object Relational Mapper (ORM)
// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    // select all burgers (id and burger_name)
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      //console.log("uneaten burgers: ");
     console.log(result);
     cb(result);
    });
  },

  create: function(newBurger, cb) {
    // var queryString = "INSERT INTO burgers (burger_name) VALUE (?)";
    var queryString = "INSERT INTO `burgers` (`burger_name`) VALUES (?)";
    connection.query(queryString, newBurger, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  update: function(condition, cb) {
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ? ";
    connection.query(queryString, condition,
      function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
  }
};

module.exports = orm;
