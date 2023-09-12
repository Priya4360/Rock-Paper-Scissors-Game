let score = JSON.parse(localStorage.getItem('score'))
|| {
    Wins: 0,
    Loses: 0,
    Ties: 0
};

updateScoreElement();

/*  if(score === null){
    score = {
        Wins: 0,
        Loses: 0,
        Ties: 0
    };
}  */

/*  if(!score){
    score = {
        Wins: 0,
        Loses: 0,
        Ties: 0
    };
}  */

let isAutoPlaying = false;

let intervalId;

function autoPlay(){
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoPlaying = true;

    }else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if(playerMove === 'Rock'){
        if(computerMove === 'Rock'){
            result = 'Tie';
        }else if(computerMove === 'Paper'){
            result = 'You Lose';
        }else if(computerMove === 'Scissors'){
            result = 'You Win';
        }

    }else if(playerMove === 'Paper'){
        if(computerMove === 'Rock'){
            result = 'You Win';
        }else if(computerMove === 'Paper'){
            result = 'Tie';
        }else if(computerMove === 'Scissors'){
            result = 'You Lose';
        }
        
    }else if(playerMove === 'Scissors'){
        if(computerMove === 'Rock'){
            result = 'You Lose';
        }else if(computerMove === 'Paper'){
            result = 'You Win';
        }else if(computerMove === 'Scissors'){
            result = 'Tie';
        }
    }

    if(result === 'You Win'){
        score.Wins += 1;
    } else if(result === 'You Lose'){
        score .Loses += 1;
    }else if(result === 'Tie'){
        score.Ties += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
    .innerHTML = result;

    document.querySelector('.js-moves')
    .innerHTML 
    = `You
    <img src="images/${playerMove}.png"
    class="move-icon">
    <img src="images/${computerMove}.png" 
    class="move-icon">
    Computer`;

/*  alert(`You picked ${playerMove}, Computer picked ${computerMove}, result is ${result}
Wins: ${score.Wins}, Loses: ${score.Loses}, Ties: ${score.Ties}`);  */
    }   

function updateScoreElement(){
    document.querySelector('.js-score')
     .innerHTML = `Wins: ${score.Wins}, Loses: ${score.Loses}, Ties: ${score.Ties}`;
    }

function pickComputerMove(){
    const randomNumber = Math.random();  

    let computerMove  = '';

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'Scissors';
    }
    return computerMove;
}