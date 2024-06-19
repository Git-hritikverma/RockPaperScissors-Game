let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =  document.querySelector("#UserScore");
const compScorePara =  document.querySelector("#CompScore");

const genCompChoice = () => {
    let opctions = ["Rock" , "Paper" , "scissor"]
    const randIdx = Math.floor(Math.random() * 3);
    return opctions[randIdx];

}

let ShowWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You winner. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
         msg.innerText = `You lose.  ${compChoice} beats Your ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
     msg.innerText = "Game was Draw , Play Again...";
     msg.style.backgroundColor = "#081b31"; 

}

const playGame = (userChoice) =>  {
    // Genarate Computer choice-
    const compChoice = genCompChoice();
    if( userChoice === compChoice){
        // Draw game-
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "Rock"){
            // Psper,scissor
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            // Rock,scossor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
           userWin = compChoice === "Rock" ? false : true;
        }
        ShowWinner(userWin , userChoice,compChoice);
    }
};
  

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice Was Clicked",userChoice);
        playGame(userChoice);
    });
} );

// skreen Mode Chanege Programe
let modebtn = document.querySelector("#mode");
let body =  document.querySelector("body")
let currMode = "light"
modebtn.addEventListener("click", () => {
    if (currMode == "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
     }
    console.log(currMode);
});
