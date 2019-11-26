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
  selectUEburger: function(valOfCol, tableInput, colToSearch) {
    var queryString = "SELECT ? FROM ?? WHERE ? = false";
    connection.query(queryString, [valOfCol, tableInput, colToSearch], function(err, result) {
      if (err) throw err;
      console.log("uneaten burgers: "+result);
    });
  },

  insertBurger: function(valOfCol, tableInput, colToSearch) {
    var queryString = "INSERT ? FROM ?? WHERE ??";
    connection.query(queryString, [valOfCol, tableInput, colToSearch], function(err, result) {
      if (err) throw err;
      console.log("uneaten burgers: "+result);
    });
  },

  selectEburger: function(valOfCol, tableInput, colToSearch) {
    var queryString = "SELECT ? FROM ?? WHERE ? = true";
    console.log(queryString);
    connection.query(queryString, [valOfCol, tableInput, colToSearch], function(err, result) {
      if (err) throw err;
      console.log("eaten burgers: "result);
    });
  },
  devourBurger: function(valOfCol, tableInput, valOfCol) {
    var queryString =
      "UPDATE ? to true FROM ?? WHERE ? = burger_name";
    connection.query(
      queryString,
      [valOfCol, tableInput, valOfCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
