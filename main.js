"use strict";

var cardsclicked = 0;

const cards = document.querySelectorAll('.card');

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {

    if (!this.classList.contains('flip')) {

        if (cardsclicked < 2) {
            this.classList.toggle('flip');
            cardsclicked++;
            
        }
    }

    if (cardclicked == 2) {
        
    }

}



