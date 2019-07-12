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
        $("#gifs-appear-here").empty()
        for (i = 0; i < 10; i++) {
            var gif = $("<img class='gif-Image' src='" + response.data[i].images.fixed_height.url + "'>")
            $(gif).attr("data-animated", response.data[i].images.fixed_height.url)
            $(gif).attr("data-still", response.data[i].images.fixed_height_still.url)
            $(gif).attr("data-state")
            $(gif).attr("data-rating", response.data[i].rating)
            $("#gifs-appear-here").append(gif)
        }
    });
});

$(document).on("click", '.gif-Image', function() {
    console.log("this works");
    var state = $(this).attr("");
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
