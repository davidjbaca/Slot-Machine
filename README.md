# Slot-Machine

## Introduction

In today's casino you'll see a variety of types of slot machines, but the orginal is still heavily influencing the modern ones. Many different countries having their own version it's a bit hard to pinpoint the actual inventor since a patent wasn't allowed due to it being illegal to gamble. August Charles Fey was the one that perfected a stolen idea, and is considered the inventor. A slot machine, for some it's a frequent destination when going onto a casino floor, and for other's that don't really play alot of cards, it's their way of gambling when at a casino. From a ski resort in New Mexico, in a Vegas icon, or all the way in Atlantic city, slot machines are always a key staple in every casino. 

## Description 

This digial web browser isn't fully equiped as the ones you find in casinos but the functions are all there. 
Creating a base from my wireframe, I stuck to my concept of three options, a play "spin" button, reset button, and an outcome. 

#### How it was built

1. Build the html along with thought of how to seperate the fields.
2. Create the fields utilizing the grid funciton. 
3. Identify what functions would be utilized. 
4. Make sure it all works 

#### My favorite part

The java script was what gave me the most trouble but I was able to get it figured out. 

This code, 



    const items = ['🍒','💰', '🍇']
    const randomIndex = Math.floor(Math.random() * (2 - 0 + 1)) +0;

    return items [randomIndex];


and the render function. The first was how I randomly was able to have a result and the second was how I got my reset button to finish. 





    for(let key in result){
        scoreEl[key].innerText = result[key];
    }

    slotoutcomes.display1.displayEl.innerText = null;
    slotoutcomes.display2.displayEl.innerText = null;
    slotoutcomes.display3.displayEl.innerText = null;


## How to play

The user, player, etc... will have a one time opportunity. The spin button is clicked, the three displays show three options of emoji's (🍒,💰, 🍇) and if you have three of a kind you are a winner and are shown "You Won!!" in white letters and if you don't have three of a kind you are then shown "You lose.." .

<img width="1280" alt="Screen Shot 2022-11-17 at 3 18 46 PM" src="https://user-images.githubusercontent.com/116526025/202565335-83447918-94fb-4724-9608-aa7740b3a19d.png">

What you'll see if you win..

<img width="1280" alt="Screen Shot 2022-11-17 at 3 19 05 PM" src="https://user-images.githubusercontent.com/116526025/202565607-b1e7ab03-8f49-40e6-b500-5cc50ec8d5f2.png">

What you'll see if you lose..

<img width="1280" alt="Screen Shot 2022-11-17 at 3 18 53 PM" src="https://user-images.githubusercontent.com/116526025/202565667-22c36cf5-8f39-457c-af7f-ac89b298c7cf.png">

The reset button lets you play again or you can simply click the spin button again for another chance. 

## Technologies used:

- HTML
- CSS
- Javascript
- VS Code
- GitHub

## Planned improvements:

1. Add a spinning slot.
2. Have a cash register sound when the spin function is pushed.
3. Add a delay so that the slots don't all spin and stop at the same time. 
4. Add more options as far as the emoji's 

#### Play the game here!

https://davidjbaca.github.io/Slot-Machine/

