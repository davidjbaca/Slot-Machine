const slotRules = {
    cherry: {
        threeOfAKind: 'wins',
        imageUrl: 'imgs/Cherry.png'
    },
    tripleSeven: {
        threeOfAKind: 'wins',
        imageUrl: 'imgs/LuckySeven.png'
    },
    grapes: {
        threeOfAKind: 'wins',
        imageUrl: 'imgs/Grapes.png'
    }
}

const scoreEl =  {
    player: {
        borderEl: document.querySelector('#Score')
    }
}

const slotoutcomes = {
    display1: {
        displayEl: document.querySelector('#display1'),
        imgEl: document.querySelector('#display1 > img')
    },
    display2: {
        displayEl: document.querySelector('#display2'),
        imgEl: document.querySelector('#display2 > img')
    }
    display3: {
        displayEl: document.querySelector('#display3'),
        imgEl: document.querySelector('#display3 > img')
    }
}