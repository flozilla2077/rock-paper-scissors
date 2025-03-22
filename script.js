console.log("hello, world")

// play the round code
    // ??
//computer choice code
    // random numer 1/3 vs 1/3 vs 1/3
    // if then rock paper or scissor
    //return
//player choice code
    // get input, by hardcoding in .js file
    // return variable
// loop to play <= 5 times
    // number of rounds +1
// track score code
    // count win robot
    // count win player


function playRound(humanChoice, computerChoice) {
    // your code here!
  }
  
//define Variables

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  let humanScore = 0;
  let computerScore = 0;
  
  function getComputerChoice()    {
    const computerChoiceNum = Math.random();
    console.log(computerChoiceNum);
    if (computerChoiceNum <= 1/3) {
        getComputerChoice = `Rock`;
    } else if ( 1/3 < computerChoiceNum < 3/3) {
        getComputerChoice = `Paper`;
    }  else {
        getComputerChoice = `Scissors`;
    }
    console.log(`computer says: ${getComputerChoice}`);
    return getComputerChoice;
  }
  
  function getHumanChoice(getHumanChoice)   {
    getHumanChoice = prompt(`What is it going to be: rock, paper or scissors?`);
    console.log(`human says: ${getHumanChoice}`);
  }

 /*  function playRound(, ) {

  } */