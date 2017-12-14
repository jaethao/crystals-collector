$(document).ready(function() { //load document before script
// Declare varibles
var displayNum,
computerNum,
crystalNum,
additionOperator;

//counters
var wins = 0,
    losses = 0,
    displayNum = 0;


//functions, generate random number from 19 to 220 for computerNum everytime we win or lose
var computerNum = Math.floor(Math.random() * 102) + 19;
$('.computerNum').text(computerNum);


//function, generate random number from 1 to 12 crystalNum
for(var i = 0; i < 4; i++){
  var random =  Math.floor(Math.random() * 12) + 1;
var crystal = $(".crystal");
crystal.attr({
  "data-random": random
});

console.log(crystal);
    };
}
