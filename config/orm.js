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
  selectBurger: function(valOfCol, valOfCol2, tableInput) {
    var queryString = "SELECT ?,? FROM ??";
    // select all burgers (id and burger_name)
    connection.query(queryString, [valOfCol, valOfCol2, tableInput], function(err, result) {
      if (err) throw err;
      console.log("uneaten burgers: "+result);
    });
  },

  insertBurger: function(tableInput, colToInput, newBurg) {
    var queryString = "INSERT INTO ?? (??) VALUE (?)";
    connection.query(queryString, [tableInput, colToInput, newBurg], function(err, result) {
      if (err) throw err;
      console.log("All burgers: "+result);
    });
  },

  devourBurger: function(tableInput, colToUpdate, valOfCol) {
    var queryString =
      "UPDATE ?? ?? = 1 WHERE ? = id";
    connection.query(
      queryString,
      [tableInput, colToUpdate, valOfCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
