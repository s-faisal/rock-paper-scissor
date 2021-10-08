var score = {
    "tie": 0,
    "com": 0,
    "user": 0
}
var gameStatus = ""
printScore()

function computerPlay() {
    const options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * options.length)];;
}

function draw(userSelection){
    addAnimation()
    setTimeout(()=>{
        play(userSelection)
    }, 2000);
}

function play(userSelection) {
    computerSelection = computerPlay()
    if(userSelection == computerSelection){
        gameStatus = "It's a tie. Tough Player!";
        score.tie++
    }else if((computerSelection=='scissors' && userSelection=='paper') || (computerSelection=='paper' && userSelection=='rock') || 
            (computerSelection=='rock' && userSelection=='scissors')){
        gameStatus = "I won. Try Harder!";
        score.com++
    }else{
        gameStatus = "You won. Cut me some slack dude!";
        score.user++
    }

    clearAndSelect(computerSelection, "Com")
    removeAnimation()
    printStatus(gameStatus)
    printScore()
}

function clearAndSelect(selection, type){
    var elements = document.querySelectorAll(".button"+(type ? "-"+type.toLowerCase() : ""));
    elements.forEach(elem => {
        elem.classList.remove("selected");
    })
    if(selection){
        document.getElementById(selection+type).classList.add("selected")
    }
}

function printStatus(result){    
    if(result){
        document.getElementById('status').innerHTML = result
    }
}

function printScore(){  
    var scoreStatus = ''
    Object.keys(score).forEach((elem, idx) => {
        scoreStatus += elem + ":" + score[elem] + ((idx == Object.keys(score).length-1) ? "" : " | ")
    })
    document.getElementById('score').innerHTML = scoreStatus
}