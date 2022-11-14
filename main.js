const slotRules = {
    cherry: {
        threeOfAKind: 'wins'
    },
    tripleSeven: {
        threeOfAKind: 'wins'
    },
    grapes: {
        threeOfAKind: 'wins'
    }
}

let score = {
    player: 0,
}

const scoreEls = {
    player: document.querySelector("score");
}


const button = document.querySelector('button');

button.addEventListener('click'