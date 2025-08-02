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

window.gameState = "menu"; // Possible states: menu, host, join

function update(){
  ClearScreen();
  window.requestAnimationFrame(draw);
}

function draw(){
  ClearScreen();

  if (window.gameState === "menu") {
    DrawMenu();
  } else if (window.gameState === "host") {
    DrawHostGame();
  } else if (window.gameState === "join") {
    DrawJoinGame();
  }

  CheckButtonHover();
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

function DrawMenu() {
  // Draw menu background and buttons
  DrawBackground();
  const canvas = document.getElementById("gameCanvas");
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  // Draw game title
  DrawTextWithStyle("Blackjack Multiplayer", canvasWidth / 2, canvasHeight * 0.4, "40px Arial", "#FFD700", "center");

  buttons = [
    { x: canvasWidth / 2 - 100, y: canvasHeight * 0.6, w: 200, h: 50, text: "Host Game", onClick: () => window.gameState = "host" },
    { x: canvasWidth / 2 - 100, y: canvasHeight * 0.6 + 70, w: 200, h: 50, text: "Join Game", onClick: () => window.gameState = "join" }
  ];
  buttons = buttons.map(button => ({
    ...button,
    changeHover: function(isHovered) {
      this.isHovered = isHovered;
      // Add any additional hover behavior here
    }
  }));
  buttons.forEach(button => {
    DrawButton(button);
  });
}

function DrawHostGame() {
  // Placeholder for host game screen
  console.log("Hosting game...");
  DrawText("Hosting Game...", screen.width / 2, screen.height / 2);
}

function DrawJoinGame() {
  // Placeholder for join game screen
  console.log("Joining game...");
  DrawText("Joining Game...", 100, 100);
}

function DrawButton(button) {
  // Draw a button with text
  DrawRectangle(button.x, button.y, button.w, button.h, "#ccc");
  DrawTextWithStyle(button.text, button.x + 100 , button.y + 30, "20px Arial", "#000", "center");
}

function DrawRectangle(x, y, w, h, color) {
  const canvas = document.getElementById("gameCanvas"); // Ensure your canvas has this ID
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function DrawText(text, x, y) {
  const canvas = document.getElementById("gameCanvas"); // Ensure your canvas has this ID
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000"; // Set text color
  ctx.font = "20px Arial"; // Set font size and style
  ctx.fillText(text, x, y);
}

function DrawTextWithStyle(text, x, y, font, color, align) {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = align;
  ctx.fillText(text, x, y);
}

window.onclick = (e) => {
  checkbuttonpress(e);
}