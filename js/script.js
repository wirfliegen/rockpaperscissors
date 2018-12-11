// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function(){
  var userChoice = $("input").val().toLowerCase(); 
    
  if(userChoice === "frederick" || userChoice === "axes" || userChoice === "swords" || userChoice === "lances"){
    if(userChoice === "frederick"){
      userChoice = "Frederick";
    }
    
    $("#userChoice").text(userChoice);
    
    var computerChoice = Math.random();
    
    if(computerChoice > .80) {
      computerChoice = "Frederick";
        $("#computerChoice").html("Frederick");
    }
    else if(computerChoice > .60) {
        computerChoice = "axes"
        $("#computerChoice").html("axes");
    }
    else if(computerChoice > .40) {
        computerChoice = "swords"
        $("#computerChoice").html("swords");
    }
    else if(computerChoice > .20) {
        computerChoice = "lances"
        $("#computerChoice").html("lances");
    }
    
    var result
    if((computerChoice === "Frederick" && userChoice === "Frederick") || (computerChoice === "axes" && userChoice === "axes") || (computerChoice === "swords" && userChoice === "swords") || (computerChoice === "lances" && userChoice === "lances")) {
      $("#result").text("Tie");
    }
    else if((computerChoice === "Frederick" && userChoice === "axes") || (computerChoice === "Frederick" && userChoice === "lances") || (computerChoice === "Frederick" && userChoice === "swords") || (computerChoice === "axes" && userChoice === "Frederick") || (computerChoice === "swords" && userChoice === "Frederick") || (computerChoice === "lances" && userChoice === "Frederick")) {
      $("#result").text("Frederick wins!");
    }
    else if((computerChoice === "axes" && userChoice === "lances") || (computerChoice === "lances" && userChoice === "axes")) {
      $("#result").text("Axes win!");
    }
    else if((computerChoice === "axes" && userChoice === "swords") || (computerChoice === "swords" && userChoice === "axes")) {
      $("#result").text("Swords win!");
    }
    else if((computerChoice === "swords" && userChoice === "lances") || (computerChoice === "lances" && userChoice === "swords")) {
      $("#result").text("Lances win!");
    }
    
    $("input").val("");
  }else{
    $("#result").text("Not valid input")
  }
});

// DOCUMENT READY FUNCTION BELOW
var userChoice = "";

var computerChoice = "";

var winner ="";

var randomNumber = 0;
