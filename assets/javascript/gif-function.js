// This is an array of strings using variable
var actors = ["will smith", "bruce lee", "kevin hart", "samuel jackson", "denzel washington", "morgan freeman", "johnny depp", "halle berry", "scarlett johansson", "chris hemsworth", "tom holland"]

// This is a button that catches when the user clicks on a button
$("button").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    //Its a method using .ajax to pass a URL from the query in the variable and using method to GET the information
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    //Tells the computer not to run it yet but to hold on to it when the computer get the response back
    .then(function(response) {
        var results = response.data;
        
        //Grab the image URL from the response data 
        var imageUrl = response.data.image_original_url;

        //Create a new image tag (floating)
        var catImage = $("<img>");

        //Defining the attribute and display the right image and alt tag is use for the description of the picture
        catImage.attr("src", imageUrl);
        catImage.attr("alt", "cat image");

        //Add it as the first child of the id images but if you did append it will go to the bottom
        $("#images").prepend(catImage);
      });
  });


