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

let humanScore = 0;
let computerScore = 0;

  for (let step = 0; step < 5; step++)  {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    getPlayRound(computerSelection, humanSelection);
    console.log(`Round ${step+1}: human has ${humanScore} / computer has ${computerScore}`);
  }

  
  function getComputerChoice(computerSelection)    {
    const computerChoiceNum = Math.random();
    console.log(computerChoiceNum);
    if (computerChoiceNum < 1/3) {
        computerSelection = `Rock`;
    } else if ( 1/3 < computerChoiceNum && computerChoiceNum < 2/3) {
        computerSelection = `Paper`;
    }  else {
        computerSelection = `Scissors`;
    }
/*     console.log(`computer says: ${computerSelection}`); */
    return computerSelection;
  }

  
  function getHumanChoice(humanSelection)   {
    humanSelection = prompt(`What is it going to be: rock, paper or scissors?`);
/*     console.log(`human says: ${humanSelection}`); */
    return humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1).toLowerCase();
  }

  function getPlayRound(computerSelection, humanSelection) {
    console.log(`the input for the comparison for the computer is "${computerSelection}" and for the human "${humanSelection}". Now we play ...`)
    
    // if human plays rock && computer plays rock, then humanscore +0 and computer score +0

    if (humanSelection === `Rock` && computerSelection === `Rock`)   {
/*         console.log("tie"); */
    }
    // if human plays rock && computer plays papers, then humanscore +0 and computer score +1
    else if (humanSelection === `Rock` && computerSelection === `Paper`)   {
/*         console.log("Computer Wins"); */
        ++computerScore;
    }
    // if human plays rock && computer plays scissors, then humanscore +1 and computer score +0
    else if (humanSelection === `Rock` && computerSelection === `Scissors`)   {
/*         console.log("Human Wins"); */
        ++humanScore;
    }
    // if human plays paper && computer plays rock, then humanscore +1 and computer score +0
    else if (humanSelection === `Paper` && computerSelection === `Rock`)   {
/*         console.log("Human Wins"); */
        ++humanScore;
    }    // if human plays paper && computer plays paper, then humanscore +0 and computerscore +0
    else if (humanSelection === `Paper` && computerSelection === `Paper`)   {
/*         console.log("tie"); */
    }
    // if human plays paper && computer plays scissors, then human score +0 and computer score +1
    else if (humanSelection === `Paper` && computerSelection === `Scissors`)   {
/*         console.log("Computer Wins"); */
        ++computerScore;
    }
    // if human plays scissors && computer plays rock, then human score +0 and computer score +1
    else if (humanSelection === `Scissors` && computerSelection === `Rock`)   {
/*         console.log("Computer Wins"); */
        ++computerScore;
    }
    // if human plays scissors && computer plays paper, then human score +1 and computer score +0
    else if (humanSelection === `Scissors` && computerSelection === `Paper`)   {
/*         console.log("Human Wins"); */
        ++humanScore;
    }
    // if human plays scissors && computer plays scissors, then human score +0 and computer score +0
    else if (humanSelection === `Scissors` && computerSelection === `Scissors`)   {
/*         console.log("tie"); */
    }
    // Else
    else {
        console.log("invalid input");
    }

/*     console.log(`the computer has ${computerScore} and the human has ${humanScore}`); */
    return {computerScore, humanScore};
} 

