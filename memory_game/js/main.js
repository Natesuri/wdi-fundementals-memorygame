console.log("Up and running!");

var cards = [

{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];
var cardsInPlay = [];

var successfulMatch = 0;

//var gameOver = false;

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

var resetPage = function () {
	cardsInPlay = [];
	var imageReset = document.querySelectorAll('#game-board img');
	for (var i = 0; i < imageReset.length; i++) {
		imageReset[i].setAttribute('src', 'images/back.png');
	//gameOver = false;
	}
};

var initializeButton = function () {
	var resetButton = document.getElementById('reset');
	resetButton.addEventListener('click', resetPage);
};



var checkForMatch = function () {		

	if (cardsInPlay.length !== 2) {
		console.log;
	} else if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		successfulMatch = (successfulMatch + 1);
		document.getElementById('gameScore').innerHTML = successfulMatch;
	} else {
		console.log("Sorry, try again.");
	}
};



var flipCard = function () {

	//if game over, return
	/*
	if (gameOver = true) {
		console.log("gameover");
		return;
	} else {
		*/

	if (cardsInPlay.length === 2) {
		return;
	} else {

	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	console.log(cards[cardId].cardImage)
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);	

	checkForMatch();

}
	
};


createBoard();
initializeButton();