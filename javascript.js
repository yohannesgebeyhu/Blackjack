let player ={
    name : "Yohannes Gebeyhu:",
    chips: 145,
    currencyType: " $",
    sayHello: function(){
        console.log("Heisann!")
    }

}
player.sayHello()
let cards = []
let sum = 0
let gameMessage =document.getElementById("message-el")
let cardsEL = document.getElementById("card")
let cardTotal = document.getElementById("sum")
let isAlive = false
let hasBlackJack = false
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name  + player.currencyType + player.chips
let fsum = true 



function randomCards(){
    let deckOfCards = Math.floor(Math.random() * 13) + 1
    if (deckOfCards === 1){
        return 11
    } else if (deckOfCards ===11 || deckOfCards === 12 || deckOfCards === 13 ){
        return 10
      } else{
        return deckOfCards
      }
}
function startGame(){
     if ( isAlive === false){
    cards = []
    isAlive = true
    hasBlackJack = false0
    let firstCard = randomCards()
    let secondCard = randomCards()
    cards = [firstCard, secondCard]
    sum = firstCard +secondCard
    renderGame()
    } else {

    }
}


function renderGame(){
    cardsEL.textContent = "cards:"
    for(i =0; i <cards.length; i++){
        cardsEL.textContent += cards[i] + " "
    }
    cardTotal.textContent = "sum:" + sum

    if (sum < 21){
        gameMessage.textContent = "Do you want to draw another card"
    } else if (sum === 21 ){
        gameMessage.textContent = "You won!"
        hasBlackJack = true
        isAlive = false

    } else {
        gameMessage.textContent = "You lost!"
        isAlive = false
    }

}
function newCard(){
    if (isAlive === true && hasBlackJack === false){
    let theNewCard = randomCards()
    sum += theNewCard 
    cards.push(theNewCard)
    renderGame()
     
}
}