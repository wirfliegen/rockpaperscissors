// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
  var userChoice = $("input").val(); 
    
  $("#userChoice").text(userChoice);
  
  var computerChoice = Math.random();
  
  if(computerChoice > .80) {
      $("#computerChoice").html("Frederick");
  }
  else if(computerChoice > .60) {
      $("#computerChoice").html("axes");
  }
  else if(computerChoice > .40) {
      $("#computerChoice").html("swords");
  }
  else if(computerChoice > .20) {
      $("#computerChoice").html("lances");
  }
});

// DOCUMENT READY FUNCTION BELOW
var userChoice = "";

var computerChoice = "";

var winner ="";

var randomNumber = 0;
