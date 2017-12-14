$( document ).ready(function(){

  // Selects a random number from 19 -220 to be shown at the start of the game
  var computerNum = Math.floor(Math.random()*101+19);

  //display computerNum when page load
  $('#computer').text(computerNum);

  //assign random number from 1 - 12 to 4 crystals
  var num1 = Math.floor(Math.random()*11+1);
  var num2 = Math.floor(Math.random()*11+1);
  var num3 = Math.floor(Math.random()*11+1);
  var num4 = Math.floor(Math.random()*11+1);

  // variables
  var userNum= 0;
  var wins= 0;
  var losses = 0;
  //  Decaring variables for tallies
$('#wins').text(wins);
$('#losses').text(losses);
//resets the game
function reset(){
      computerNum = Math.floor(Math.random()*101+19);
      console.log(computerNum)
      $('#computer').text(computerNum);
      num1 = Math.floor(Math.random()*11+1);
      num2 = Math.floor(Math.random()*11+1);
      num3 = Math.floor(Math.random()*11+1);
      num4 = Math.floor(Math.random()*11+1);
      userNum = 0;
      $('#user').text(userNum);
    };

//win/lose functions
//win function
function winner(){
alert("You won!");
  wins++;
  $('#wins').text(wins);
  reset();
};
//lose function
function loser(){
alert ("You lose!");
  losses++;
  $('#losses').text(losses);
  reset();
};  

//on click functions for each crystals
//crystal 1
  $('#crystal1').on ('click', function(){
    userNum = userNum + num1;
    console.log("New userNum= " + userNum);
    $('#user').text(userNum);
//win/lose conditions
        if (userNum == computerNum){
          winner();
        }
        else if ( userNum > computerNum){
          loser();
        }
  });

//crytsal 2
  $('#crystal2').on ('click', function(){
    userNum = userNum + num2;
    console.log("New userNum= " + userNum);
    $('#user').text(userNum);
//win/lose conditions
        if (userNum == computerNum){
          winner();
        }
        else if ( userNum > computerNum){
          loser();
        }
  });

//crystal 3
  $('#crystal3').on ('click', function(){
    userNum = userNum + num3;
    console.log("New userNum= " + userNum);
    $('#user').text(userNum);
//win/lose conditions
        if (userNum == computerNum){
          winner();
        }
        else if ( userNum > computerNum){
          loser();
        }
  });

//crystal 4
  $('#crystal4').on ('click', function(){
    userNum = userNum + num4;
    console.log("New userNum= " + userNum);
    $('#user').text(userNum);
//win/lose conditions
        if (userNum == computerNum){
          winner();
        }
        else if ( userNum > computerNum){
          loser();
        }
  });

  //reset button, will reset game and scores
  $('#restart').on('click', function(){
    wins = 0;
    $('#wins').text(wins);
    losses = 0;
    $('#losses').text(losses);
    reset();
  });

});
