const gameSummary = {
    numbers:0,
    wins:0,
    losses: 0,
    draws:0
};
const game ={
    playerHand: "",
    aiHand: ""
};
const hands = [...document.querySelectorAll('.select img')];

function aiChoice(){
    return hands[Math.floor(Math.random()*3)].dataset.option;
}

function handSelection(){
    game.playerHand=this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand=>hand.getElementsByClassName.boxShadow='');
    this.style.boxShadow='0 0 0 4px red';
}
function checkResult(player, ai){
    console.log(player, ai);
    if (player===ai){
        return 'draw';
    }else if ((player==='papier' && ai==='kamień') ||
    (player==='kamień' && ai==='nożyczki') ||
    (player==='nożyczki' && ai==='papier')){
        return 'win';
    }else{
        return 'loss';
    }
}
function startGame(){
    if (!game.playerHand)
    return alert("Wybierz dłoń!!!!!");
    game.aiHand=aiChoice();
    const gameResult=checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);
}

function publishResult(player,ai,result){
    document.querySelector('[data-summary="your-choice"]').textContent =player;
    document.querySelector('[data-summary="ai-choice"]').textContent =ai;
    document.querySelector('p.numbers span').textContent=++gameSummary.numbers;
    if (result=='win'){
        document.querySelector('[data-summar="who-win"]').textContent="Wygrywa gracz!";
        document.querySelector('[data-summar="who-win"]').style.color="green";
        document.querySelector('p.wins span').textContent=++gameSummary.wins;
    }else if (result=='loss'){
        document.querySelector('[data-summar="who-win"]').textContent="Wygrywa komputer!";
        document.querySelector('[data-summar="who-win"]').style.color="red";
        document.querySelector('p.losses span').textContent=++gameSummary.losses;
    }else{
        document.querySelector('[data-summar="who-win"]').textContent="Remis!";
        document.querySelector('[data-summar="who-win"]').style.color="gray";
        document.querySelector('p.draws span').textContent=++gameSummary.draws;
    }
}

hands.forEach(hand=>hand.addEventListener('click', handSelection));
document.querySelector('.start').addEventListener('click', startGame);
//windows.onload = function(){
//game.aiHand=aiChoice();
