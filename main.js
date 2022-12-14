const scoreEl =  {
    player: {
        pointEl: document.querySelector('#Score')
    }

}

function scoreResult(e) {
    scoreEl.player.pointEl.innerText = result;
    
   
}

let result;


const slotoutcomes = {
    display1: {
        displayEl: document.querySelector('#display1'),
        imgEl: document.querySelector('#display1 > img')
    },
    display2: {
        displayEl: document.querySelector('#display2'),
        imgEl: document.querySelector('#display2 > img')
    },
    display3: {
        displayEl: document.querySelector('#display3'),
        imgEl: document.querySelector('#display3 > img')
    }
}

const spinbtn = document.querySelector('#Spin');
const resetbtn = document.querySelector('#Reset');

spinbtn.addEventListener('click', playSlot);

resetbtn.addEventListener('click',init);




function playSlot(i) {
    
    slotoutcomes.display1.displayEl.innerText = randomSlotResult();
    slotoutcomes.display2.displayEl.innerText = randomSlotResult();
    slotoutcomes.display3.displayEl.innerText = randomSlotResult();
    
    // console.log(slotoutcomes.display1.displayEl.innerText)

    if(slotoutcomes.display1.displayEl.innerText === slotoutcomes.display2.displayEl.innerText && slotoutcomes.display2.displayEl.innerText === slotoutcomes.display3.displayEl.innerText){
        result = "You won!!" 
        scoreResult ()
        return result;

    } else {
        result = "You lose.."
        scoreResult()
        return result;

    } 

}



function randomSlotResult(){

    const items = ['🍒','💰', '🍇']
    const randomIndex = Math.floor(Math.random() * (2 - 0 + 1)) +0;

    return items [randomIndex];
}

init();

function init (){
    result = null;



render();

}

function render(){



    for(let key in result){
        scoreEl[key].innerText = result[key];
    }

    slotoutcomes.display1.displayEl.innerText = null;
    slotoutcomes.display2.displayEl.innerText = null;
    slotoutcomes.display3.displayEl.innerText = null;
}



