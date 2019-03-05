var makes = ["Ferrari", "Lambourghini", "Porsche"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayCarImages() {

  var make = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + make + "&api_key=W3E3i369d5ZPF5B3sDPCa4ggJDSlYf17&limit=10";

  // Creates AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    
    $("#cars-view").text(JSON.stringify(response.image));
    
   
    // YOUR CODE GOES HERE!!!

  });
}

function renderButtons() {

    // Deletes the car prior to adding new cars
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Loops through the array of movies
    for (var i = 0; i < makes.length; i++) {

      // Then dynamicaly generates buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adds a class of movie to our button
      a.addClass("make");
      // Added a data-attribute
      a.attr("data-name", makes[i]);
      // Provided the initial button text
      a.text(makes[i]);
      // Added the button to the buttons-view div
      $("#buttons-view").append(a);
    }
  }

    // This function handles events where the add movie button is clicked
    $("#add-car").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var make = $("#car-input").val().trim();

        // The movie from the textbox is then added to our array
        makes.push(make);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();

        });

        // Adding click event listeners to all elements with a class of "movie"
        $(document).on("click", ".make", displayCarImages);

        // Calling the renderButtons function to display the intial buttons
        renderButtons();