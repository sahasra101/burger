// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".updateBurger").on("click", function(event) {
        event.preventDefault();
      var id = $(this).data("id");
      console.log(id);
  
      var devouredBurger = {
        devoured: id
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/"+id , {
        type: "PUT",
        data: devouredBurger
      }).then(function() {
        //   console.log("id in prior CL now devoured");
        // Reload the page to get the updated list
          location.reload();
        });
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurg = {
        name: $("#newBurger").val().trim()
      };
      console.log(newBurg);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
      }).then(
        function() {
        //   console.log("added new burger");
          // Reload the page to get the updated list
          location.reload();
        });
    });
  });