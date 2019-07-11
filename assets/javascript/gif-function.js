// This is an array of strings using variable
var actors = ["will smith", "bruce lee", "kevin hart", "samuel jackson", "denzel washington", "morgan freeman", "johnny depp", "halle berry", "scarlett johansson", "chris hemsworth", "tom holland"]

// This is a button that catches when the user clicks on a button
$("button").on("click", function () {
    console.log(this)
    // The variable person which is equal (this) that converts the DOM element returned by this to a jQuery object 
    // and .attr is the method that gets the attribute value for the element 
    var person = $(this).attr("data-actor");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    //Its a method using .ajax to pass a URL from the query in the variable and using method to GET the information
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    //Tells the computer not to run it yet but to hold on to it when the computer get the response back
    .then(function (response) {
        console.log(response)
        $("#gifs-appear-here").empty()
        for (i = 0; i < 10; i++) {
            var gif = $("<img src='" + response.data[i].images.fixed_height.url + "'>")
            $("#gifs-appear-here").append(gif)
        }
    });
});

$(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-actor");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("img src", $(this).attr("data-animate"));
      $(this).attr("data-actor", "animate");
    } else {
      $(this).attr("img src", $(this).attr("data-still"));
      $(this).attr("data-actor", "still");
    }
  });