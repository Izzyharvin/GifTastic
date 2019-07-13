// This is an array of strings using variable
var actors = ["will smith", "bruce lee", "kevin hart", "samuel jackson", "denzel washington", "morgan freeman", "johnny depp", "halle berry", "scarlett johansson", "chris hemsworth", "tom holland"]

// This is a button that catches when the user clicks on a button
$("button").on("click", function () {
    console.log(this)
    // The variable person which is equal (this) that converts the DOM element returned by this to a jQuery object 
    // and .attr is the method that gets the attribute value for the element 
    var person = $(this).attr("data-actor");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&rating=PG&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    //Its a method using .ajax to pass a URL from the query in the variable and using method to GET the information
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    //Tells the computer not to run it yet but to hold on to it when the computer get the response back
    .then(function (response) {
        console.log(response)
        //The gifs-appear-here shows shows the gifs of the actor they choose  or created and the .empty clears the 
        //gifs when clicked on the other actor button.
        $("#gifs-appear-here").empty()
        //This is a for loop and its going to show 10 gifs instead of one.
        for (i = 0; i < 10; i++) {
            //Made a gif variable that is equal to the method which is going to grab the fixed height of the source
            //image.
            var gif = $("<img class='gif-Image' src='" + response.data[i].images.fixed_height.url + "'>")
            //This is the method gif that makes the attribute data animated for fixed height.
            $(gif).attr("data-animated", response.data[i].images.fixed_height.url)
            //This is the method gif that makes the attribute data animated for fixed height still. 
            $(gif).attr("data-still", response.data[i].images.fixed_height_still.url)
            //This is the method gif that makes the attribute data state.
            $(gif).attr("data-state")
            //This is the method gif that makes the attribute data rating and filters the rating.
            $(gif).attr("data-rating", response.data[i].rating)
            //This is the method gif-appear-here that append the gif.
            $("#gifs-appear-here").append(gif)
        }
    });
});

//This is the .on click method and the .gif-Image and the function
$(document).on("click", '.gif-Image', function() {
    console.log("this works");
    //Made a variable called state which is equal to the method (this) and the .attribute is data-animated. 
    var state = $(this).attr("");
    //This is a if/else statement that if the state equal still then it will animate but for else if the data is
    //clicked it will turn from animate to still.
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animated"));
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

//Grabbing the id of add-actor then using the .on("click") function.
$("#add-actor").on("click", function(event) {
    //Automatically refresh page after pressing the click button
    event.preventDefault();
    //Made a variable called btnText equal to the input actor that the user puts in and .trim means it cut out
    //the spaces before and after the text and .val stores what the user type.
    var btnText = $("#actor-input").val().trim()
    //Made a variable newBtn equal to the method "new" button. 
    var newBtn = $("<button>")
    //The newBtn attribute
    newBtn.attr("actor", btnText)
    //The newBtn.text is going to replace the text with what the user looking for.
    newBtn.text(btnText)
    //The method buttons is going to append with the rest of the buttons.
    $("#buttons").append(newBtn)
})
