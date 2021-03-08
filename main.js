"use strict";

const cards = document.querySelectorAll('.card');

cards.forEach(card => card.addEventListener('click', flipCard));

let cardsclicked = false;
var value1;
var value2;
let firstCard, secondCard;
let lock = false;
var fails = 0;
document.getElementById('fails').innerHTML = "incorrect choices: " + String(fails);
shuffle();

function flipCard() {
    if (lock) return;
        
    if (!this.classList.contains('flip')) {

        if (cardsclicked == false) {            //Första kortet
            this.classList.toggle('flip');
            value1 = document.getElementById(this.id).getAttribute("value");
            cardsclicked = true;
            firstCard = this;
        } else if (cardsclicked == true) {     //Andra kortet
            this.classList.toggle('flip');
            value2 = document.getElementById(this.id).getAttribute("value");
            cardsclicked = false;
            secondCard = this;

            checkMatch();
        }
    }
}

function checkMatch() {

    if (value1 == value2){ //Om korten är samma
        firstCard.removeEventListener('click',flipCard)
        secondCard.removeEventListener('click',flipCard)
    } else {            //Om korten inte är samma
        lock = true;
        fails++;
        console.log(document.getElementById('fails'));
        document.getElementById('fails').innerHTML = "incorrect choices: " + String(fails);
        setTimeout(() => {
            firstCard.classList.toggle('flip')
            secondCard.classList.toggle('flip')
            lock = false;
        }, 1500);
    }
}

function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 16);
      card.style.order = randomPos;
    });
}