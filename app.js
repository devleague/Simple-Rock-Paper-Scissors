//var userChoice = prompt("Do you choose rock, paper or scissors?");
function userRock() {
    userChoice = "rock";
    results();
};
function userPaper() {
    userChoice = "paper";
    results();
};
function userScissors() {
    userChoice = "scissors";
    results();
};

function results() {
    alert("You Choose: " + userChoice);
    alert("Computer: " + computerChoice);
    compare(userChoice, computerChoice);
};


var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 


var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
    alert("The result is a tie!")
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            
            alert("You Win")
        }
        else {
            alert("You Lose")
            }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            alert("You Win")
        }
        else {
            alert("You Lose")
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            alert("You Win")
        }
        else {
            alert("You Lose")
        }
    }
    else {
        alert("That is not an appropriate answer")
    }
};








