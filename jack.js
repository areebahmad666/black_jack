
let player = 
{
    name : "Owais",
    Chips : 786

}
let cards = [];


let sum = 0;

let hasBlack = false;

let isAlive = true;

let message = "";


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ":$" + player.Chips;



function getRandomCard()
{
    let ranDomNum = Math.floor(Math.random() * 13) + 1;
    if(ranDomNum > 10)
    {
        return 10;

    }
    else if(ranDomNum === 1)
    {
        return 11;

    }
    else
    {
        return ranDomNum;

    }



}

function startGame()
{
    let FirstCard = getRandomCard();

    
    let SecondCard = getRandomCard();

    cards  = [FirstCard,SecondCard];
    
    sum = FirstCard + SecondCard;




    renderGame()
}
function renderGame(){  
    
    if(sum <=20)
    {
        message ="Do you want to draw a new card ?";
        isAlive = true;

        
    }
    else if(sum === 21)
    {
        message ="Wohoo ! You've got Blackjack. ";
        hasBlack = true;
        
        
    }
    else
    {
        message ="You're out of game ";
        isAlive = false;
        
        
    }
    
    messageEl.textContent = message;
    // render out first and second card:
    cardsEl.textContent = "Cards : ";
    // render out all the cards
    for(let i=0;i<cards.length;i+=1)
    {
        cardsEl.textContent += cards[i] + " ";
    }
    // render out all cards we have
    sumEl.textContent = "Sum :" + " " + sum;
    

    
    
}

function newCard()
{
  
   
   if(isAlive === true && hasBlack === false ) {
     

        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();  
    
    
}

}




