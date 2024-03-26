let userScore =0;
let compScore=0;

const choices=document.querySelectorAll('.choice');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const getComputerChoice = () =>{
    const options=['rock','paper','scissors'];
    const randIdx = Math.floor(Math.random()*3);
    return  options[randIdx];
}

const drawGame =() =>
{
    console.log('Game was draw');
    msg.innerText='Game was Draw.Play again.';
    msg.style.backgroundColor='#081b31';
}

const showWinner =(userWin,userChoice,compChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        console.log('You Win');
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor='green';
    }

    else
    {
        compScore++;
        compScorePara.innerText=compScore;
        console.log('You lose');
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor='red';
    }
}

const playGame = (userChoice)=>
{   
    console.log("user:",userChoice);
    // Generate computer Choice
    const compChoice=getComputerChoice();
    console.log("computer:",compChoice);
    if (userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        if (userChoice==='rock')
        {
            // paper,scissors
            userWin = compChoice === 'paper' ? false : true;
        }
        else if (userChoice==='paper')
        {
            // rock,scissors
            userWin = compChoice === 'scissors'?false : true;
        }
        else
        {
            // rock,paper
            userWin = compChoice ==='rock'? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach(choice=> {
    choice.addEventListener('click',()=>
    {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})