let userScore = 0;
let compScore = 0;
let UserWin = true;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let useScr = document.querySelector("#user-score");
let cpmScr = document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log(userChoice);
    console.log(compChoice);
    if(userChoice==compChoice){
        drawGame();
    } else{
        
        if(userChoice == "rock"){
            UserWin = compChoice ==="paper" ? false : true;
        }
        else if(userChoice == "paper"){
            UserWin = compChoice ==="Scissors" ? false : true;
        }
        else if(userChoice == "Scissors"){
            UserWin = compChoice ==="rock" ? false : true;
        }
        showWinner(UserWin,compChoice,userChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", ()  => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
const showWinner = (userWin,compChoice,userChoice) =>{
    if(UserWin){
        msg.innerText = `You Win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        useScr.innerText = userScore;
    }
    else{
        msg.innerText = `You Lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        cpmScr.innerText = compScore;
    }
}
const drawGame = ()=>{
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}