const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

//conferindo se é igual as cartas

function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}

//desabilitando o click das cartas que foram viradas

function disableCards(){
    firstCard.removeEventListenner('click', flipCard);
    secondCard.removeEventListenner('click', flipCard);

    resetBoard();
}

//virando as cartas desiguais

function unflipCards(){
    lockBoard = true;

    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    },1500)
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard , secondCard] = [null, null];
}

function resetGame(){
    cards.forEach((card)=>{
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
        setTimeout(()=>{
            let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
        }, 600)
    })
    resetBoard()
}

(function shuffle(){
    cards.forEach((card)=>{
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
        
    })
})()



cards.forEach((card)=>{
    card.addEventListener('click', flipCard)
})

