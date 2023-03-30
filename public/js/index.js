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
var buttons = [];
var mousePos;

function update(){
  ClearScreen();
  window.requestAnimationFrame(draw);
}

function draw(){
  DrawBackground();
  DrawButtons();
  DrawPlayerSeats();
  DrawCards();

  CheckButtonHover();
  drawButtonsOnCanvas();
  //drawTestCards();
}

function DrawCards(){
  cards.forEach(card => {
    card.draw();
  });
}

function DrawButtons(){
  buttons.forEach(btn => {
    btn.draw();
  });
}

function CheckButtonHover(){
  buttons.forEach(button => {
    if((mousePos.x >= button.x && mousePos.x <= (button.x+button.w)) &&
    (mousePos.y >= button.y && mousePos.y <= (button.y+button.h)))
    {
      button.changeHover(true);
      return;
    }
    button.changeHover(false);
  });
}

window.onclick = (e) => {
  checkbuttonpress(e);
}

//Update buttons positions based on screen size
function updatePositions