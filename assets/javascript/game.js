$(document).ready(function() {
//global variables

var targetScore = [];
var userSCore = [];
var crystals = [red, blue, green, yellow];
var score = 0;
var wins = 0;
var losses = 0;
var counter = 0;



// generate random target score
    var randScore = function(){

        // targetScore = (Math.floor(Math.random() * 120) + 19);
        targetScore = getRandomIntInclusive(19,120);
        console.log("Target score is : " + targetScore);
    }

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

// generate random crystals value
	var crystalBlue = $('#crystalBlue');
    var crystalRed = $('#crystalRed');
    var crystalGreen = $('#crystalGreen');
    var crystalYellow = $('#crystalYellow');

    randomArray();

    function randomArray () {
        while(arr.length < 4){
            var randomnumber = Math.ceil(Math.random()*12)
            
            if(arr.indexOf(randomnumber) > -1) continue;
            
            arr[arr.length] = randomnumber;
        }

        crystalBlue.attr('data-crystalvalue', arr[0]);
        crystalRed.attr('data-crystalvalue', arr[1]);
        crystalGreen.attr('data-crystalvalue', arr[2]);
        crystalYellow.attr('data-crystalvalue', arr[3]);

        
    };

	for (var i = 0; i < crystals.length; i++) {
	}	

	$("crystals").on("click", function() {

	var crystalsValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);


    counter += crystalValue;


    	if (counter === targetNumber) {
      		alert("You win!"); wins++;
    	}

  		else if (counter >= targetNumber) {
 	 		alert("You lose!!"); losses++;
  		}
	});
	
});

