var hearts = new Image();
var clover = new Image();
var diamond = new Image();
var spades = new Image();
var cardBack = new Image();

hearts.src = "/resources/heartCard.jpg";
clover.src = "/resources/cloverCard.jpg";
diamond.src = "/resources/diamondCard.jpg"
spades.src = "/resources/spadeCard.jpg";
cardBack.src = "/resources/back_face.png";

var cards = [];
var playedCards = [];

function update(){
  ClearScreen();
  window.requestAnimationFrame(draw);
}

function draw(){
  DrawBackground();
  DrawPlayerSeats();
  DrawCards();
  //drawTestCards();
}

function DrawCards(){
  cards.forEach(card => {
    card.draw();
  });
}

window.onclick = (e) => {
  if(randomNumber(0,2) == 0)
    cards.push(new Card(true, e.clientX, e.clientY));
  else {
    cards.push(new Card(false, e.clientX, e.clientY));
  }
}
