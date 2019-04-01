$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["item1", "item2", "item3", "item4", "item5"];

    var sorted=[];

    //Get the inputs and create new array to sort alphabetically
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      sorted.push(userInput);

    });

    //Alphabetize new array
    sorted.sort();

    //Insert inputs into html <UL>
    sorted.forEach(function(element){
      $(".putShitHere").append("<li>"+element.toUpperCase()+"</li>")

    })


    $("#favlist").slideDown();
    $("#formOne").slideUp();

    event.preventDefault();
  });
});
