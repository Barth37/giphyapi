var makes = ["Ferrari", "Lambourghini", "Porsche"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayCarImages() {

  var cars = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cars + "&api_key=W3E3i369d5ZPF5B3sDPCa4ggJDSlYf17&limit=10";

  // Creates AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var data = response.data;
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].url);
      // create an img
      var img = $("<img>");
      // add src attribute
      img.attr("src", data[i].images.fixed_height_still.url);
      // add data-still attr
      img.attr("data-still", data[i].images.fixed_height_still.url);
      // add data-animate attr
      img.attr("data-animate", data[i].images.fixed_height.url);
      // append to DOM
      $("#cars-view").append(img);
    }
    $("#cars-view").text(JSON.stringify(response.data.url));
    
   
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

    // This function handles events where the add super car make button is clicked
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