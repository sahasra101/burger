// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".updateBurger").on("click", function(event) {
      var id = $(this).data("id");
      console.log(id);
  
      var devouredBurger = {
        devoured: id
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/id" , {
        type: "PUT",
        data: devouredBurger
      }).then(
        function() {
          console.log("burger with ID devoured: "+id);
          location.reload();
        }
      );
    });
  
    $(".addBurger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var addBurger = {
        name: $("#newBurger").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: addBurger
      }).then(
        function() {
          console.log("added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });