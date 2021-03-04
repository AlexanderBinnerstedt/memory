"use strict";


const cards = document.querySelectorAll('.card');

cards.forEach(card => card.addEventListener('click', flipCard));

let cardsclicked = false;
var value1;
var value2;
let firstCard, secondCard;
shuffle();

function flipCard() {

    if (!this.classList.contains('flip')) {

        if (cardsclicked == false) {
            this.classList.toggle('flip');
            value1 = document.getElementById(this.id).getAttribute("value");
            cardsclicked = true;
            firstCard = this;
        } else if (cardsclicked == true) {
            this.classList.toggle('flip');
            value2 = document.getElementById(this.id).getAttribute("value");
            cardsclicked = false;
            secondCard = this;

            if (value1 == value2){ //Om korten är samma
                console.log("they are the same");
                firstCard.removeEventListener('click',flipCard)
                secondCard.removeEventListener('click',flipCard)
            } else{ //Om korten inte är samma
                setTimeout(() => {
                    firstCard.classList.toggle('flip')
                    secondCard.classList.toggle('flip')
                }, 1500);
            }
        }
    }
}

function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
}