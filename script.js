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
  
  playRound(humanSelection, computerSelection);

  function getComputerChoice()    {
    const computerChoiceNum = Math.random();
    console.log(computerChoiceNum);
    let computerChoice = 0; 
    console.log(computerChoiceNum);
    if (computerChoiceNum <= 1/3) {
        computerChoice = `Rock`;
    } else if ( 1/3 < computerChoiceNum <= 3/3) {
        computerChoice = `Paper`;
    }  else {
        computerChoice = `Scissors`;
    }
    console.log(`computer says: ${computerChoice}`);
    return computerChoice;
  }
  
  function getHumanChoice() {
    const humanChoice = `Rock`;
    console.log(`human says: ${humanChoice}`);
  }